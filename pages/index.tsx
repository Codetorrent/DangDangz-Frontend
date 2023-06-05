import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TopHeader from "../components/TopHeader/TopHeader";
import Banner from "../components/Banner/Banner";
import Landing from "../components/Landing/Landing";

const Home: NextPage = () => {
    return (
        <div>
            <TopHeader />
            <Banner />
            <Landing />
        </div>
    );
};

export default Home;
