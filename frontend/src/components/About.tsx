import type { AboutPageData } from "../types";
import Label from "./label";

interface AboutProps {
  content: AboutPageData;
}

function About({ content }: AboutProps) {
  return (
    <section className="flex h-screen flex-col px-64 py-24" id="about">
      <div className="flex">
        <Label text={content.label} />
      </div>

      <div className="mb-8" />

      <div className="mb-32 flex flex-row">
        <h1 className="font-family-label flex-2 pr-32 text-4xl font-bold">
          {content.shortBio}
        </h1>
        <div className="flex-1" />
        <p className="font-family-body flex-3 font-thin">{content.longBio}</p>
      </div>

      <div className="mb-16 flex flex-row space-x-8">
        <Card
          title="My Approach"
          body="Hi, I’m Adam. I offer a warm, caring, and open attitude to create a safe and confidential space for you to explore whatever might be troubling you.
I will help you to make sense of your unique experience of the world, whether it be struggles with anxiety, depression, relationships, trauma or other issues. As well as supporting you through difficulty or distress, we can also explore and build on the ways you find contentment, joy and happiness in your life."
        />
        <Card
          title="My Background"
          body="My psychotherapy training was in Gestalt therapy, a holistic practice, that sees the mind and body as parts of the same whole.
I focus on raising awareness, sitting together with what is, and working creatively to explore transformation and change.
If you are interested, please do get in touch by email and I’ll send you further details. I offer an initial, free 20-minute consultation so you can get a feel for whether we might work well together."
        />
      </div>
    </section>
  );
}

export default About;

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-celadon-light hover:scale-103 flex flex-col rounded-lg p-6 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg">
      <div className="mb-32"></div>
      <h2 className="font-family-label text-xl font-bold">{title}</h2>
      <p className="font-family-body mt-2 text-sm font-thin">{body}</p>
    </div>
  );
}
