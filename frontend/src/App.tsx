import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import { ParallaxProvider } from "react-scroll-parallax";
import ErrorScreen from "./components/error";

interface AppData {
  navigation: NavigationData | null;
  homePage: HomePageData | null;
  servicesPage: ServicesPageData | null;
  aboutPage: AboutPageData | null;
  contactPage: ContactPageData | null;
  footer: FooterData | null;
}

function App() {
  const [error, setError] = useState(false);

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
        setError(true);
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
    return <div></div>;

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Router>
      <ParallaxProvider>
        <div className="relative min-h-screen">
          <Navigation content={data.navigation} />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home content={data.homePage} />} />
              <Route
                path="/about"
                element={<About content={data.aboutPage} />}
              />
              <Route
                path="/services"
                element={<Services content={data.servicesPage} />}
              />
              <Route
                path="/contact"
                element={<Contact content={data.contactPage} />}
              />
            </Routes>
          </main>
          <Footer content={data.footer} />
        </div>
      </ParallaxProvider>
    </Router>
  );
}

export default App;
