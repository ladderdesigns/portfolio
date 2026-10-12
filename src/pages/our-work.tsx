import React from "react";
import Head from "next/head";
import Link from "next/link";
import { InferGetStaticPropsType } from "next";

import projects from "../data/projects.json";
import Project from "../components/Project";
import Background from "@/components/Background";
import Meta from "@/components/Meta";

type Work = {
  key: string;
  url: string;
  img: string;
  name: string;
};

export const getStaticProps = async () => {
  const work: Work[] = projects;
  return {
    props: {
      work,
    },
  };
};

export default function OurWork({
  work,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Meta
        title="Our Work | Ladder Designs"
        path="/our-work"
        description="Websites and education technology Ladder Designs has built for schools, nonprofits, and small businesses."
      />
      <Head>
        <link rel="preload" as="image" href="/science.png" />
      </Head>

      <section className="w-full py-24 bg-champagne" id="landing">
        <div className="grid max-w-5xl grid-cols-1 px-6 mx-auto mt-4">
          <div className="flex items-center justify-center text-orange-800 md:justify-end">
            <div className="w-full p-4 my-auto">
              <h1 className="pb-2 text-2xl font-bold leading-tight sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl">
                We are a team of dedicated artists, developers and dreamers -
                let us help make your website idea a reality.
              </h1>

              <Link
                href="#projects"
                className="px-4 py-2 text-sm font-bold leading-5 text-center uppercase transition duration-150 ease-in-out bg-white rounded-full shadow-lg focus:outline-none hover:opacity-75 focus:opacity-75"
              >
                Our work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full scroll-mt-4" id="projects">
        <Background image="science.png" width={400} height={300}>
          <div className="max-w-5xl px-4 mx-auto sm:px-6">
            <div className="grid grid-flow-row grid-cols-1 gap-8 p-4 mx-auto md:grid-cols-2">
              {work.map((w, i) => (
                <Project
                  src={`/${w.img}`}
                  url={w.url}
                  key={w.key}
                  name={w.name}
                  priority={i < 2}
                />
              ))}
            </div>
          </div>
        </Background>
      </section>
    </>
  );
}
