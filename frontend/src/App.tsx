import { useEffect, useState } from "react";
import { sanity } from "../client";
import type { AboutPageData, HomePageData, ServicesPageData } from "./types";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

interface AppData {
  homePage: HomePageData | null;
  servicesPage: ServicesPageData | null;
  aboutPage: AboutPageData | null;
}

function App() {
  const [data, setData] = useState<AppData>({
    homePage: null,
    aboutPage: null,
    servicesPage: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homePage = await sanity.fetch<HomePageData>(
          `*[_type == "homePage"][0]`,
        );
        const servicesPage = await sanity.fetch<ServicesPageData>(
          `*[_type == "services"][0]`,
        );
        const aboutPage = await sanity.fetch<AboutPageData>(
          `*[_type == "aboutPage"][0]`,
        ); // Replace with actual query
        // const contactPage = await sanity.fetch<any>(`*[_type == "contactPage"][0]`); // Replace with actual query
        setData({ homePage, aboutPage, servicesPage });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!data.homePage || !data.aboutPage || !data.servicesPage)
    return <div>Loading...</div>;

  return (
    <div>
      <Navigation content={null} />
      <Home content={data.homePage} />
      <About content={data.aboutPage} />
      <Services content={data.servicesPage} />
      <Contact content={null} />
      <Footer />
    </div>
  );
}

export default App;
