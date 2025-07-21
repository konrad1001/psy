// types.ts
export interface HomePageData {
  title: string;
  therapistName: string;
  pronouns: string;
  introText: string;
  aboutLink: string;
  photo?: SanityImage;
  practiceTitle: string;
  practiceText: string;
}

export interface AboutPageData {
  _type: "aboutPage";
  _id: string;
  label: string;
  shortBio: string;
  longBio: string;
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

export interface SanityImage {
  asset: {
    _ref: string;
    _type: "reference";
  };
}
