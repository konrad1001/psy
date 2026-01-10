import { client } from "@/lib/client";
import { TestimonialData, GlobalConfig, HomePageData } from "@/types/types";
import { urlFor } from "@/utils/urlFor";
import RoundedButton from "./components/roundedButton";
import ImageCarousel from "./components/carousel";
import Testimonials from "./components/testimonials";

async function fetchContent(): Promise<{
  content: HomePageData;
  config: GlobalConfig;
  testimonials: TestimonialData;
}> {
  const content = await client.fetch<HomePageData>("*[_type == 'homePage'][0]");
  const config = await client.fetch<GlobalConfig>("*[_type == 'global'][0]");
  const testimonials = await client.fetch<TestimonialData>(
    "*[_type == 'testimonials'][0]",
  );
  return { content, config, testimonials };
}

async function Home() {
  const { content, config, testimonials } = await fetchContent();

  let percent = content.approachBoxOffset ?? 50;

  return (
    <section id="home" className="flex flex-col">
      {/* Green */}
      <div
        style={{ backgroundColor: config.primary.hex }}
        className={`flex min-h-screen flex-col items-center justify-center px-8 text-black sm:px-16 lg:px-32`}
      >
        <div className="pointer-events-none absolute inset-0 h-full opacity-50" />
        <div className="my-32 flex-col">
          <div className="flex flex-col justify-between space-y-4 md:flex-row">
            <div className="flex-1 flex-col space-y-4 md:pr-16 lg:pr-16">
              <h1 className="font-header text-4xl font-bold md:text-6xl">
                {content.therapistName}
              </h1>
              <h2 className="text-2xl md:text-4xl">{content.title}</h2>
              <p className="text-md pb-4 opacity-70 md:text-2xl">
                {content.pronouns}
              </p>
              <p className="pb-8 pr-8">{content.introText}</p>
            </div>

            <div className="flex flex-1 xl:ml-64">
              <img
                src={urlFor(content.photo).url()}
                alt="Adam Souter, Gestalt Psychotherapist"
                className="relative mx-auto aspect-square h-80 w-80 rounded-lg object-cover shadow-lg md:h-96 md:w-96"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative min-h-screen">
        <img
          src={urlFor(content.splashImage).url()}
          className="absolute inset-0 h-full w-full object-cover brightness-75"
        />

        <div
          style={{ top: `${percent}%` }}
          className={`absolute mx-8 -translate-y-1/2 flex-col space-y-2 rounded-lg bg-black/40 p-6 text-white backdrop-blur-[1px] sm:mx-16 md:space-y-8 md:p-12 lg:mr-80`}
        >
          <p className="font-header text-2xl font-bold">
            {content.approachTitle}
          </p>
          <p className="pb-4">{content.approachText}</p>
          <RoundedButton
            text={content.learnMoreButtonText}
            className="bg-primary hover:bg-primary-dark"
            destination="/about"
          />
        </div>
      </div>

      {/* White */}
      <div className="min-h-screen bg-slate-200 px-8 py-40 sm:px-16 lg:px-32">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center space-y-8 md:flex-row">
            <div className="flex flex-1 flex-col space-y-8 md:mr-16">
              <h3 className="font-header text-2xl font-bold">
                {content.officeSection.title}
              </h3>
              <p>{content.officeSection.descriptionTop}</p>

              <ImageCarousel
                images={content.officeSection.images}
                className="sm:mx-16 md:hidden"
                showArrows={true}
                showDots={true}
                autoPlay={true}
                autoPlayInterval={4000}
                altTextPrefix="Psychotherapy office space in Ealing"
              />

              <p>{content.officeSection.descriptionBottom}</p>

              <RoundedButton
                text={content.contactButtonText}
                className="self-start bg-amber-500 hover:bg-amber-600"
                destination="/contact"
              />
            </div>

            <div className="hidden flex-1 overflow-clip rounded-lg md:block">
              <ImageCarousel
                images={content.officeSection.images}
                className="object-fill"
                showArrows={true}
                showDots={true}
                autoPlay={true}
                autoPlayInterval={4000}
                altTextPrefix="Psychotherapy office space in Ealing"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${testimonials.toggle ? "bg-white py-32" : "bg-slate-200 pb-32"} px-8 sm:px-16 lg:px-32`}
      >
        {/* Testimonials */}
        {testimonials.testimonials.length > 0 && testimonials.toggle && (
          <div>
            <h2 className="font-header text-2xl font-bold">Success Stories</h2>
            <div className="pb-16">
              <Testimonials
                testimonials={testimonials.testimonials.slice(0, 3)}
              />
            </div>
          </div>
        )}

        {/* Accreditations */}
        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-wrap items-center justify-center">
            {content.accreditationsSection.logos.map((logo, index) => (
              <img
                key={index}
                src={urlFor(logo).url()}
                alt={`Accreditation Logo ${index + 1}`}
                className="mx-4 inline h-28 object-contain opacity-70 grayscale"
              />
            ))}
          </div>
          <p className="text-sm opacity-70">
            {content.accreditationsSection.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
