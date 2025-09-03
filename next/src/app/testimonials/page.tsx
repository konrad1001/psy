import { client } from "@/lib/client";
import { GlobalConfig, TestimonialData, TestimonialCard } from "@/types/types";
import { Metadata } from "next";
import { RichText } from "../components/richText";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Client testimonials and success stories",
  alternates: {
    canonical: "/testimonials",
  },
};

async function fetchContent(): Promise<{
  config: GlobalConfig;
  content: TestimonialData;
}> {
  const content = await client.fetch<TestimonialData>(
    "*[_type == 'testimonials'][0]",
  );
  const config = await client.fetch<GlobalConfig>("*[_type == 'global'][0]");

  return { config, content };
}

async function Testimonials() {
  const { config, content } = await fetchContent();

  return (
    <section className="6 flex flex-col" id="testimonials">
      <div
        style={{ backgroundColor: config.primary.hex }}
        className="flex flex-col px-8 py-24 sm:px-16 lg:px-32"
      >
        <h1 className="font-header mb-8 mt-16 flex flex-col space-y-2 text-4xl font-bold">
          {content.title}
        </h1>
        <RichText content={content.content} />
        <div className="columns-1 gap-6 py-16 sm:columns-2 lg:columns-3">
          {content.testimonials.map((testimonial, i) => (
            <Card key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ testimonial }: { testimonial: TestimonialCard }) {
  return (
    <div className="mb-6 break-inside-avoid rounded-lg bg-white p-8 shadow-md transition-all duration-300 ease-in-out hover:scale-105">
      <Quote
        size={32}
        fill="#3a6d46"
        color="#3a6d46"
        strokeWidth={0}
        className="hidden rotate-180 sm:block"
      />
      <h3 className="font-header pt-4 text-xl font-bold">
        {testimonial.clientName}
      </h3>
      <RichText content={testimonial.notes} />
      {testimonial.date && (
        <p className="mt-2 text-sm text-gray-500">{testimonial.date}</p>
      )}
    </div>
  );
}

export default Testimonials;
