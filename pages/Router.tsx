import React from "react";
import Layout from "./../components/Layout/Layout";
import { Banner, Landing } from "../components";

function Router() {
    return (
        <Layout>
            <Banner backgroundImage="/banner/upper-banner.png" />
            <Landing />
            <Banner backgroundImage="/banner/lower-banner.png" />
        </Layout>
    );
}

export default Router;
