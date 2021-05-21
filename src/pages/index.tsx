import React, { useState, useEffect } from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Topic from "../components/Topic";
import Squiggly from "../components/Squiggly";
import Testimonial from "../components/Testimonial";
import ContactFrom from "../components/ContactForm";
import Footer from "../components/Footer";

import testimonials from "../data/testimonials.json";
import Background from "@/components/Background";
import Card from "@/components/Card";

import { RadioGroup } from "@headlessui/react";

export default function Index() {
  let [currTestimonial, setCurrTestimonial] = useState(
    testimonials.testimonialOne
  );
  let [plan, setPlan] = useState("startup");

  return (
    <>
      <Head>
        <title>Ladder Designs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        className="w-full pb-8 text-orange-800 bg-champagne"
        id="landing"
      >
        <Background image="science.png" width={400} height={300}>
          <div className="m-4 bg-champagne rounded-xl">
            <Navbar isIndex={true}></Navbar>
            <div className="grid grid-cols-1 mx-auto mt-8 max-w-7xl md:grid-cols-2">
              <div className="flex items-center justify-center my-8 md:justify-start">
                <div className="w-full p-4 my-auto" id="landing-block">
                  <h2 className="pb-1 text-3xl font-bold leading-tight md:text-4xl">
                    {" "}
                    We build high quality education technology, so you don’t
                    have to.{" "}
                  </h2>
                  <h3 className="pb-2 text-xl leading-tight md:text-2xl">
                    {" "}
                    Affordable, accessible website design by people who care.{" "}
                  </h3>
                  <button
                    className="px-4 py-2 text-sm font-bold leading-5 text-center uppercase transition duration-150 ease-in-out bg-white rounded-full shadow-lg focus:outline-none hover:opacity-75 focus:opacity-75"
                    type="button"
                    onClick={() => console.log(currTestimonial)}
                  >
                    {" "}
                    Contact Us{" "}
                  </button>
                </div>
              </div>
              <div className="flex flex-col-reverse">
                <img
                  src={"/learner.svg"}
                  alt="The website designer himself."
                  className="w-3/5 pt-8 mx-auto md:w-4/5 md:ml-auto md:mr-4"
                />
              </div>
            </div>
          </div>
        </Background>
      </section>

      <section
        className="text-base text-orange-800 bg-champagne"
        id="what-we-do"
      >
        <div className="grid grid-cols-1 p-4 mx-auto md:grid-cols-2 place-items-center max-w-7xl ">
          <div className="items-center justify-center">
            <img className="" src={"/"}></img>
          </div>
          <div className="items-center justify-center p-4">
            <div className="text-center" id="text">
              <h2 className="pb-2 text-3xl font-bold leading-tight md:text-4xl">
                {" "}
                Technology the right way.{" "}
              </h2>
              <h3 className="text-xl leading-tight md:text-2xl">
                We proudly build software with the highest standards of product
                quality. Whether it’s on the computer or in the classroom,
                you’ll have the tools to ensure every learner has the best
                learning experience possible.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <Squiggly></Squiggly>

      <section
        className="text-base text-orange-800 bg-champagne"
        id="what-we-do"
      >
        <div
          className="flex flex-col items-center justify-center w-full p-4 mx-auto max-w-7xl"
          id="what-we-value"
        >
          <div className="flex flex-col justify-start w-1/2 pb-2 text-center">
            <h2 className="pb-2 text-3xl font-bold leading-tight md:text-4xl">
              {" "}
              Why us?{" "}
            </h2>
            <h3 className="text-xl leading-tight md:text-2xl">
              {" "}
              We’re young professionals that grew up with the Internet, so we
              know what makes for a good website.{" "}
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center -mx-2 md:flex-row">
            <Card
              title="Accessibility"
              text={[
                "Lorem Ipsum is simply dummy text.",
                "It is long established fact that a reader will be distracted.",
                "It has survived not only five centuries, but also electronic typesetting.",
              ]}
              type="primary"
            />
            <Card
              title="Creativity"
              text={[
                "Lorem Ipsum is simply dummy text.",
                "It is long established fact that a reader will be distracted.",
                "It has survived not only five centuries, but also electronic typesetting.",
              ]}
              type="secondary"
            />
            <Card
              title="Affordability"
              text={[
                "Lorem Ipsum is simply dummy text.",
                "It is long established fact that a reader will be distracted.",
                "It has survived not only five centuries, but also electronic typesetting.",
              ]}
              type="primary"
            />
          </div>
        </div>
      </section>

      <Squiggly></Squiggly>

      <section
        className="text-base text-orange-800 bg-champagne"
        id="what-we-do"
      >
        <div
          className="flex flex-col items-center justify-center w-full pb-8 mx-auto max-w-7xl"
          id="what-we-value"
        >
          <div className="flex flex-col justify-start w-1/2 pb-2 text-center">
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              {" "}
              What our clients say{" "}
            </h2>
            <h3 className="text-xl leading-tight md:text-2xl">
              {" "}
              We love hearing from our clients whether learners themselves or
              educators helping others learn.{" "}
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:flex-row">
            <RadioGroup value={currTestimonial} onChange={setCurrTestimonial}>
              <RadioGroup.Option value={testimonials.testimonialOne}>
                {({ checked }) => (
                  <Testimonial
                    name={testimonials.testimonialOne.name}
                    title={testimonials.testimonialOne.title}
                    image={testimonials.testimonialOne.image}
                    isOpen={checked}
                  ></Testimonial>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value={testimonials.testimonialTwo}>
                {({ checked }) => (
                  <Testimonial
                    name={testimonials.testimonialTwo.name}
                    title={testimonials.testimonialTwo.title}
                    image={testimonials.testimonialTwo.image}
                    isOpen={checked}
                  ></Testimonial>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value={testimonials.testimonialThree}>
                {({ checked }) => (
                  <Testimonial
                    name={testimonials.testimonialThree.name}
                    title={testimonials.testimonialThree.title}
                    image={testimonials.testimonialThree.image}
                    isOpen={checked}
                  ></Testimonial>
                )}
              </RadioGroup.Option>
            </RadioGroup>
            <div className="flex flex-col justify-center px-20 text-xl text-center text-orange-800 lg:px-0 lg:pl-20 lg:w-120">
              <p className="text-xl italic">"{currTestimonial.quote}"</p>
              <p className="mt-6 text-lg italic font-semibold">
                {currTestimonial.name}
              </p>
              <p className="text-sm italic">{currTestimonial.group}</p>
            </div>
          </div>
        </div>
      </section>

      <Squiggly></Squiggly>

      <section id="contact-us">
        <div className="flex flex-col w-full pb-16 bg-champagne">
          <Heading
            title="Get in touch!"
            description="Contact us so we can learn more about your project and get you a quote."
            textCentered={true}
          ></Heading>
          <div className="flex flex-col w-full h-screen pt-8 md:flex-row">
            <div className="hidden w-1/6 md:block"></div>
            <div className="flex justify-center px-8 md:px-0 md:w-4/6 md:mt-6 lg:mt-12">
              <ContactFrom></ContactFrom>
            </div>
            <div className="hidden w-1/6 md:block"></div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
