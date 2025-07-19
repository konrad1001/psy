import { useEffect, useState } from "react";
import { sanity } from "../client";
import type { HomePageData } from "./types";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/navigation/Navigation";

interface AppData {
  homePage: HomePageData | null;
}

function App() {
  const [data, setData] = useState<AppData>({
    homePage: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homePage = await sanity.fetch<HomePageData>(
          `*[_type == "homePage"][0]`,
        );
        // const aboutPage = await sanity.fetch<any>(`*[_type == "aboutPage"][0]`); // Replace with actual query
        // const contactPage = await sanity.fetch<any>(`*[_type == "contactPage"][0]`); // Replace with actual query
        setData({ homePage });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!data.homePage) return <div>Loading...</div>;

  return (
    <div>
      <Navigation content={null} />
      <Home content={data.homePage} />
      {/* <About content={data.aboutPage} />
      <Contact content={data.contactPage} /> */}
    </div>
  );
}

export default App;
