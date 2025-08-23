import { logEvent } from "firebase/analytics";
import { useState } from "react";
import { analytics } from "../firebase";

function Form() {
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

    setIsSubmitted(true);
    logEvent(analytics, "form_submit", { formData });
  };

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit}
      name="contact"
      data-netlify="true"
    >
      <div>
        <label className="font-family-label mb-2 block">
          Your Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="font-family-label w-full rounded border border-gray-300 px-4 py-2"
          />
        </label>
      </div>
      <div>
        <label className="font-family-label mb-2 block">
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="font-family-label w-full rounded border border-gray-300 px-4 py-2"
          />
        </label>
      </div>
      <div>
        <label className="font-family-label mb-2 block">
          Subject
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What would you like to discuss?"
            className="font-family-label w-full rounded border border-gray-300 px-4 py-2"
          />
        </label>
      </div>
      <div>
        <label className="font-family-label mb-2 block">
          Your Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me a bit about what you're looking for..."
            className="font-family-label w-full rounded border border-gray-300 px-4 py-2"
            rows={4}
          ></textarea>
        </label>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className={`font-family-instrument-sans self-start rounded-full px-8 py-3 font-bold shadow-md transition-colors duration-300 ${
            isSubmitted
              ? "bg-primary/80 text-white"
              : "bg-slate-300 text-black hover:bg-slate-400"
          }`}
        >
          {isSubmitted ? "Message Sent " : "Send Message"}
        </button>
      </div>
    </form>
  );
}

export default Form;
