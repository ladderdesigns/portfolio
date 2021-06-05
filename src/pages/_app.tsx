import { AppProps } from "next/app";
import { useRouter } from "next/router";
import "@/styles/global.css";

import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname === "/") {
    return <Component {...pageProps} />;
  } else {
    return (
      <Layout>
        {" "}
        <Component {...pageProps} />
      </Layout>
    );
  }
}
