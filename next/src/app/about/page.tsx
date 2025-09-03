import { GlobalConfig, AboutPageData } from "@/types/types";

import { HeartIcon } from "lucide-react";
import { RichText } from "../components/richText";
import RoundedButton from "../components/roundedButton";
import { client } from "@/lib/client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/accordion";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my psychotherapy services in Ealing.",
  alternates: {
    canonical: "/about",
  },
};

async function fetchContent(): Promise<{
  config: GlobalConfig;
  content: AboutPageData;
}> {
  const content = await client.fetch<AboutPageData>(
    "*[_type == 'aboutPage'][0]",
  );
  const config = await client.fetch<GlobalConfig>("*[_type == 'global'][0]");

  return { config, content };
}

async function About() {
  const { config, content } = await fetchContent();

  return (
    <section id="about" className={`flex flex-col`}>
      <div
        style={{ backgroundColor: config.primary.hex }}
        className="px-8 py-24 text-black sm:px-16 lg:px-32"
      >
        <div className="pointer-events-none absolute inset-0 h-full opacity-50" />
        <div className="my-16 flex flex-col space-y-2 text-4xl font-bold">
          <h1 className="font-header">{content.name}</h1>
          {content.accreditation && (
            <h2 className="font-header">{content.accreditation}</h2>
          )}
        </div>

        <div className="mb-24">
          <RichText content={content.trainingAndExperience} />
        </div>

        <div className="flex flex-1 flex-col space-y-8">
          <h3 className="font-header text-2xl font-bold">
            {content.supportAreas.title}
          </h3>
          <p>{content.supportAreas.description}</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4 py-8">
          {content.supportAreas.items.map((area, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-lg bg-white px-8 py-2 shadow-md transition-all duration-500 ease-in-out"
            >
              <AccordionTrigger className="font-bold transition-all duration-500 ease-in-out hover:pl-2">
                {area.title}
              </AccordionTrigger>
              <AccordionContent className="transition-all duration-500 ease-in-out">
                {area.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mb-16" />

        <div className="flex flex-col items-center">
          <HeartIcon className="text-primary h-16 w-16 transition-all duration-500 ease-in-out hover:scale-110" />

          <div className="space-y-4 py-8 md:px-16">
            <p className="font-header text-center text-xl font-bold">
              {content.supportAreas.specificNeedTitle}
            </p>
            <p className="max-w-[600px] text-center">
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
