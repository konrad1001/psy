import { useState } from "react";
import Label from "./label";
import type { ContactPageData } from "../types";

interface ContactProps {
  content: ContactPageData;
}

function Contact({ content }: ContactProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setIsSubmitted(false);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Form submitted:", formData);

    setIsSubmitted(true);
  };

  return (
    <section
      className="flex flex-col space-y-8 bg-slate-200 px-16 py-20 sm:px-16 md:px-32 lg:px-64"
      id="contact"
    >
      <div className="flex">
        <Label text={content.label} />
      </div>

      <h1 className="font-family-label text-4xl font-bold">{content.title}</h1>

      <p className="mb-16 font-thin">{content.description}</p>

      {/* Main Content */}
      <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left: Contact Form */}
        <div className="rounded-lg bg-slate-400/10 p-8 shadow-md outline-1 outline-black/10">
          <h2 className="font-family-label mb-8 text-xl font-bold">
            {content.contactFormTitle}
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="font-family-label mb-2 block text-sm">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="font-family-label w-full rounded border border-gray-300 px-4 py-2 text-sm"
              />
            </div>
            <div>
              <label className="font-family-label mb-2 block text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="font-family-label w-full rounded border border-gray-300 px-4 py-2 text-sm"
              />
            </div>
            <div>
              <label className="font-family-label mb-2 block text-sm">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                className="font-family-label w-full rounded border border-gray-300 px-4 py-2 text-sm"
              />
            </div>
            <div>
              <label className="font-family-label mb-2 block text-sm">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me a bit about what you're looking for..."
                className="font-family-label w-full rounded border border-gray-300 px-4 py-2 text-sm"
                rows={4}
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className={`font-family-label rounded-full border px-6 py-2 text-sm transition-all duration-500 ease-in-out ${
                  isSubmitted
                    ? "bg-celadon"
                    : "border-neutral-500 hover:bg-slate-400 hover:px-8"
                }`}
              >
                {isSubmitted ? "Message Sent " : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        {/* Right: Contact Details */}
        <div className="space-y-8 rounded-lg bg-slate-400/10 p-8 shadow-md outline-1 outline-black/10">
          <div>
            <h2 className="font-family-label mb-4 text-xl font-bold">
              {content.details.title}
            </h2>
            <p className="text-s font-thin text-neutral-600">
              {content.details.name}
            </p>
            <p className="text-s text-neutral-600">{content.details.email}</p>
          </div>
          <div>
            <h2 className="font-family-label mb-4 text-xl font-bold">
              {content.location.title}
            </h2>
            {content.location.addressFields.map((line, index) => (
              <p key={index} className="text-s font-thin text-neutral-600">
                {line}
              </p>
            ))}
          </div>
          <div>
            <h2 className="font-family-label mb-4 text-xl font-bold">
              {content.location.title}
            </h2>
            <div className="rounded p-4">
              <iframe
                src={content.location.mapEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Contracts Section */}
      <div>
        <h2 className="font-family-label mb-4 text-xl font-bold">
          {content.contracts.title}
        </h2>
        <p className="mb-8 font-thin">{content.contracts.description}</p>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {content.contracts.availableContracts.map((contract, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              <h3 className="font-family-label mb-2 text-lg font-bold">
                {contract.title}
              </h3>
              <p className="font-thin text-neutral-600">{contract.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fees Section */}
      <div className="mt-16">
        <h2 className="font-family-label mb-4 text-xl font-bold">
          {content.fees.title}
        </h2>
        {content.fees.description && (
          <p className="mb-8 font-thin">{content.fees.description}</p>
        )}
        <div className="flex flex-col gap-8">
          {content.fees.items.map((fee, index) => (
            <div
              key={index}
              className="space-y-8 rounded-lg bg-slate-400/10 p-8 shadow-md outline-1 outline-black/10 transition-shadow duration-300 hover:shadow-lg"
            >
              <h3 className="font-family-label mb-2 text-lg font-bold">
                {fee.title}
              </h3>
              <p className="font-thin text-neutral-600">{fee.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
