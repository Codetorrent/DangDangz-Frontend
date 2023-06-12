import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { styled } from "styled-components";
import Wallet from "../components/Main/Wallet";
import DogRotate from "../components/Main/DogRotate";
import { Layout } from "../components";
import "../styles/style.module.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Component {...pageProps} />
        </div>
        // <Layout>

        // {/* </Layout> */}
        // <Provider store={store}>
        //     <Component {...pageProps} />
        // </Provider>
    );
}
export default MyApp;
