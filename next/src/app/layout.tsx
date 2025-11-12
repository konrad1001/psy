import type { Metadata } from "next";
import "./globals.css";
import { client } from "@/lib/client";
import { FooterData, HeaderData } from "@/types/types";

import { Inria_Sans, Instrument_Sans } from "next/font/google";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { jsonLd } from "@/lib/jsonLd";

const title = Inria_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-header",
});

const body = Instrument_Sans({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "Psychotherapy Ealing",
    template: "%s | Psychotherapy Ealing",
  },
  description:
    "I'm Adam Souter, a UKCP accredited psychotherapist based in Ealing, West London.",
  alternates: {
    canonical: "https://psychotherapy-ealing.co.uk",
  },
  openGraph: {
    title: "Psychotherapy Ealing",
    description:
      "I'm Adam Souter, a UKCP accredited psychotherapist based in Ealing, West London.",
    url: "https://psychotherapy-ealing.co.uk",
    siteName: "Psychotherapy Ealing",
    images: [
      {
        url: "https://psychotherapy-ealing.co.uk/circle_logo.png",
        width: 640,
        height: 640,
        alt: "Psychotherapy Ealing",
      },
    ],
  },
};

async function fetchContent(): Promise<{
  header: HeaderData;
  footer: FooterData;
}> {
  const header = await client.fetch(`*[_type == "navigation"][0]`);
  const footer = await client.fetch(`*[_type == "footer"][0]`);
  return { header, footer };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { header, footer } = await fetchContent();

  return (
    <html
      lang="en"
      className={`${title.variable} ${body.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body>
        <>
          <Navigation content={header} />
          <main>{children}</main>
          <Footer content={footer} />
        </>
      </body>
    </html>
  );
}
