import React, { useState, useEffect } from "react";
import projects from "../data/projects.json";
import { GetStaticProps } from "next";
import Head from "next/head";

import Project from "../components/Project";
import Background from "@/components/Background";

interface ProjectObject {
  [key: string]: string;
}

// export async function getStaticProps() {
//   return {
//     props: {
//       projectsList: projects.sites,
//     },
//   };
// }

export default function OurWork() {
  return (
    <>
      <Head>
        <title>Ladder Designs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-full py-24 bg-champagne" id="landing">
        <div className="flex flex-row">
          <div className="hidden md:block md:w-1/6"></div>
          <div className="w-full md:w-4/6">
            <div className="grid grid-cols-1 m-4 mt-4">
              <div className="flex items-center justify-center text-orange-800 md:justify-end">
                <div className="w-full p-4 my-auto " id="landing-block">
                  <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl">
                    We are a team of dedicated, artists, developers, and
                    dreamers - let us help make your website idea a reality.
                  </h2>
                  <h3 className="text-xl leading-tight lg:text-2xl xl:text-3xl">
                    {" "}
                    Affordable, accessible website design by people who care.{" "}
                  </h3>
                  <button className="px-4 py-2 mt-2 text-sm font-bold leading-5 text-center text-orange-800 uppercase transition duration-150 ease-in-out bg-white rounded-full shadow-lg focus:outline-none hover:opacity-75 focus:opacity-75">
                    {" "}
                    Contact Us{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:w-1/6"></div>
        </div>
      </section>

      <section className="w-full" id="projects">
        <Background image="science.png" width={400} height={300}>
          <div className="flex flex-row">
            <div className="hidden md:block md:w-1/6"></div>
            <div className="w-full md:w-4/6">
              <div className="grid grid-flow-row grid-cols-1 gap-8 p-4 lg:grid-cols-2 2xl:grid-cols-3">
                <Project src="/maribel.png" url="https://maribel.io" />
                <Project src="/maribel.png" url="https://maribel.io" />
                <Project src="/maribel.png" url="https://maribel.io" />
                <Project src="/maribel.png" url="https://maribel.io" />
                <Project src="/maribel.png" url="https://maribel.io" />
                <Project src="/maribel.png" url="https://maribel.io" />
              </div>
            </div>
            <div className="hidden md:block md:w-1/6"></div>
          </div>
        </Background>
      </section>
    </>
  );
}
