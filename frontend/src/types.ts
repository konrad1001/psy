import type { PortableTextBlock } from "@portabletext/react";

// types.ts
export interface NavigationData {
  logoImage?: SanityImage;
  logoText: string;
}

export interface HomePageData {
  title: string;
  therapistName: string;
  pronouns: string;
  introText: string;
  photo: SanityImage;
  practiceTitle: string;
  practiceText: string;
  splashImage: SanityImage;
  roomImage: SanityImage;
}

export interface AboutPageData {
  _type: "aboutPage";
  _id: string;
  label: string;
  trainingAndExperience: ExperienceItem[];
  shortBio: string;
  longBio: string;
  cards?: AboutPageCard[];
}

export interface ServicesPageData {
  _type: "services";
  _id: string;
  label: string;
  heading: string;
  services: ServiceItem[];
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ContactPageData {
  _type: "contactPage";
  _id: string;
  label: string;
  title: string;
  description: string;
  contactFormTitle: string;
  details: ContactDetails;
  location: ContactLocation;
}

export interface ContactDetails {
  title: string;
  name: string;
  email: string;
}

export interface ContactLocation {
  title: string;
  addressFields: string[];
  mapEmbedUrl: string;
}

export interface ExperienceItem {
  text: PortableTextBlock[];
}

export interface AboutPageCard {
  title: string;
  body: string;
}

export interface SanityImage {
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface FooterData {
  footerText: string;
}
