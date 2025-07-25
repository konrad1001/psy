import { useEffect, useState } from "react";
import { sanity } from "../client";
import type {
  AboutPageData,
  HomePageData,
  NavigationData,
  ServicesPageData,
  ContactPageData,
  FooterData,
} from "./types";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

interface AppData {
  navigation: NavigationData | null;
  homePage: HomePageData | null;
  servicesPage: ServicesPageData | null;
  aboutPage: AboutPageData | null;
  contactPage: ContactPageData | null;
  footer: FooterData | null;
}

function App() {
  const [data, setData] = useState<AppData>({
    navigation: null,
    homePage: null,
    aboutPage: null,
    servicesPage: null,
    contactPage: null,
    footer: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const navigation = await sanity.fetch<NavigationData>(
          `*[_type == "navigation"][0]`,
        );

        const homePage = await sanity.fetch<HomePageData>(
          `*[_type == "homePage"][0]`,
        );
        const servicesPage = await sanity.fetch<ServicesPageData>(
          `*[_type == "services"][0]`,
        );
        const aboutPage = await sanity.fetch<AboutPageData>(
          `*[_type == "aboutPage"][0]`,
        );
        const contactPage = await sanity.fetch<ContactPageData>(
          `*[_type == "contactPage"][0]`,
        );
        const footer = await sanity.fetch<FooterData>(
          `*[_type == "footer"][0]`,
        );
        setData({
          navigation,
          homePage,
          aboutPage,
          servicesPage,
          contactPage,
          footer,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (
    !data.navigation ||
    !data.homePage ||
    !data.aboutPage ||
    !data.servicesPage ||
    !data.contactPage ||
    !data.footer
  )
    return <div>Loading...</div>;

  return (
    <div>
      <Navigation content={data.navigation} />
      <Home content={data.homePage} />
      <About content={data.aboutPage} />
      <Services content={data.servicesPage} />
      <Contact content={data.contactPage} />
      <Footer content={data.footer} />
    </div>
  );
}

export default App;
