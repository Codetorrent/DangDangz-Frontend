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
            <Banner />
            <Landing />
            <Footer />
        </div>
    );
};

export default Home;
