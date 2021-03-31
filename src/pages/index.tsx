import Head from "next/head";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Heading from "../components/Heading";

export default function Index() {
  return (
    <>
      <Head>
        <title>Ladder Designs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Lucas, the reason that the Navbar here is not at the top level is because we have to apply margins around according to the Figma. I thought it would be easier than doing some messy z index thing.*/}
      <div className="h-screen m-10 rounded-lg bg-champagne">
        <Navbar></Navbar>
        <div>
          <div className="flex flex-col justify-center h-screen text-base text-orange-800">
            <div className="flex w-full">
              <div className="hidden w-1/6 md:flex"></div>
              <div className="flex-col p-8 w-100 md:p-0 md:w-2/6 md:mt-6 lg:mt-12">
                <Heading
                  title="We build high quality education technology, so you don’t have
                  to."
                  description="Affordable, accessible website design by people who care."
                ></Heading>
                <div className="flex">
                  <Button text="Contact us" isTitle={true} url="/contact" />
                </div>
                <div className="flex self-end justify-end">
                  <img
                    src={"/learner.svg"}
                    alt="learner.svg"
                    className="block w-64 md:hidden"
                  />
                </div>
              </div>
              <div className="justify-center hidden mt-10 md:flex md:flex-row md:w-3/6">
                <img
                  src={"/learner.svg"}
                  alt="learner.svg"
                  className="md:w-64 lg:w-96"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-auto text-base text-orange-800 bg-champagne">
        <div>
          <div className="flex w-full">
            <div className="hidden w-1/6 md:flex"></div>
            <div className="flex-col p-8 w-100 md:p-0 md:w-2/6 md:mt-6 lg:mt-12"></div>
            <div className="flex-col p-8 w-100 md:p-0 md:w-2/6 md:mt-6 lg:mt-12">
              <Heading
                title="Technology the right way"
                description="We proudly build software with the highest standards of product
                  quality. Whether it’s on the computer or in the classroom,
                  you’ll have the tools to ensure every learner has the best
                  learning experience possible."
              ></Heading>
            </div>
            <div className="hidden w-1/6 md:flex"></div>
          </div>
        </div>
        <div className="self-center justify-end">
          <img src={"/squiggly.svg"} alt="React Logo" className="w-96" />
        </div>
      </div>
    </>
  );
}
