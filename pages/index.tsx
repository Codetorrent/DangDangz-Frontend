import React, { ComponentType } from "react";
import type { NextPage } from "next";
import { Banner, Landing } from "../components";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";

const MainPage = dynamic(() => import("../components/Main"), {
    ssr: false,
    loading: () => <p>loading ...</p>,
});
const Home: NextPage = () => {
    return (
        <div>
            <MainPage />
        </div>
        // <div>

        // <Main />
        // {/* <Banner backgroundImage="/banner/upper-banner.png" /> */}
        // {/* <Landing /> */}
        // {/* <Banner backgroundImage="/banner/lower-banner.png" /> */}
        // </div>
    );
};

export default Home;
