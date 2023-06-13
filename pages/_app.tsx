import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import "../styles/style.module.css";
import { atom } from "recoil";
import { RecoilRoot } from "recoil";
import { Provider } from "react-redux";

export const userAccountState = atom<string | undefined>({
    key: "userAccountState",
    default: undefined,
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Component {...pageProps} />
        </RecoilRoot>
    );
}
export default MyApp;
