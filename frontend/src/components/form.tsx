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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    const netlifyFormData = new FormData();
    netlifyFormData.append("form-name", "contact");
    Object.entries(formData).forEach(([key, value]) => {
      console.log(key, value);
      netlifyFormData.append(key, value);
    });

    try {
      await fetch("/", {
        method: "POST",
        body: netlifyFormData,
      });

      setIsSubmitted(true);
      logEvent(analytics, "form_submit", { formData });
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <>
      {/* Actual form */}
      <form
        className="space-y-4"
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />

        {/* Honeypot field for spam protection */}
        <p style={{ display: "none" }}>
          <label>
            Don't fill this out if you're human:
            <input name="bot-field" />
          </label>
        </p>

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
              required
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
              required
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
              required
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
              required
            ></textarea>
          </label>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitted}
            className={`font-family-instrument-sans self-start rounded-full px-8 py-3 font-bold shadow-md transition-colors duration-300 ${
              isSubmitted
                ? "bg-primary/80 text-white"
                : "bg-slate-300 text-black hover:bg-slate-400"
            }`}
          >
            {isSubmitted ? "Message Sent ✓" : "Send Message"}
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
