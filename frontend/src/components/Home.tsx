import type { HomePageData } from "../types";
import { urlFor } from "../utils/urlFor";

interface HomeProps {
  content: HomePageData;
}

function Home({ content }: HomeProps) {
  return (
    <section id="home" className="bg-celadon-light flex flex-col">
      {/* Top */}
      <div className="flex flex-row items-center px-64 py-32">
        <div className="flex-4 flex flex-col space-y-8">
          <h3 className="font-family-label text-xl font-medium">
            {content.title.toUpperCase()}
          </h3>
          <h1 className="font-family-label pr-32 text-6xl font-bold">
            {content.therapistName}
          </h1>
          <h2 className="font-family-label text-4xl">{content.pronouns}</h2>
          <p className="font-family-body font-thin">{content.introText}</p>
        </div>

        <div className="flex-1"></div>

        <div className="flex-2 ml-0 flex flex-col">
          {content.photo && (
            <div>
              <img
                src={urlFor(content.photo).url()}
                alt={"profile"}
                className="h-96 w-96 rounded-lg object-cover"
              />
            </div>
          )}
        </div>
      </div>

      {/* My Practice */}
      {/* <div className="flex flex-col items-center space-y-8 bg-slate-200 px-96 py-20">
        <h3 className="text-2xl">{content.practiceTitle}</h3>
        <p className="text-center">{content.practiceText}</p>
      </div> */}
    </section>
  );
}

export default Home;
