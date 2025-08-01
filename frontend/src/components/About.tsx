import { useState, useEffect } from "react";
import type { AboutPageData } from "../types";
import Label from "./label";
import { PortableText } from "@portabletext/react";

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

      <div className="mb-32 flex flex-row">
        <h1 className="font-family-label flex-2 pr-32 text-4xl font-bold">
          Im Adam Souter.
          <br />A Gestalt Psychotherapist.
        </h1>
        {/* <div className="flex-1" />
        <p className="font-family-body flex-3 font-thin">{content.longBio}</p> */}
      </div>

      {/* <p className="font-family-body pb-8 text-lg font-thin"> */}
      <div className="font-family-body pb-8 text-lg font-thin">
        <PortableText value={content.trainingAndExperience}></PortableText>
      </div>

      {/* <div className="mb-16 flex flex-row items-stretch space-x-8">
        {(content.cards ?? []).map((card, index) => (
          <div
            className={`${(content.cards?.length ?? 0) == 1 ? "pr-96" : "flex-1"}`}
            key={index}
          >
            <Card key={index} title={card.title} body={card.body} />
          </div>
        ))}
      </div> */}
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
