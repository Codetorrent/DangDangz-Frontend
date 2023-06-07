import type { NextPage } from "next";
import { 
        Banner,
        Landing,
     } from "../components";

const Home: NextPage = () => {
    return (
        <div>
            <Banner backgroundImage="/banner/upper-banner.png"  />
            <Landing />
            <Banner backgroundImage="/banner/lower-banner.png"  />
        </div>
    );
};

export default Home;
