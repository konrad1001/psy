"use client";

import { TestimonialCard, TestimonialData } from "@/types/types";
import { RichText } from "./richText";
import { Quote } from "lucide-react";
import RoundedButton from "./roundedButton";
import { useCallback, useEffect, useState } from "react";

function Testimonials({ testimonials }: { testimonials: TestimonialCard[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    console.log("Next card:", activeIndex, testimonials.length);
  }, [testimonials.length]);

  const prevCard = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }, [testimonials.length]);

  const goToCard = (index: number) => {
    setActiveIndex(index % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 2000);

    return () => clearInterval(interval);
  }, [nextCard]);

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-10 py-16 text-center">
      <div className="flex flex-row space-x-8">
        <Quote
          size={64}
          fill="#3a6d46"
          color="#3a6d46"
          strokeWidth={0}
          className="hidden rotate-180 sm:block"
        />

        <div className="relative flex w-full space-y-8 overflow-hidden md:w-[30rem] lg:w-[50rem]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 transition-opacity duration-500 ease-in-out"
                style={{ opacity: activeIndex === index ? 1 : 0.1 }}
              >
                <RichText
                  content={testimonial.notes}
                  className="text-md sm:text-xl"
                />
                <h3 className="opacity-50">{testimonial.clientName}</h3>
              </div>
            ))}
          </div>
        </div>
        <Quote
          size={64}
          fill="#3a6d46"
          color="#3a6d46"
          strokeWidth={0}
          className="hidden sm:block"
        />
      </div>

      <div className="flex space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToCard(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              activeIndex === index ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <RoundedButton
        text="Read More"
        className="bg-primary hover:bg-primary-dark text-center text-white"
        destination="/testimonials"
      />
    </div>
  );
}

export default Testimonials;
