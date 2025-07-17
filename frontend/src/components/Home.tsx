import type { HomePageData } from '../types';

interface HomeProps {
    content: HomePageData;
}

function Home({ content }: HomeProps) {
    return (
        <header>
            <h1>{content.title}</h1>
            <p>{content.introText}</p>
        </header>
    );
}

export default Home;