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

export interface SanityImage {
  asset: {
    _ref: string;
    _type: "reference";
  };
}
