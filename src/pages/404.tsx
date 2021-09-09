import React, { useState, useEffect } from "react";
import Head from "next/head";
import projects from "../data/projects.json";
import { InferGetStaticPropsType } from "next";

import Project from "../components/Project";
import Background from "@/components/Background";
import Link from "next/link";

export default function OurWork() {
  return (
    <>
      <Head>
        <title>404 | Ladder Designs</title>
      </Head>

      <section className="w-full py-24 bg-champagne" id="landing">
        <div className="grid max-w-5xl grid-cols-2 px-4 mx-auto mt-4 sm:px-6 place-items-center">
          <div className="flex items-center justify-center text-orange-800 md:justify-end">
            <div className="w-full p-4 my-auto " id="landing-block">
              <h2 className="pb-2 text-5xl font-bold leading-tight sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
                Oops!
              </h2>
              <h3 className="pb-2 font-semibold leading-tight text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                We can't seem to find the page you're looking for.
              </h3>
              <h3 className="pb-2 text-sm italic font-normal leading-tight md:text-md lg:text-lg xl:text-xl">
                Error code: 404
              </h3>
            </div>
          </div>
          {/* <div>
            <img
              className="w-64 h-64 md:w-72 md:h-72 rounded-xl"
              src={"/ladder-logo.svg"}
              alt="Ladder logo"
            />
          </div> */}
        </div>
      </section>
    </>
  );
}
