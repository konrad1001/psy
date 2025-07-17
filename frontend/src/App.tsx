import { useEffect, useState } from 'react';
import { sanity } from '../client';
import type { HomePageData } from './types';
import imageUrlBuilder from '@sanity/image-url';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const builder = imageUrlBuilder(sanity);
function urlFor(source: any) {
  return builder.image(source);
}

interface AppData {
  homePage: HomePageData | null;
  aboutPage: any | null;
  contactPage: any | null;
}

function App() {
  const [data, setData] = useState<AppData>({
    homePage: null,
    aboutPage: null,
    contactPage: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homePage = await sanity.fetch<HomePageData>(`*[_type == "homePage"][0]`);
        const aboutPage = await sanity.fetch<any>(`*[_type == "aboutPage"][0]`); // Replace with actual query
        const contactPage = await sanity.fetch<any>(`*[_type == "contactPage"][0]`); // Replace with actual query
        setData({ homePage, aboutPage, contactPage });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!data.homePage || !data.aboutPage || !data.contactPage) return <div>Loading...</div>;

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <Home content={data.homePage} />
      <About content={data.aboutPage} />
      <Contact content={data.contactPage} />
    </div>
  );
}

export default App;