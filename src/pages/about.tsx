import React, { useState, useEffect } from "react";
import Head from "next/head";
import Person from "../components/Person";

import Background from "@/components/Background";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Ladder Designs</title>
      </Head>

      <div className="pb-8 bg-champagne">
        <div className="items-center max-w-5xl px-10 pt-32 mx-auto my-auto sm:pb-16 bg-champagne ">
          <div className="flex flex-col items-center justify-center p-6 ml-auto border-4 border-orange-800 md:flex-row rounded-xl ">
            <div className="flex flex-col mb-2 min-w-max md:mb-0">
              <img
                alt="headshot"
                src="jacob-headshot.jpeg"
                className="self-center w-64 h-64 mb-4 border rounded-full "
              />
              <p className="text-3xl font-semibold text-center text-orange-800">
                Jacob Patel
              </p>
              <p className="text-2xl italic text-center text-orange-800">
                Founder
              </p>
            </div>
            <p
              className="max-w-lg text-xl text-left text-orange-800 md:ml-8 md:px-4 md:max-w-lg "
              id="landing-block"
            >
              Coding is my life, but learning is my love. That’s why I started
              Ladder Designs, a student-first design firm committed to creating
              the highest quality software and educational resources for schools
              and teachers. Whether it's online or in the classroom, I'm
              commited to creating effective tools so learners can achieve their
              highest potentials.
            </p>
          </div>
        </div>
      </div>

      <section className="w-full">
        <Background image="science.png" width={400} height={300}>
          <div className="max-w-5xl px-4 mx-auto sm:px-6">
            <div className="flex flex-col items-center py-8 space-y-8 lg:space-y-0 lg:space-x-8 lg:justify-center lg:flex-row">
              <Person
                name="Lucas Patel"
                title="Developer"
                image="https://via.placeholder.com/1600x1600"
              ></Person>
              <Person
                name="Nick Tyra"
                title="Designer"
                image="https://via.placeholder.com/1600x1600"
              ></Person>
            </div>
          </div>
        </Background>
      </section>
    </>
  );
}
