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
      <section className="w-full" id="landing">
        <Background image="science.png" width={400} height={300}>
          <div className="m-4 bg-champagne rounded-xl">
            <Navbar isIndex={true}></Navbar>
            <div className="grid grid-cols-1 mt-8 md:grid-cols-2">
              <div className="flex items-center justify-center my-8 text-orange-800 md:justify-end">
                <div className="w-full p-4 my-auto sm:w-4/5 md:w-3/4 md:pr-8 " id="landing-block">
                  <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl"> We build high quality education technology, so you don’t have to. </h2>
                  <h3 className="text-xl leading-tight lg:text-2xl xl:text-3xl"> Affordable, accessible website design by people who care. </h3>
                  <button className="px-4 py-2 mt-2 text-sm font-bold leading-5 text-center text-orange-800 uppercase transition duration-150 ease-in-out bg-white rounded-full shadow-lg focus:outline-none hover:opacity-75 focus:opacity-75"> Contact Us </button>
                </div>
              </div>
              <div className="flex flex-col-reverse md:mt-8">
                <img src={"/learner.svg"} alt="The website designer himself." className="w-3/5 mx-auto md:w-3/5 lg:w-3/5" />
              </div>
            </div>
          </div>
        </Background>
      </section>

      <section className="grid grid-cols-1 p-8 text-base text-orange-800 md:grid-cols-2 place-items-center bg-champagne" id="what-we-do">
        <div className="items-center justify-center">
          <img className="w-3/5 mr-16 -ml-8 md:w-full " src={"/devices.svg"}></img>
        </div>
        <div className="items-center justify-center">
          <div className="pr-16" id="text">
            <h2 className="text-xl font-bold leading-tight sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl"> Technology the right way. </h2>
            <h3 className="text-lg leading-tight lg:text-xl xl:text-2xl">
              We proudly build software with the highest standards of product
              quality. Whether it’s on the computer or in the classroom,
              you’ll have the tools to ensure every learner has the best
              learning experience possible.
            </h3>
          </div>
        </div>
      </section>

      <Squiggly></Squiggly>

      <section className="flex flex-col items-center justify-center w-full p-8 text-base text-orange-800 bg-champagne" id="what-we-value">
        <div className="flex flex-col items-center justify-center w-2/5 pb-2 text-center">
          <h2 className="text-xl font-bold leading-tight sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl"> Why us? </h2>
          <h3 className="text-lg leading-tight lg:text-xl xl:text-2xl"> We’re young professionals that grew up with the Internet, so we know what makes a good website. </h3>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Card title="Accessibility" text={['Lorem Ipsum is simply dummy text.', 'It is long established fact that a reader will be distracted.', 'It has survived not only five centuries, but also electronic typesetting.']} type="primary"/>
          <Card title="Creativity" text={['Lorem Ipsum is simply dummy text.', 'It is long established fact that a reader will be distracted.', 'It has survived not only five centuries, but also electronic typesetting.']} type="primary"/>
          <Card title="Affordability" text={['Lorem Ipsum is simply dummy text.', 'It is long established fact that a reader will be distracted.', 'It has survived not only five centuries, but also electronic typesetting.']} type="primary"/>
        </div>
      </section>

      <section className="flex flex-col" id="what-we-value">
        <Heading
          title="Why us?"
          description="We’re young professionals that grew up with the Internet, so we know what makes a good website."
          textCentered={true}
        ></Heading>
        <div className="flex flex-col w-full h-screen px-8 pt-8md:px-0 md:flex-row bg-champagne">
          <div className="hidden md:block md:w-1/6"></div>
          <div className="my-auto md:self-center md:w-4/6">
            <div className="grid w-full h-auto grid-flow-row grid-cols-1 grid-rows-3 gap-8 lg:grid-rows-1 lg:grid-flow-col lg:grid-cols-3 lg:min-h-120">
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
        <div className="flex flex-col w-full bg-champagne">
          <Heading
            title="What our clients say"
            description="We love hearing from our clients whether learners themselves or educators helping others learn."
            textCentered={true}
          ></Heading>
          <div className="flex flex-row w-full h-screen pt-8 ">
            <div className="hidden w-1/6 lg:flex"></div>
            <div className="flex flex-col self-center justify-around w-full mx-auto lg:w-4/6 lg:flex-row ">
              <div className="flex flex-col self-center mb-16 w-72 lg:w-108 lg:mb-0">
                <Testimonial
                  name={testimonialOne.name}
                  title={testimonialOne.title}
                  image={testimonialOne.image}
                  isOpen={currTestimonial.id === testimonialOne.id}
                  callback={() => {
                    setCurrTestimonial(testimonialOne);
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

              <div className="flex flex-col justify-center px-20 text-xl text-center text-orange-800 lg:px-0 lg:pl-20 lg:w-120">
                <p className="text-xl italic">"{currTestimonial.quote}"</p>
                <p className="mt-6 text-lg italic font-semibold">
                  {currTestimonial.name}
                </p>
                <p className="text-sm italic">{currTestimonial.group}</p>
              </div>
            </div>
            <div className="hidden w-1/6 lg:flex"></div>
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
