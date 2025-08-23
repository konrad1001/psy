// import { logEvent } from "firebase/analytics";
// import { useState } from "react";
// import { analytics } from "../firebase";

function Form() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thank-you" // Optional: redirect to thank you page
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="contact" />

      {/* Honeypot field */}
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
          className="font-family-instrument-sans self-start rounded-full bg-slate-300 px-8 py-3 font-bold text-black shadow-md transition-colors duration-300 hover:bg-slate-400"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default Form;
