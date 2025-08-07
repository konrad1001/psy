import type { ServicesPageData } from "../types";
import { urlFor } from "../utils/urlFor";
import Label from "./label";
import { RichText } from "./richText";

interface ServicesProps {
  content: ServicesPageData;
}

function Services({ content }: ServicesProps) {
  return (
    <section
      className="flex flex-col space-y-8 px-16 py-20 sm:px-16 md:px-32 lg:px-64"
      id="services"
    >
      <div className="flex">
        <Label text={content.label} />
      </div>

      <h1 className="font-family-label flex-2 pr-32 text-4xl font-bold">
        {content.heading}
      </h1>

      <RichText content={content.body} />

      <div className="mx-8 grid justify-center gap-8 py-8 sm:grid-cols-2 md:grid-cols-4">
        {content.figures &&
          content.figures.map((figure, index) => (
            <div
              key={index}
              className="transition-all duration-300 hover:scale-110"
            >
              <img
                key={index}
                src={urlFor(figure).url()}
                alt={`Service Figure ${index + 1}`}
                className="h-auto w-full rounded-lg object-fill"
              />
            </div>
          ))}
      </div>

      <RichText content={content.secondaryBody} />

      <h1 className="font-family-label mb-8 text-xl font-bold"></h1>
    </section>
  );
}

export default Services;
