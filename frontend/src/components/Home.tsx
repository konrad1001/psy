import type { HomePageData } from "../types";
import { urlFor } from "../utils/urlFor";

interface HomeProps {
  content: HomePageData;
}

function Home({ content }: HomeProps) {
  return (
    <div className="flex flex-row px-64 py-8">
      <div className="mr-32 flex flex-col space-y-8">
        <h3 className="text-2xl">{content.title}</h3>
        <h1 className="pr-32 text-6xl">{content.therapistName}</h1>
        <h2 className="text-4xl">{content.pronouns}</h2>
        <p>{content.introText}</p>
      </div>

      <div className="ml-32 flex flex-col space-y-8">
        {content.photo && (
          <img
            src={urlFor(content.photo).url()}
            alt={"profile"}
            className="h-96 w-96 rounded-lg object-cover"
          />
        )}
      </div>
    </div>
  );
}

export default Home;
