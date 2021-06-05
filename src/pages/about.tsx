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
        <div className="grid items-center max-w-5xl grid-cols-1 px-4 pt-32 mx-auto my-auto sm:pb-16 sm:px-6 md:grid-cols-2 bg-champagne place-items-end">
          <div className="flex flex-col mx-auto md:mr-12">
            <img
              alt="headshot"
              src="https://via.placeholder.com/1600x1600"
              className="self-center w-64 h-64 mb-4 border rounded-full "
            />
            <p className="text-3xl font-semibold text-center text-orange-800">
              Jacob Patel
            </p>
            <p className="text-2xl italic text-center text-orange-800">
              Founder
            </p>
          </div>
          <div className="flex items-center justify-center my-8 md:justify-start">
            <div
              className="self-center px-4 mt-4 text-xl text-left text-orange-800"
              id="landing-block"
            >
              Coding is my life, but learning is my love. That’s why I started
              Ladder Designs, a student-first design firm committed to creating
              the highest quality software and educational resources for schools
              and teachers. Whether it be online or in the classroom, I am
              commited to creating effective tools so learners can achieve their
              highest potentials.
            </div>
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
