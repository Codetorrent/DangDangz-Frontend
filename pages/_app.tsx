import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import "../styles/style.module.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Component {...pageProps} />
        </div>
    );
}
export default MyApp;
