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
import Informational from "../components/Informational";

import testimonials from "../data/testimonials.json";

export default function Index() {
  interface TestimonialObject {
    [key: string]: any;
  }

  let testimonialOne: TestimonialObject = testimonials.testimonialOne;
  let testimonialTwo: TestimonialObject = testimonials.testimonialTwo;
  let testimonialThree: TestimonialObject = testimonials.testimonialThree;

  const [currTestimonial, setCurrTestimonial] = useState(testimonialOne);

  return (
    <>
      <Head>
        <title>Ladder Designs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Lucas, the reason that the Navbar here is not at the top level is because we have to apply margins around according to the Figma. I thought it would be easier than doing some messy z index thing.*/}
      <div className="h-screen m-10 rounded-lg bg-champagne">
        <Navbar></Navbar>

        <div className="flex flex-col justify-center h-screen text-base text-orange-800">
          <div className="flex w-full">
            <div className="hidden w-1/6 md:flex"></div>
            <div className="flex-col p-8 w-100 md:p-0 md:w-2/6 md:mt-6 lg:mt-12">
              <Topic
                title="We build high quality education technology, so you don’t have
                  to."
                description="Affordable, accessible website design by people who care."
                textCentered={false}
              ></Topic>
              <div className="flex">
                <Button text="CONTACT US" isTitle={false} url="/contact" />
              </div>
              <div className="flex self-end justify-end">
                <img
                  src={"/learner.svg"}
                  alt="learner.svg"
                  className="block w-64 md:hidden"
                />
              </div>
            </div>
            <div className="justify-center hidden mt-10 md:flex md:flex-row md:w-3/6">
              <img
                src={"/learner.svg"}
                alt="learner.svg"
                className="md:w-64 lg:w-96"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-auto px-8 text-base text-orange-800 bg-champagne md:px-0">
        <section>
          <div className="flex flex-col w-full h-screen pt-8 md:flex-row">
            <div className="hidden w-1/6 md:flex"></div>
            <div className="flex-col w-100 md:p-0 md:w-2/6 md:mt-6 lg:mt-12"></div>
            <div className="flex-col self-center w-100 md:p-0 md:w-2/6 md:mt-6 lg:mt-12">
              <Topic
                title="Technology the right way"
                description="We proudly build software with the highest standards of product
                  quality. Whether it’s on the computer or in the classroom,
                  you’ll have the tools to ensure every learner has the best
                  learning experience possible."
                textCentered={false}
              ></Topic>
            </div>
            <div className="hidden w-1/6 md:flex"></div>
          </div>
        </section>

        <div className="self-center justify-end my-8 md:my-16">
          <Squiggly></Squiggly>
        </div>

        <Heading
          title="Why us?"
          description="We’re young professionals that grew up with the Internet, so we know what makes a good website."
          textCentered={true}
        ></Heading>
        <section>
          <div className="flex flex-col w-full h-screen pt-8 md:flex-row">
            <div className="hidden w-1/6 md:flex"></div>
            <div className="flex flex-col self-center justify-between lg:flex-row md:p-0 md:w-4/6 md:mt-6 lg:mt-12">
              <Informational title="Accessibility" invert={false} />
              <Informational title="Creativity" invert={true} />
              <Informational title="Affordability" invert={false} />
            </div>

            <div className="hidden w-1/6 md:flex"></div>
          </div>
        </section>
        <div className="self-center justify-end my-8 md:my-16">
          <Squiggly></Squiggly>
        </div>
        <section>
          <Heading
            title="What our clients say"
            description="We love hearing from our clients whether learners themselves or educators helping others learn."
            textCentered={true}
          ></Heading>
          <div className="flex flex-col w-full h-screen pt-8 md:flex-row">
            <div className="hidden w-1/6 md:flex"></div>
            <div className="flex-col justify-center w-full md:p-0 lg:w-2/6 md:mt-6 lg:mt-12">
              <div className="mt-4"></div>

              <Testimonial
                name={testimonialOne.name}
                title={testimonialOne.title}
                image={testimonialOne.image}
                isOpen={currTestimonial.id === testimonialOne.id}
                callback={() => {
                  setCurrTestimonial(testimonialOne);
                  console.log("hello");
                }}
              ></Testimonial>
              <div className="mt-4"></div>
              <Testimonial
                name={testimonialTwo.name}
                title={testimonialTwo.title}
                image={testimonialTwo.image}
                isOpen={currTestimonial.id === testimonialTwo.id}
                callback={() => setCurrTestimonial(testimonialTwo)}
              ></Testimonial>
              <div className="mt-4"></div>
              <Testimonial
                name={testimonialThree.name}
                title={testimonialThree.title}
                image={testimonialThree.image}
                isOpen={currTestimonial.id === testimonialThree.id}
                callback={() => setCurrTestimonial(testimonialThree)}
              ></Testimonial>
            </div>
            <div className="flex-col mt-8 text-xl text-center w-100 md:mt-0 md:p-0 md:w-2/6 md:mt-6 lg:mt-12">
              <p className="text-xl italic">"{currTestimonial.quote}"</p>
              <p className="mt-6 text-lg italic font-semibold">
                {currTestimonial.name}
              </p>
              <p className="text-sm italic">{currTestimonial.group}</p>
            </div>

            <div className="hidden w-1/6 md:flex"></div>
          </div>
        </section>
        <div className="self-center justify-end ">
          <Squiggly></Squiggly>
        </div>
        <section>
          <Heading
            title="Get in touch!"
            description="Contact us so we can learn more about your project and get you a quote."
            textCentered={true}
          ></Heading>
          <div className="flex flex-col w-full h-screen pt-8 md:flex-row">
            <div className="hidden w-1/6 md:flex"></div>
            <div className="flex-col self-center w-100 md:p-0 md:w-4/6 md:mt-6 lg:mt-12">
              <ContactFrom></ContactFrom>
            </div>
            <div className="hidden w-1/6 md:flex"></div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
