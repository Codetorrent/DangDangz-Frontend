import type { NextPage } from "next";
import { 
        TopHeader,
        Banner,
        Landing,
        Footer,
     } from "../components";

const Home: NextPage = () => {
    return (
        <div>
            <TopHeader />
            <Banner backgroundImage="/banner/upper-banner.png"  />
            <Landing />
            <Banner backgroundImage="/banner/lower-banner.png"  />
            <Footer />
        </div>
    );
};

export default Home;
