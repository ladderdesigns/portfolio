import React, { useState } from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
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
      <section className="w-full text-orange-800 bg-champagne" id="landing">
        <Background image="science.png" width={400} height={300}>
          <div className="m-4 bg-champagne rounded-xl">
            <Navbar isIndex={true}></Navbar>
            <div className="grid max-w-6xl grid-cols-1 mx-auto mt-8 md:grid-cols-2">
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
        <div className="grid max-w-6xl grid-cols-1 p-4 pt-24 mx-auto md:grid-cols-2 place-items-center ">
          <div className="items-center justify-center md:pr-12 xl:pr-16">
            <img className="" src={"/devices.svg"}></img>
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
          className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto"
          id="what-we-value"
        >
          <Heading
            title="Why us?"
            description="We’re young professionals that grew up with the Internet, so we
              know what makes for a good website."
          />
          <div className="flex flex-col items-center justify-center pt-24 -mx-2 md:flex-row">
            {" "}
            <Card
              title="Accessibility"
              text={[
                "Websites built for any audience",
                "Complete support for users with screenreaders or visual impairments",
                "Comprehensive SEO to achieve high traffic for your website",
              ]}
              type="primary"
            />
            <Card
              title="Creativity"
              text={[
                "Custom design to your specifications",
                "Professionally designed artwork and assets, including logos",
                "Numerous integrations including forms, calendars, blogs, and much more",
              ]}
              type="secondary"
            />
            <Card
              title="Affordability"
              text={[
                "Discounts for select organizations and individuals that meet requirements",
                "Simple monthly billing structure or single installment long-term options",
                "No hidden costs",
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
          className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto"
          id="what-we-value"
        >
          <Heading
            title="What our clients say"
            description="We love hearing from our clients whether learners themselves or
            educators helping others learn."
          />

          <div className="flex flex-col items-center justify-center w-full pt-24 lg:flex-row">
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

      <section
        className="text-base text-orange-800 bg-champagne"
        id="contact-us"
      >
        <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto">
          <Heading
            title="Get in touch!"
            description="Contact us so we can learn more about your project and get you a
            quote."
          />
          <div className="flex justify-center w-full py-24">
            <ContactFrom></ContactFrom>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
