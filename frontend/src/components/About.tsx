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
        <div className="pointer-events-none absolute inset-0 h-full opacity-50" />
        <div className="font-family-inria-sans my-16 flex flex-col space-y-2 text-4xl font-bold">
          <h1 className="">{content.name}</h1>
          {content.accreditation && (
            <h2 className="">{content.accreditation}</h2>
          )}
        </div>

        <div className="font-family-instrument-sans mb-24 font-thin">
          <RichText content={content.trainingAndExperience} />
        </div>

        <div className="flex flex-1 flex-col space-y-8">
          <h3 className="font-family-inria-sans text-2xl font-bold">
            {content.supportAreas.title}
          </h3>
          <p className="font-family-instrument-sans font-thin">
            {content.supportAreas.description}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4 py-8">
          {content.supportAreas.items.map((area, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-lg bg-white px-8 py-2 shadow-md transition-all duration-500 ease-in-out"
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
