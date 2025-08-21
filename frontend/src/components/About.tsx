import type { AboutPageData, GlobalConfig } from "../types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { RichText } from "./richText";
import RoundedButton from "./roundedButton";
import HeartIcon from "./icons/heart";

interface AboutProps {
  config: GlobalConfig;
  content: AboutPageData;
}

function About({ content, config }: AboutProps) {
  return (
    <section id="about" className={`flex flex-col`}>
      <div
        style={{ backgroundColor: config.primary.hex }}
        className="font-family-instrument-sans px-8 py-24 text-black sm:px-16 lg:px-32"
      >
        <div
          className="pointer-events-none absolute inset-0 h-full opacity-50"
          style={{
            backgroundImage: `url(data:image/png;base64,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)`,
          }}
        />
        <div className="font-family-inria-sans my-16 flex flex-col space-y-2 text-4xl font-bold">
          <h1 className="">{content.name}</h1>
          {content.accreditation && (
            <h1 className="">{content.accreditation}</h1>
          )}
        </div>

        <div className="font-family-instrument-sans mb-16 rounded-lg bg-slate-400/10 p-8 pb-8 font-thin text-black shadow-md outline-1 outline-black/10">
          <RichText content={content.trainingAndExperience} />
        </div>

        <div className="flex flex-1 flex-col space-y-8">
          <p className="font-family-inria-sans text-2xl font-bold">
            {content.supportAreas.title}
          </p>
          <p className="font-family-instrument-sans font-thin">
            {content.supportAreas.description}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4 py-8">
          {content.supportAreas.items.map((area, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl bg-slate-400/10 px-8 py-2 shadow-md outline-1 outline-black/10 transition-all duration-500 ease-in-out"
            >
              <AccordionTrigger className="font-family-inria-sans font-bold transition-all duration-500 ease-in-out hover:pl-2">
                {area.title}
              </AccordionTrigger>
              <AccordionContent className="font-family-instrument-sans font-thin transition-all duration-500 ease-in-out">
                {area.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mb-16" />

        <div className="flex flex-col items-center">
          <HeartIcon className="text-primary h-16 w-16 transition-all duration-500 ease-in-out hover:scale-110" />

          <div className="space-y-4 py-8 md:px-16">
            <p className="font-family-inria-sans text-center text-xl font-bold">
              {content.supportAreas.specificNeedTitle}
            </p>
            <p className="max-w-[600px] text-center font-thin">
              {content.supportAreas.specificNeedDescription}
            </p>
          </div>

          <div className="peer flex justify-center">
            <RoundedButton
              destination="/contact"
              className="bg-primary hover:bg-primary-dark text-white"
              text={content.supportAreas.contactButtonText}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
