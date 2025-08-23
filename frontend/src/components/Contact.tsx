import type { ContactPageData, GlobalConfig } from "../types";
import Form from "./form";
import { RichText } from "./richText";

interface ContactProps {
  config: GlobalConfig;

  content: ContactPageData;
}

function Contact({ content, config }: ContactProps) {
  return (
    <section className="flex flex-col" id="contact">
      <div
        style={{ backgroundColor: config.primary.hex }}
        className="font-family-instrument-sans flex flex-col px-8 py-24 text-black transition-all duration-0 ease-in-out sm:px-16 lg:px-32"
      >
        <div className="pointer-events-none absolute inset-0 h-full opacity-50" />

        <h1 className="font-family-inria-sans mb-8 mt-16 flex flex-col space-y-2 text-4xl font-bold">
          {content.title}
        </h1>

        <RichText content={content.description} className="mb-16 font-thin" />

        {/* Main Content */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Fees + Contact Form */}
          <div className="rounded-lg bg-white p-4 shadow-md md:p-8">
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
                  className="space-y-8 rounded-lg bg-slate-100 p-8 shadow-md outline-1 outline-black/10 transition-shadow duration-300 hover:shadow-lg"
                >
                  <h3 className="font-family-label mb-2 text-lg font-bold">
                    {fee.title}
                  </h3>
                  <p className="font-thin opacity-70">{fee.body}</p>
                </div>
              ))}
            </div>
            <h2 className="font-family-label mb-8 text-xl font-bold">
              {content.contactFormTitle}
            </h2>
            <Form />
          </div>

          {/* Right: Contact Details */}
          <div className="space-y-8 rounded-lg bg-white p-4 shadow-md md:p-8">
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
              <div className="overflow-hidden rounded-lg">
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
