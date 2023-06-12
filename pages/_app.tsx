import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components";
import { Provider } from "react-redux";
import store from "./store";
// import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        // <Layout>
        //   <Component {...pageProps} />
        // </Layout>
        // <AnimatePresence>
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
        // </AnimatePresence>
    );
}

export default MyApp;
