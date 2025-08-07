import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import type { HomePageData } from "../types";
import { urlFor } from "../utils/urlFor";

interface HomeProps {
  content: HomePageData;
}

function Home({ content }: HomeProps) {
  return (
    <section id="home" className="flex flex-col">
      <div className="">
        <div className="flex flex-col items-center bg-slate-200 px-16 py-24 sm:px-16 md:flex-row md:px-24 lg:px-52 xl:px-64">
          <div className="flex-4 mb-16 flex flex-col space-y-8 md:mb-0">
            <h3 className="font-family-label text-xl font-medium">
              {content.title.toUpperCase()}
            </h3>
            <h1 className="font-family-label text-6xl font-bold">
              {content.therapistName}
            </h1>
            <h2 className="font-family-label text-2xl">{content.pronouns}</h2>
            <p className="font-thin">{content.introText}</p>
          </div>

          <div className="flex flex-1"></div>

          {/* Image */}

          <img
            src={urlFor(content.photo).url()}
            alt="Adam Souter, Gestalt Psychotherapist"
            className="relative h-96 w-96 rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Practice Description */}
      <div>
        <ParallaxBanner
          layers={[{ image: urlFor(content.splashImage).url(), speed: -10 }]}
          className="aspect-[3/1]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 hidden px-16 text-white sm:px-16 md:block md:flex-row md:px-24 lg:px-52 xl:px-64">
            <p className="pb-8 text-center text-lg">{content.practiceText}</p>
          </div>
        </ParallaxBanner>
      </div>

      <div className="flex flex-col items-center space-y-8 px-16 py-16 sm:px-16 md:hidden md:px-32 lg:px-64">
        <p className="font-family-body pb-0 text-center font-thin">
          {content.practiceText}
        </p>
      </div>

      {/* Room Section */}
      <Parallax speed={0}>
        <div className="flex flex-row items-center space-x-32 space-y-8 px-16 py-32 sm:px-16 md:px-32 lg:px-64">
          <div className="flex flex-1 flex-col space-y-8">
            <p className="font-family-label text-2xl font-bold">
              {content.officeSection.title}
            </p>
            <p className="font-thin">{content.officeSection.descriptionTop}</p>

            <p className="font-thin">
              {content.officeSection.descriptionBottom}
            </p>
          </div>

          {/* Room Image */}

          <div className="flex h-80 flex-1 justify-center overflow-hidden rounded-2xl shadow-lg">
            <img
              src={urlFor(content.officeSection.images[0]).url()}
              alt="Adam Souter, Gestalt Psychotherapist"
              className="w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </Parallax>
    </section>
  );
}

export default Home;
