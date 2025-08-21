import type { GlobalConfig, ServicesPageData } from "../types";
import { urlFor } from "../utils/urlFor";
import { RichText } from "./richText";

interface ServicesProps {
  config: GlobalConfig;

  content: ServicesPageData;
}

function Services({ content, config }: ServicesProps) {
  return (
    <section className="flex flex-col" id="services">
      <div className="font-family-instrument-sans flex flex-col bg-slate-200 px-8 py-24 text-black sm:px-16 lg:px-32">
        <h1 className="font-family-inria-sans mt-16 flex flex-col space-y-2 text-4xl font-bold">
          {content.heading}
        </h1>

        <div className="font-family-instrument-sans mt-8 font-thin">
          <RichText content={content.body} />
        </div>

        <div className="grid justify-center gap-8 py-8 sm:grid-cols-2 md:grid-cols-4 lg:mx-32">
          {content.figures &&
            content.figures.map((figure, index) => (
              <div
                key={index}
                className="aspect-square max-w-[200px] shadow-md transition-all duration-300 hover:scale-110"
              >
                <img
                  key={index}
                  src={urlFor(figure).url()}
                  alt={`Service Figure ${index + 1}`}
                  className="aspect-square h-auto w-full rounded-lg bg-white object-contain"
                />
              </div>
            ))}
        </div>

        <div className="font-family-instrument-sans mb-16 font-thin">
          <RichText content={content.secondaryBody} />
        </div>

        {/* Contracts Section */}
        <div>
          <h2 className="font-family-label font-family-inria-sans mb-4 text-2xl font-bold">
            {content.contracts.title}
          </h2>
          <p className="mb-8 font-thin">{content.contracts.description}</p>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {content.contracts.availableContracts.map((contract, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <h3 className="font-family-inria-sans mb-2 text-lg font-bold">
                  {contract.title}
                </h3>
                <p className="font-thin text-neutral-600">{contract.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
