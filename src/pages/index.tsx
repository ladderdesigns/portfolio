import Head from "next/head";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Topic from "../components/Topic";

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
                <Topic
                  title="We build high quality education technology, so you don’t have
                  to."
                  description="Affordable, accessible website design by people who care."
                  textCentered={false}
                ></Topic>
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

      <div className="flex flex-col h-auto px-6 text-base text-orange-800 bg-champagne md:px-0">
        <section>
          <div className="flex flex-col w-full h-screen md:flex-row">
            <div className="hidden w-1/6 md:flex"></div>
            <div className="flex-col p-8 w-100 md:p-0 md:w-2/6 md:mt-6 lg:mt-12"></div>
            <div className="flex-col self-center p-8 w-100 md:p-0 md:w-2/6 md:mt-6 lg:mt-12">
              <Topic
                title="Technology the right way"
                description="We proudly build software with the highest standards of product
                  quality. Whether it’s on the computer or in the classroom,
                  you’ll have the tools to ensure every learner has the best
                  learning experience possible."
                textCentered={false}
              ></Topic>
            </div>
            <div className="hidden w-1/6 md:flex"></div>
          </div>
        </section>

        <div className="self-center justify-end my-8 md:my-16">
          <img src={"/squiggly.svg"} alt="squiggly.svg" className="w-96" />
        </div>

        <Heading
          title="Why us?"
          description="We’re young professionals that grew up with the Internet, so we know what makes a good website."
          textCentered={true}
        ></Heading>
        <section>
          <div className="flex flex-col w-full h-screen md:flex-row">
            <div className="hidden w-1/6 md:flex"></div>
            <div className="flex-col p-8 w-100 md:p-0 md:w-2/6 md:mt-6 lg:mt-12"></div>
            <div className="flex-col self-center p-8 w-100 md:p-0 md:w-2/6 md:mt-6 lg:mt-12"></div>
            <div className="hidden w-1/6 md:flex"></div>
          </div>
        </section>
        <div className="self-center justify-end my-8 md:my-16">
          <img src={"/squiggly.svg"} alt="squiggly.svg" className="w-96" />
        </div>
        <Heading
          title="What our clients say"
          description="We love hearing from our clients whether learners themselves or educators helping others learn."
          textCentered={true}
        ></Heading>
        <section>
          <div className="flex flex-col w-full h-screen md:flex-row">
            <div className="hidden w-1/6 md:flex"></div>
            <div className="flex-col p-8 w-100 md:p-0 md:w-2/6 md:mt-6 lg:mt-12"></div>
            <div className="flex-col self-center p-8 w-100 md:p-0 md:w-2/6 md:mt-6 lg:mt-12"></div>
            <div className="hidden w-1/6 md:flex"></div>
          </div>
        </section>
        <div className="self-center justify-end my-8 md:my-16">
          <img src={"/squiggly.svg"} alt="squiggly.svg" className="w-96" />
        </div>
        <section>
          <Heading
            title="Get in touch!"
            description="Contact us so we can learn more about your project and get you a quote."
            textCentered={true}
          ></Heading>
          <div className="flex flex-col w-full h-screen md:flex-row">
            <div className="hidden w-1/6 md:flex"></div>
            <div className="flex-col p-8 w-100 md:p-0 md:w-2/6 md:mt-6 lg:mt-12"></div>
            <div className="flex-col self-center p-8 w-100 md:p-0 md:w-2/6 md:mt-6 lg:mt-12"></div>
            <div className="hidden w-1/6 md:flex"></div>
          </div>
        </section>
      </div>
    </>
  );
}
