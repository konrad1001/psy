import type { PortableTextBlock } from "@portabletext/react";

export interface GlobalConfig {
  primary: ColourData;
}

export interface HeaderData {
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
  approachTitle: string;
  approachText: string;
  learnMoreButtonText: string;
  splashImage: SanityImage;
  officeSection: HomeOfficeSection;
  contactButtonText: string;
  accreditationsSection: HomeAccreditationsSection;
}

export interface HomeOfficeSection {
  title: string;
  descriptionTop: string;
  descriptionBottom: string;
  images: SanityImage[];
}

export interface HomeAccreditationsSection {
  description: string;
  logos: SanityImage[];
}

export interface AboutPageData {
  _type: "aboutPage";
  _id: string;
  name: string;
  accreditation?: string;
  trainingAndExperience: PortableTextBlock[];
  supportAreas: AboutAreasOfSupport;
}

export interface ServicesPageData {
  _type: "services";
  _id: string;
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
  title: string;
  description: PortableTextBlock[];
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
  helpfulLinks: {
    toggle: boolean;
    text: PortableTextBlock[];
  };
}

export class ColourData {
  hex?: string = "#000000";
}

export interface TestimonialData {
  toggle: boolean;
  title: string;
  content: PortableTextBlock[];
  testimonials: TestimonialCard[];
}

export interface TestimonialCard {
  clientName: string;
  notes: PortableTextBlock[];
  date?: string;
}
