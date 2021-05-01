import React, { useState, useEffect } from "react";
import Head from "next/head";
import Person from "../components/Person";

import Background from "@/components/Background";

export default function About() {
  return (
    <>
      <Head>
        <title>Ladder Designs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pb-8 bg-champagne">
        <div className="flex flex-col w-full pt-8 ">
          <img
            alt="headshot"
            src="/jacob-headshot.jpg"
            className="self-center w-56 h-56 mb-4 border rounded-full md:w-80 md:h-80"
          />
          <p className="text-3xl font-semibold text-center text-orange-800">
            Jacob Patel
          </p>
          <p className="text-2xl italic text-center text-orange-800">Founder</p>
          <p className="self-center px-4 mt-4 text-xl text-center text-orange-800 sm:w-4/5 md:w-3/5">
            Coding is my life, but learning is my love. That’s why I started
            Ladder Designs, a student-first design firm committed to creating
            the highest quality software and educational resources for schools
            and teachers. Whether it be online or in the classroom, I am
            commited to creating effective tools so learners can achieve their
            highest potentials.
          </p>
        </div>
      </div>
      <section className="w-full">
        <Background image="science.png" width={400} height={300}>
          <div className="flex flex-col items-center py-8 space-y-8 lg:space-y-0 lg:space-x-8 lg:justify-center lg:flex-row">
            <Person
              name="Lucas Patel"
              title="Developer"
              image="/jacob-headshot.jpg"
            ></Person>
            <Person
              name="Nick Tyra"
              title="Designer"
              image="/jacob-headshot.jpg"
            ></Person>
          </div>
        </Background>
      </section>
    </>
  );
}
