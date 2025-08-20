import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import type { HomePageData } from "../types";
import { urlFor } from "../utils/urlFor";
import RoundedButton from "./roundedButton";

interface HomeProps {
  content: HomePageData;
}

function Home({ content }: HomeProps) {
  return (
    <section id="home" className="flex flex-col">
      {/* Green */}

      <div className="bg-primary flex h-screen flex-col items-center justify-center px-32 text-white">
        <div
          className="pointer-events-none absolute inset-0 h-full opacity-50"
          style={{
            backgroundImage: `url(data:image/png;base64,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)`,
          }}
        />
        <Parallax speed={-15}>
          <div className="flex-col">
            <div className="z-10 flex flex-row justify-between space-y-4">
              <div className="flex-1 flex-col space-y-4">
                <h1 className="font-family-inria-sans text-6xl font-bold">
                  {content.therapistName}
                </h1>
                <h2 className="font-family-instrument-sans text-4xl font-semibold">
                  {content.title}
                </h2>
                <p className="font-family-instrument-sans pb-4 text-2xl font-thin opacity-70">
                  {content.pronouns}
                </p>
                <p className="font-family-instrument-sans pr-64 text-sm font-thin">
                  {content.introText}
                </p>
              </div>

              {/* <div className="flex rounded-2xl bg-gray-900/20 pb-8 pl-8 pr-4 pt-4 shadow-lg"> */}
              <img
                src={urlFor(content.photo).url()}
                alt="Adam Souter, Gestalt Psychotherapist"
                className="relative h-80 w-80 rounded-2xl object-cover shadow-lg"
              />
              {/* </div> */}
            </div>
          </div>
        </Parallax>
      </div>
      <div>
        <ParallaxBanner
          layers={[{ image: urlFor(content.splashImage).url(), speed: -10 }]}
          className="h-screen"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="mx-32 flex-col space-y-8 rounded-2xl bg-black/40 p-16 text-white">
              <p className="font-family-inria-sans text-2xl font-bold">
                My Approach
              </p>
              <p className="font-family-instrument-sans pb-12 pr-64 text-sm font-thin">
                {content.practiceText}
              </p>
              <RoundedButton
                text="Learn More"
                bgColor="amber-600"
                destination="/services"
              />
            </div>
          </div>
        </ParallaxBanner>
      </div>

      {/* White */}
      <div>
        <Parallax speed={0}>
          <div className="flex min-h-screen flex-col items-center space-x-32 space-y-8 bg-slate-100 px-32 lg:flex-row">
            <div className="flex flex-1 flex-col space-y-8">
              <p className="font-family-inria-sans text-2xl font-bold">
                {content.officeSection.title}
              </p>
              <p className="font-family-instrument-sans text-sm font-thin">
                {content.officeSection.descriptionTop}
              </p>

              <p className="font-family-instrument-sans text-sm font-thin">
                {content.officeSection.descriptionBottom}
              </p>

              <RoundedButton
                text="Contact Me"
                bgColor="amber-600"
                destination="/contact"
              />
            </div>

            <div className="mx-8 flex aspect-[4/3] h-80 flex-1 justify-center overflow-hidden rounded-2xl shadow-lg md:mx-16 lg:mx-0">
              <img
                src={urlFor(content.officeSection.images[0]).url()}
                alt="My Office"
                className="w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
}

export default Home;
