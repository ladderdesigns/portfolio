import React, { useState, useEffect } from "react";
import Head from "next/head";

import Button from "../components/Button";
import Topic from "../components/Topic";
import Project from "../components/Project";
import Background from "@/components/Background";
import Link from "next/link";

export default function OurWork() {
  return (
    <>
      <Head>
        <title>Ladder Designs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-full bg-champagne" id="landing">
        <div className="grid grid-cols-1 pt-8">
          <div className="flex items-center justify-center mb-64 text-orange-800 mt-28 md:justify-center">
            <div
              className="w-full px-10 py-4 my-auto md:px-0 sm:w-4/5 md:w-3/4 md:pr-8 "
              id="landing-block"
            >
              <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl">
                We are a team of dedicated, artists, developers and dreamers -
                let us help make your website idea a reality.
              </h2>
              <h3 className="text-xl leading-tight lg:text-2xl xl:text-3xl">
                {" "}
                Affordable, accessible website design by people who care.{" "}
              </h3>
              <Link href="#projects">
                <button className="px-4 py-2 mt-2 text-sm font-bold leading-5 text-center text-orange-800 uppercase transition duration-150 ease-in-out bg-white rounded-full shadow-lg focus:outline-none hover:opacity-75 focus:opacity-75">
                  {" "}
                  Our work{" "}
                </button>
              </Link>
            </div>
          </div>
          {/* <div className="flex flex-col-reverse md:mt-8">
            <img
              src={"/learner.svg"}
              alt="The website designer himself."
              className="w-3/5 mx-auto md:w-3/5 lg:w-3/5"
            />
          </div> */}
        </div>
      </section>

      {/* <section className="w-full pb-60 bg-champagne">
        <div className="flex flex-row justify-center w-full text-base text-orange-800">
          <div className="hidden w-1/6 md:block"></div>
          <div className="flex-col px-8 mt-56 lg:px-0 lg:flex-row md:w-3/6 sm:mt-40 md:mt-40 lg:mt-36">
            <Topic
              title=""
              description=""
              textCentered={false}
            ></Topic>
            <div className="flex">
              <Button text="OUR WORK" isTitle={false} url="/contact" />
            </div>
          </div>
          <div className="hidden w-1/6 md:block"></div>
          <div className="hidden w-1/6 md:block"></div>
        </div>
      </section> */}

      <section className="w-full " id="projects">
        <Background image="science.png" width={400} height={300}>
          <div className="flex flex-col justify-around h-full py-8 space-y-8 overflow-x-hidden">
            {/* TODO: Figure out why these items are not centering on mobile */}
            <div className="flex flex-col self-center w-auto px-4 space-y-8 md:px-0 md:space-y-0 md:space-x-32 md:w-max md:flex-row">
              <Project src="/maribel.png" url="https://maribel.io" />
              <Project src="/maribel.png" url="https://maribel.io" />
              <Project src="/maribel.png" url="https://maribel.io" />
            </div>
            <div className="flex flex-col self-center w-auto px-4 space-y-8 md:px-0 md:space-y-0 md:space-x-32 md:w-max md:ml-56 md:flex-row">
              <Project src="/maribel.png" url="https://maribel.io" />
              <Project src="/maribel.png" url="https://maribel.io" />
              <Project src="/maribel.png" url="https://maribel.io" />
            </div>
            <div className="flex flex-col self-center w-auto px-4 space-y-8 md:px-0 md:space-y-0 md:space-x-32 md:w-max md:flex-row">
              <Project src="/maribel.png" url="https://maribel.io" />
              <Project src="/maribel.png" url="https://maribel.io" />
              <Project src="/maribel.png" url="https://maribel.io" />
            </div>
          </div>
        </Background>
      </section>
    </>
  );
}
