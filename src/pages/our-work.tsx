import React, { useState, useEffect } from "react";
import Head from "next/head";

import Button from "../components/Button";
import Topic from "../components/Topic";
import Project from "../components/Project";
import Background from "@/components/Background";

export default function OurWork() {
  return (
    <>
      <Head>
        <title>Ladder Designs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen bg-champagne">
        <div className="flex flex-row justify-center w-full h-screen text-base text-orange-800">
          <div className="hidden w-1/6 md:block"></div>
          <div className="flex-col px-8 mt-16 lg:px-0 lg:flex-row md:w-3/6 sm:mt-20 md:mt-28 lg:mt-36">
            <Topic
              title="We are a team of dedicated, artists, developers and dreamers - let us help make your website idea a reality."
              description="Affordable, accessible website design by people who care."
              textCentered={false}
            ></Topic>
            <div className="flex">
              <Button text="OUR WORK" isTitle={false} url="/contact" />
            </div>
          </div>
          <div className="hidden w-1/6 md:block"></div>
          <div className="hidden w-1/6 md:block"></div>
        </div>
      </div>

      <section className="w-full ">
        <Background image="science.png" width={400} height={300}>
          <div className="flex flex-col justify-around h-full py-8 space-y-8 overflow-x-hidden">
            {/* Figure out why these items are not centering on mobile */}
            <div className="flex flex-col self-center w-full px-4 space-y-8 lg:px-0 lg:space-y-0 lg:space-x-32 lg:w-max lg:flex-row">
              <Project src="/maribel.png" url="https://maribel.io" />
              <Project src="/maribel.png" url="https://maribel.io" />
              <Project src="/maribel.png" url="https://maribel.io" />
            </div>
            <div className="flex flex-col self-center w-full px-4 space-y-8 lg:px-0 lg:space-y-0 lg:space-x-32 lg:w-max lg:flex-row">
              <Project src="/maribel.png" url="https://maribel.io" />
              <Project src="/maribel.png" url="https://maribel.io" />
            </div>
          </div>
        </Background>
      </section>
    </>
  );
}
