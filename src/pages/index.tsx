import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Index() {
  return (
    <>
      <Head>
        <title>Ladder Designs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Lucas, the reason that the Navbar here is not at the top level is because we have to apply margins around according to the Figma. I thought it would be easier than doing some messy z index thing.*/}
      <div className="h-screen m-10 rounded-lg bg-landing">
        <Navbar></Navbar>
      </div>
    </>
  );
}
