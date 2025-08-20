import type { PortableTextBlock } from "@portabletext/react";

// types.ts
export interface NavigationData {
  logoImage?: SanityImage;
  logoText: string;
  tabNames: string[];
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
  officeSection: HomeOfficeSection;
}

export interface HomeOfficeSection {
  title: string;
  descriptionTop: string;
  descriptionBottom: string;
  images: SanityImage[];
}

export interface AboutPageData {
  _type: "aboutPage";
  _id: string;
  label: string;
  name: string;
  accreditation?: string;
  trainingAndExperience: PortableTextBlock[];
  supportAreas: AboutAreasOfSupport;
}

export interface ServicesPageData {
  _type: "services";
  _id: string;
  label: string;
  heading: string;
  body: PortableTextBlock[];
  figures?: SanityImage[];
  secondaryBody: PortableTextBlock[];
  contracts: ContactAvailableContract;
}

export interface AboutAreasOfSupport {
  title: string;
  description: string;
  items: ServiceItem[];
  specificNeedImage?: SanityImage;
  specificNeedTitle: string;
  specificNeedDescription: string;
  contactButtonText: string;
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
  fees: ContactFees;
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

export interface ContactAvailableContract {
  title: string;
  description: string;
  availableContracts: Card[];
}

export interface ContactFees {
  title: string;
  description?: string;
  items: Card[];
}

export interface ExperienceItem {
  text: PortableTextBlock[];
}

export interface Card {
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
