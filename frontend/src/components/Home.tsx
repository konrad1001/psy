import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import type { GlobalConfig, HomePageData } from "../types";
import { urlFor } from "../utils/urlFor";
import RoundedButton from "./roundedButton";
import ImageCarousel from "./carousel";

interface HomeProps {
  config: GlobalConfig;
  content: HomePageData;
}

function Home({ content, config }: HomeProps) {
  const disableParallax = window.innerWidth < 768; // Disable parallax effect on mobile

  return (
    <section id="home" className="flex flex-col">
      {/* Green */}
      <div
        style={{ backgroundColor: config.primary.hex }}
        className={`flex min-h-screen flex-col items-center justify-center px-8 text-black sm:px-16 lg:px-32`}
      >
        <div className="pointer-events-none absolute inset-0 h-full opacity-50" />
        <Parallax speed={disableParallax ? 0 : -15}>
          <div className="my-32 flex-col">
            <div className="z-10 flex flex-col justify-between space-y-4 md:flex-row">
              <div className="flex-1 flex-col space-y-4 md:pr-16 lg:pr-16">
                <h1 className="font-family-inria-sans text-4xl font-bold md:text-6xl">
                  {content.therapistName}
                </h1>
                <h2 className="font-family-instrument-sans text-2xl font-semibold md:text-4xl">
                  {content.title}
                </h2>
                <p className="font-family-instrument-sans text-md pb-4 font-thin opacity-70 md:text-2xl">
                  {content.pronouns}
                </p>
                <p className="font-family-instrument-sans pb-8 pr-8 font-thin">
                  {content.introText}
                </p>
              </div>

              <div className="flex flex-1 items-center justify-center">
                <img
                  src={urlFor(content.photo).url()}
                  alt="Adam Souter, Gestalt Psychotherapist"
                  className="relative mx-auto aspect-square h-80 w-80 rounded-lg object-cover shadow-lg md:h-96 md:w-96"
                />
              </div>
            </div>
          </div>
        </Parallax>
      </div>
      <div>
        <ParallaxBanner
          layers={[{ image: urlFor(content.splashImage).url(), speed: 0 }]}
          className="min-h-screen"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Parallax speed={-0}>
              <div className="mx-8 flex-col space-y-2 rounded-lg bg-black/20 p-6 text-white backdrop-blur-[2px] backdrop-brightness-90 sm:mx-16 md:space-y-8 md:p-12 lg:mr-80">
                <p className="font-family-inria-sans text-2xl font-bold">
                  {content.approachTitle}
                </p>
                <p className="font-family-instrument-sans pb-4 font-thin">
                  {content.approachText}
                </p>
                <RoundedButton
                  text={content.learnMoreButtonText}
                  className="bg-primary hover:bg-primary-dark"
                  destination="/services"
                />
              </div>
            </Parallax>
          </div>
        </ParallaxBanner>
      </div>

      {/* White */}
      <div className="min-h-screen bg-slate-200 px-8 py-40 sm:px-16 lg:px-32">
        <Parallax speed={disableParallax ? 0 : -5}>
          <div className="flex flex-col items-center space-y-8 lg:flex-row">
            <div className="flex flex-1 flex-col space-y-8 md:mr-16">
              <p className="font-family-inria-sans text-2xl font-bold">
                {content.officeSection.title}
              </p>
              <p className="font-family-instrument-sans font-thin">
                {content.officeSection.descriptionTop}
              </p>

              <p className="font-family-instrument-sans font-thin">
                {content.officeSection.descriptionBottom}
              </p>

              <RoundedButton
                text={content.contactButtonText}
                className="bg-amber-500 hover:bg-amber-600"
                destination="/contact"
              />
            </div>

            <div className="mx-8 flex-1 overflow-clip rounded-lg md:mx-16 lg:mx-0">
              <ImageCarousel
                images={content.officeSection.images}
                className="object-fill"
                showArrows={true}
                showDots={true}
                autoPlay={true}
                autoPlayInterval={4000}
                altTextPrefix="My Office"
              />
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
}

export default Home;
