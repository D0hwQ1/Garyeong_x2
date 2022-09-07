import type { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import Header from "../components/header";

declare global {
    interface Window {
        keplr: any;
        getOfflineSigner: any;
    }
}

const GlobalStyles = createGlobalStyle`
    body {
        width: 100vw;
        height: 100vh;
        margin: 0;
    }
`;

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Head>
                <title>Garyeong_x2</title>
                <meta name="description" content="가령 사람들이 불안한 세상 속에 살고있다면, 우리는 가령가령한 세상을 좇아 나아가리" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <GlobalStyles />
            <Header />
            <Component {...pageProps} />;
        </div>
    );
}
