import { useState, useEffect, type ReactNode } from "react";
import type { AboutPageData } from "../types";
import Label from "./label";
import {
  PortableText,
  type PortableTextBlockComponent,
  type PortableTextComponent,
  type PortableTextComponentProps,
  type PortableTextMarkComponentProps,
  type PortableTextProps,
  type PortableTextReactComponents,
} from "@portabletext/react";

import type {
  PortableTextBlock,
  PortableTextSpan,
  PortableTextLink,
} from "@portabletext/types";

interface AboutProps {
  content: AboutPageData;
}

function About({ content }: AboutProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // setIsVisible(entry.isIntersecting);
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

  console.log(content.trainingAndExperience);

  const components: Partial<PortableTextReactComponents> = {
    marks: {
      link: ({ value, children }: PortableTextMarkComponentProps) => {
        const target = value?.href?.startsWith("http") ? "_blank" : undefined;
        return (
          <a
            className="text-blue-900 hover:underline"
            href={value?.href || "#"}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
          >
            {children}
          </a>
        );
      },
      strong: ({ children }) => (
        <strong className="font-semibold text-slate-600">{children}</strong>
      ),
    },
    block: {
      // Ex. 1: customizing common block types
      // h6: (type) => <h6 className="text-6xl text-red-500">{type.children}</h6>,
      p: (type) => <p className="text-s text-red-700">{type.children}</p>,
      b: (type) => <b className="text-slate-500">{type.children}</b>,
    },
    list: {
      bullet: ({ children }) => (
        <ul className="mt-xl list-inside list-disc space-y-1 marker:text-slate-500">
          {children}
        </ul>
      ),
    },
  };

  return (
    <section
      id="about"
      className={`ease-in-ou flex h-screen flex-col bg-slate-200 px-64 py-24 transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex">
        <Label text={content.label} />
      </div>

      <div className="mb-16" />

      <div className="mb-16 flex flex-row">
        <h1 className="font-family-label flex-2 pr-32 text-4xl font-bold">
          Im Adam Souter.
          <br />A Gestalt Psychotherapist.
        </h1>
      </div>

      {/* <p className="font-family-body pb-8 text-lg font-thin"> */}
      <div className="mr-16 rounded-lg bg-white p-8 pb-8 shadow-md">
        {content.trainingAndExperience.map((item, index) => (
          <div className="my-4" key={index}>
            <PortableText
              value={item.text}
              components={components}
            ></PortableText>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-celadon-light flex h-full flex-col rounded-lg p-6 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      <h2 className="font-family-label text-xl font-bold">{title}</h2>
      <p className="font-family-body mt-2 text-sm font-thin">{body}</p>
    </div>
  );
}
