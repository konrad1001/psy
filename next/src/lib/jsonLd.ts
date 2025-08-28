export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Psychotherapy Ealing - Adam Souter",
  description:
    "UKCP accredited psychotherapist based in Ealing, West London providing professional psychotherapy services.",
  url: "https://www.psychotherapy-ealing.co.uk",
  email: "adam.souter@yahoo.co.uk",
  image: "https://www.psychotherapy-ealing.co.uk/circle_logo.png",
  logo: "https://www.psychotherapy-ealing.co.uk/circle_logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3 Montpelier Avenue",
    addressLocality: "Ealing",
    addressRegion: "West London",
    postalCode: "W5 2XP",
    addressCountry: "GB",
  },
  serviceArea: {
    "@type": "Place",
    name: "Ealing, West London, UK",
  },
  provider: {
    "@type": "Person",
    name: "Adam Souter",
    jobTitle: "Psychotherapist",
    description: "UKCP accredited psychotherapist",
    url: "https://www.psychotherapy-ealing.co.uk/about",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Ealing",
    },
    {
      "@type": "City",
      name: "London",
    },
  ],
  serviceType: [
    "Psychotherapy",
    "Individual Therapy",
    "Short Term Therapy",
    "Online Therapy",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Professional Certification",
    recognizedBy: {
      "@type": "Organization",
      name: "United Kingdom Council for Psychotherapy",
      alternateName: "UKCP",
    },
  },
} as const;
