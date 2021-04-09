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
      <div className="min-h-screen m-10 rounded-lg bg-champagne">
        <Navbar isIndex={true}></Navbar>

        <div className="flex flex-row justify-center w-full h-screen text-base text-orange-800">
          <div className="hidden w-1/6 lg:block"></div>
          <div className="relative flex-col px-8 mt-8 lg:px-0 lg:flex-row lg:w-2/6 sm:mt-20 md:mt-28 lg:mt-36">
            <Topic
              title="We build high quality education technology, so you don’t have
                  to."
              description="Affordable, accessible website design by people who care."
              textCentered={false}
            ></Topic>

            <Button text="CONTACT US" isTitle={false} url="/contact" />

            <img
              src={"/learner.svg"}
              alt="learner.svg"
              className="absolute inset-x-0 bottom-0 mx-auto sm:mt-12 w-80 h-80 sm:w-120 sm:h-120 lg:hidden"
            />
          </div>
          <div className="relative hidden h-full lg:block lg:w-3/6">
            <img
              src={"/learner.svg"}
              alt="learner.svg"
              className="absolute inset-x-0 bottom-0 h-full -right-10 md:h-120 md:w-120 lg:h-132 lg:w-132"
            />
          </div>
          <div className="hidden w-1/6 lg:block"></div>
        </div>
      </div>

      {/* <div className="h-auto px-8 text-base text-orange-800 bg-champagne md:px-0"> */}
      <section>
        <div className="flex flex-col w-full h-screen px-8 pt-8 text-base text-orange-800 md:px-0 md:flex-row bg-champagne">
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

      <Squiggly></Squiggly>

      <section>
        <Heading
          title="Why us?"
          description="We’re young professionals that grew up with the Internet, so we know what makes a good website."
          textCentered={true}
        ></Heading>
        <div className="flex flex-col w-full h-screen px-8 pt-8 md:px-0 md:flex-row bg-champagne ">
          <div className="hidden md:block md:w-1/6"></div>
          <div className="my-auto md:self-center md:w-4/6">
            <div className="grid w-full h-auto grid-flow-row grid-cols-1 grid-rows-3 gap-8 md:grid-rows-1 md:grid-flow-col md:grid-cols-3 md:min-h-120">
              <div className="p-4 bg-orange-500 rounded-xl">
                {" "}
                <p className="text-2xl font-semibold text-white ">
                  Accessibility
                </p>
                <img src={"little-squiggly.svg"} className="w-24 mt-1"></img>
                <ul className="mt-2 font-semibold text-white list-disc list-inside text-md md:text-lg">
                  <li>Lorem Ipsum is simply dummy text.</li>
                  <li>
                    {" "}
                    It is long established fact that a reader will be
                    distracted.
                  </li>
                  <li>
                    It has survived not only five centuries, but also electronic
                    typesetting.
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-white border-2 border-orange-500 rounded-xl">
                {" "}
                <p className="text-2xl font-semibold text-orange-500 ">
                  Creativity
                </p>
                <img
                  src={"little-squiggly-orange.svg"}
                  className="w-24 mt-1"
                ></img>
                <ul className="mt-2 font-semibold text-orange-500 list-disc list-inside text-md md:text-lg ">
                  <li>Lorem Ipsum is simply dummy text.</li>
                  <li>
                    {" "}
                    It is long established fact that a reader will be
                    distracted.
                  </li>
                  <li>
                    It has survived not only five centuries, but also electronic
                    typesetting.
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-orange-500 rounded-xl">
                {" "}
                <p className="text-2xl font-semibold text-white ">
                  Affordability
                </p>
                <img
                  src={"little-squiggly.svg"}
                  className="w-24 mt-1 text-white"
                ></img>
                <ul className="mt-2 font-semibold text-white list-disc list-inside md:text-lg ">
                  <li>Lorem Ipsum is simply dummy text.</li>
                  <li>
                    {" "}
                    It is long established fact that a reader will be
                    distracted.
                  </li>
                  <li>
                    It has survived not only five centuries, but also electronic
                    typesetting.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="hidden md:block md:w-1/6"></div>
        </div>
      </section>

      <Squiggly></Squiggly>

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

      <Footer></Footer>
    </>
  );
}
