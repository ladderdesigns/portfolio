import React, { useState, useEffect } from "react";
import Head from "next/head";

import Button from "../components/Button";
import Topic from "../components/Topic";

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
          <div className="flex-col px-8 mt-36 lg:px-0 lg:flex-row md:w-3/6 sm:mt-36 md:mt-40 lg:mt-44">
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
    </>
  );
}
