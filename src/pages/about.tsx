import React, { useState, useEffect } from "react";
import Head from "next/head";

import Squiggly from "../components/Squiggly";

export default function About() {
  return (
    <>
      <Head>
        <title>Ladder Designs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen bg-champagne">
        <div className="flex flex-col w-full pt-8 ">
          <img
            alt="headshot"
            src="/jacob-headshot.jpg"
            className="self-center w-56 h-56 mb-4 border rounded-full md:w-80 md:h-80"
          />
          <p className="text-3xl italic font-semibold text-center text-orange-800">
            Jacob Patel
          </p>
          <p className="text-2xl font-semibold text-center text-orange-800">
            Founder
          </p>
          <p className="px-40 mt-4 text-xl text-center text-orange-800 ">
            Coding is my life, but learning is my love. That’s why I started
            Ladder Designs, a student-first design firm committed to creating
            the highest quality software and education resources for schools and
            educators. Whether it be online or in the classroom, I am commited
            to creating effective tools so learners can achieve their highest
            potentials.
          </p>
        </div>
      </div>
    </>
  );
}
