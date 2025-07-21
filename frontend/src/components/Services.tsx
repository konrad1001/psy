import type { ServicesPageData } from "../types";
import Label from "./label";

interface ServicesProps {
  content: ServicesPageData;
}

function Services({ content }: ServicesProps) {
  return (
    <section
      className="flex flex-col space-y-8 bg-slate-100 px-16 py-20 sm:px-16 md:px-32 lg:px-64"
      id="services"
    >
      <div className="flex">
        <Label text={content.label} />
      </div>

      <h1 className="font-family-label flex-2 pr-32 text-4xl font-bold">
        Services
      </h1>

      <p className="font-family-body mb-16 font-thin">
        Before becoming a psychotherapist, I spent over 25 years working in Film
        and Television.That experience taught me a lot about people—how we tell
        our stories, how we express emotion, and how meaning is often found in
        the spaces between words. Working creatively in fast-paced,
        collaborative environments helped me develop a deep respect for
        uncertainty, patience, and the process of transformation—skills I now
        bring to my therapeutic practice. My approach is grounded,
        compassionate, and open-minded. Whether you're seeking clarity, healing,
        or simply a space to explore, I offer a supportive environment where
        change can unfold.
      </p>

      <h1 className="font-family-label mb-8 text-xl font-bold">
        {content.heading}
      </h1>
      <div className="grid grid-cols-1 gap-8 space-x-2 space-y-2 md:grid-cols-2 lg:grid-cols-3">
        {content.services.map((service, index) => (
          <div
            key={index}
            className="space-y-2 rounded-lg bg-slate-50 p-6 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-slate-100 hover:shadow-lg"
          >
            <h1 className="text-4xl font-thin text-emerald-900">
              {index + 1}.
            </h1>
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="text-s font-family-body font-thin text-neutral-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <h1 className="font-family-label mb-8 text-xl font-bold">Pricing</h1>
      <p>£70 per session (50mins)</p>
    </section>
  );
}

export default Services;
