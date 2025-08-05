import { useState, useEffect } from "react";
import type { AboutPageData } from "../types";
import Label from "./label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import { RichText } from "./richText";
import { urlFor } from "../utils/urlFor";

interface AboutProps {
  content: AboutPageData;
}

function About({ content }: AboutProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 },
    );

    const target = document.getElementById("about");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <section
      id="about"
      className={`ease-in-ou flex flex-col bg-slate-100 px-64 py-24 transition-all duration-0 ${
        isVisible ? "opacity-100" : "opacity-100"
      }`}
    >
      <div className="flex">
        <Label text={content.label} />
      </div>

      <div className="mb-16" />

      <div className="mb-8 flex flex-col space-y-2">
        <h1 className="font-family-label text-4xl font-bold">{content.name}</h1>
        {content.accreditation && (
          <h1 className="font-family-label text-4xl font-bold">
            {content.accreditation}
          </h1>
        )}
      </div>

      <div className="mb-16 mr-16 rounded-lg bg-white p-8 pb-8 shadow-md">
        {content.trainingAndExperience.map((item, index) => (
          <div className="my-4" key={index}>
            <RichText content={item.text} />
          </div>
        ))}
      </div>

      <div className="flex flex-1 flex-col space-y-8">
        <p className="font-family-label text-2xl font-bold">
          {content.supportAreas.title}
        </p>
        <p className="font-thin">{content.supportAreas.description}</p>
      </div>

      <Accordion type="single" collapsible className="space-y-4 py-8">
        {content.supportAreas.items.map((area, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="rounded-xl bg-white px-8 py-2 shadow-md transition-all duration-500 ease-in-out"
          >
            <AccordionTrigger className="font-family-label font-bold transition-all duration-500 ease-in-out hover:pl-2">
              {area.title}
            </AccordionTrigger>
            <AccordionContent className="font-thin transition-all duration-500 ease-in-out">
              {area.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mb-16" />

      <div className="flex flex-col items-center">
        {content.supportAreas.specificNeedImage && (
          <img
            src={urlFor(content.supportAreas.specificNeedImage).url()}
            alt={content.supportAreas.specificNeedTitle}
            className="flex w-16 self-center opacity-50 transition-all duration-500 ease-in-out hover:scale-110"
          />
        )}

        <div className="space-y-4 px-16 py-8">
          <p className="font-family-label text-center text-xl font-bold">
            {content.supportAreas.specificNeedTitle}
          </p>
          <p className="text-center font-thin">
            {content.supportAreas.specificNeedDescription}
          </p>
        </div>

        <div className="peer flex justify-center">
          <a
            href="#contact"
            className="rounded-lg bg-slate-500 px-8 py-4 font-bold text-white shadow transition-colors duration-300 hover:bg-slate-600"
          >
            {content.supportAreas.contactButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
