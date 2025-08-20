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
    <section className="flex flex-col" id="contact">
      <div className="bg-primary font-family-instrument-sans flex flex-col px-16 py-24 text-white transition-all duration-0 ease-in-out lg:px-32">
        <div
          className="pointer-events-none absolute inset-0 h-full opacity-50"
          style={{
            backgroundImage: `url(data:image/png;base64,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)`,
          }}
        />

        <h1 className="font-family-inria-sans mb-8 mt-16 flex flex-col space-y-2 text-4xl font-bold">
          {content.title}
        </h1>

        <p className="mb-16 text-sm font-thin">{content.description}</p>

        {/* Main Content */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Fees + Contact Form */}
          <div className="rounded-lg bg-slate-400/10 p-8 shadow-md outline-1 outline-black/10">
            <h2 className="font-family-label text-xl font-bold">
              {content.fees.title}
            </h2>
            {content.fees.description && (
              <p className="font-thin">{content.fees.description}</p>
            )}
            <div className="flex flex-col gap-4 py-8">
              {content.fees.items.map((fee, index) => (
                <div
                  key={index}
                  className="space-y-8 rounded-lg bg-slate-400/10 p-8 shadow-md outline-1 outline-black/10 transition-shadow duration-300 hover:shadow-lg"
                >
                  <h3 className="font-family-label mb-2 text-lg font-bold">
                    {fee.title}
                  </h3>
                  <p className="text-sm font-thin opacity-70">{fee.body}</p>
                </div>
              ))}
            </div>
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
              <p className="text-s font-thin opacity-70">
                {content.details.name}
              </p>
              <p className="text-s opacity-70">{content.details.email}</p>
            </div>
            <div>
              <h2 className="font-family-label mb-4 text-xl font-bold">
                {content.location.title}
              </h2>
              {content.location.addressFields.map((line, index) => (
                <p key={index} className="text-s font-thin opacity-70">
                  {line}
                </p>
              ))}
            </div>
            <div>
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
      </div>
    </section>
  );
}

export default Contact;
