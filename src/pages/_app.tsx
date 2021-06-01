import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";

import "@/styles/global.css";

import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname === "/") {
    return <Component {...pageProps} />;
  } else {
    return (
      <>
        <Head>
          <title>Ladder Designs</title>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicons/favicon-16x16.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="favicons/apple-touch-icon.png"
          />
          <link rel="manifest" href="favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Layout>
          {" "}
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}
