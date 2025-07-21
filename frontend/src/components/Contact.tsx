import { useState } from "react";
import Label from "./label";

interface ContactProps {
  content: any; // Replace `any` with the actual type for Contact data
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
      className="bg-celadon-light flex flex-col space-y-8 px-16 py-20 sm:px-16 md:px-32 lg:px-64"
      id="contact"
    >
      <div className="flex">
        <Label text={"Let's talk"} />
      </div>

      <h1 className="font-family-label text-4xl font-bold">Contact me</h1>

      <p className="font-family-body mb-16 font-thin">
        I offer a free 15-minute telephone consultation for anyone who is
        interested in becoming a client.
      </p>

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left: Contact Form */}
        <div className="rounded-lg bg-slate-200/50 p-8 shadow-md outline-1 outline-black/10">
          <h2 className="font-family-label mb-8 text-xl font-bold">
            Send Me a Message
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
                    : "hover:bg-celadon-dark/50 border-neutral-500 hover:px-8"
                }`}
              >
                {isSubmitted ? "Message Sent " : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        {/* Right: Contact Details */}
        <div className="space-y-8 rounded-lg bg-slate-200/50 p-8 shadow-md outline-1 outline-black/10">
          <div>
            <h2 className="font-family-label mb-4 text-xl font-bold">
              Contact Details
            </h2>
            <p className="text-s font-family-body text-neutral-600">
              Adam Souter
            </p>
            <p className="text-s font-family-body font-thin text-neutral-600">
              adam.souter@yahoo.co.uk
            </p>
          </div>
          <div>
            <h2 className="font-family-label mb-4 text-xl font-bold">
              My Location
            </h2>
            <p className="text-s font-family-body font-thin text-neutral-600">
              3 Montpelier Avenue
            </p>
            <p className="text-s font-family-body font-thin text-neutral-600">
              Ealing
            </p>
            <p className="text-s font-family-body font-thin text-neutral-600">
              London, W5 2XP
            </p>
          </div>
          <div>
            <h2 className="font-family-label mb-4 text-xl font-bold">
              Find Me
            </h2>
            <div className="rounded p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.612996896099!2d-0.3122067230674845!3d51.520315671816206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487612738584c6fb%3A0x939b8dfc8f47421d!2s3%20Montpelier%20Ave%2C%20London%20W5%202XP!5e0!3m2!1sen!2suk!4v1753038680398!5m2!1sen!2suk"
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
    </section>
  );
}

export default Contact;
