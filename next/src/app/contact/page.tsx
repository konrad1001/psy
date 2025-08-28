import { RichText } from "../components/richText";
import { client } from "@/lib/client";
import { GlobalConfig, ContactPageData } from "@/types/types";
import Form from "../components/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me to book a free consultation.",
};

async function fetchContent(): Promise<{
  config: GlobalConfig;
  content: ContactPageData;
}> {
  const content = await client.fetch<ContactPageData>(
    "*[_type == 'contactPage'][0]",
  );
  const config = await client.fetch<GlobalConfig>("*[_type == 'global'][0]");

  return { config, content };
}

async function Contact() {
  const { config, content } = await fetchContent();

  return (
    <section className="flex flex-col" id="contact">
      <div
        style={{ backgroundColor: config.primary.hex }}
        className="flex flex-col px-8 py-24 text-black transition-all duration-0 ease-in-out sm:px-16 lg:px-32"
      >
        <h1 className="font-header mb-8 mt-16 flex flex-col space-y-2 text-4xl font-bold">
          {content.title}
        </h1>

        <RichText content={content.description} className="mb-16" />

        {/* Main Content */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Fees + Contact Form */}
          <div className="rounded-lg bg-white p-4 shadow-md md:p-8">
            <h2 className="font-family-label font-header text-xl font-bold">
              {content.fees.title}
            </h2>
            {content.fees.description && <p>{content.fees.description}</p>}
            <div className="flex flex-col gap-4 py-8">
              {content.fees.items.map((fee, index) => (
                <div
                  key={index}
                  className="space-y-8 rounded-lg bg-slate-100 p-8 shadow-md outline-1 outline-black/10 transition-shadow duration-300 hover:shadow-lg"
                >
                  <h3 className="font-family-label font-header mb-2 text-lg font-bold">
                    {fee.title}
                  </h3>
                  <p className="opacity-70">{fee.body}</p>
                </div>
              ))}
            </div>
            <h2 className="font-family-label font-header mb-8 text-xl font-bold">
              {content.contactFormTitle}
            </h2>
            <Form />
          </div>

          {/* Right: Contact Details */}
          <div className="space-y-8 rounded-lg bg-white p-4 shadow-md md:p-8">
            <div>
              <h2 className="font-family-label font-header mb-4 text-xl font-bold">
                {content.details.title}
              </h2>
              <p className="text-s opacity-70">{content.details.name}</p>
              <p className="text-s opacity-70">{content.details.email}</p>
            </div>
            <div>
              <h2 className="font-family-label font-header mb-4 text-xl font-bold">
                {content.location.title}
              </h2>
              {content.location.addressFields.map((line, index) => (
                <p key={index} className="text-s opacity-70">
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
