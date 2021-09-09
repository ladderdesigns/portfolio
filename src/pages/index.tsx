import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Squiggly from "../components/Squiggly";
import Testimonial from "../components/Testimonial";
import ContactFrom from "../components/ContactForm";
import Footer from "../components/Footer";

import testimonials from "../data/testimonials.json";
import Background from "@/components/Background";
import Card from "@/components/Card";

import { RadioGroup, Dialog } from "@headlessui/react";
import { Transition } from "@headlessui/react";

export default function Index({ formSubmit }: any) {
  const router = useRouter();

  let [currTestimonial, setCurrTestimonial] = useState(
    testimonials.testimonialOne
  );
  let [plan, setPlan] = useState("startup");

  let [isOpen, setIsOpen] = useState(
    JSON.parse(formSubmit).formSubmit === "success"
  );

  function closeModal() {
    setIsOpen(false);
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Home | Ladder Designs</title>
      </Head>
      <section className="w-full text-orange-800 bg-champagne" id="landing">
        <Background image="science.png" width={400} height={300}>
          <div className="m-4 bg-champagne rounded-xl">
            <Navbar isIndex={true}></Navbar>
            <div className="grid max-w-5xl grid-cols-1 px-4 mx-auto mt-8 sm:px-6 md:grid-cols-2">
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
                  <Link href="#contact-us">
                    <a className="px-4 py-2 text-sm font-bold leading-5 text-center uppercase transition duration-150 ease-in-out bg-white rounded-full shadow-lg focus:outline-none hover:opacity-75 focus:opacity-75">
                      {" "}
                      Contact Us{" "}
                    </a>
                  </Link>
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

      <div className="bg-champagne">
        <div className="max-w-5xl px-4 mx-auto sm:px-6">
          <section className="text-base text-orange-800 " id="what-we-do">
            <div className="grid grid-cols-1 p-4 pt-24 mx-auto lg:grid-cols-2 place-items-center">
              <div className="items-center justify-center md:pr-12 xl:pr-16">
                <img
                  className=""
                  alt="Computer and phone device examples"
                  src={"/devices.svg"}
                ></img>
              </div>

              <Heading
                title="Technology the right way"
                description="  We proudly build software with the highest standards of
                product quality. Whether it’s on the computer or in the
                classroom, you’ll have the tools to ensure every learner has
                the best learning experience possible."
              />
            </div>
          </section>

          <Squiggly></Squiggly>

          <section className="text-base text-orange-800 " id="what-we-do">
            <div className="flex flex-col items-center justify-center w-full mx-auto">
              <Heading
                title="Why us?"
                description="We’re young professionals that grew up with the Internet, so we
              know what makes for a good website."
              />
              <div className="flex flex-col justify-center h-full mt-24 md:flex-row">
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
                    "Discounts for educators, non-profits, and other approved organizations",
                    "Simple payment plan or single installment long-term options to fit your needs",
                    "No hidden costs",
                  ]}
                  type="primary"
                />
              </div>
            </div>
          </section>

          <Squiggly></Squiggly>

          <section className="text-base text-orange-800 " id="what-we-do">
            <div
              className="flex flex-col items-center justify-center w-full mx-auto"
              id="what-we-value"
            >
              <Heading
                title="What our clients say"
                description="We love hearing from our clients whether learners themselves or
            educators helping others learn."
              />

              <div className="flex flex-col justify-center w-full max-w-4xl pt-24 max lg:justify-between lg:flex-row">
                <RadioGroup
                  value={currTestimonial}
                  onChange={setCurrTestimonial}
                  className="mb-8 sm:ml-48 md:ml-64 lg:ml-0"
                >
                  <RadioGroup.Option value={testimonials.testimonialOne}>
                    {({ checked }) => (
                      <Testimonial
                        name={testimonials.testimonialOne.name}
                        title={testimonials.testimonialOne.title}
                        image={
                          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        }
                        isOpen={checked}
                      ></Testimonial>
                    )}
                  </RadioGroup.Option>
                  <RadioGroup.Option value={testimonials.testimonialTwo}>
                    {({ checked }) => (
                      <Testimonial
                        name={testimonials.testimonialTwo.name}
                        title={testimonials.testimonialTwo.title}
                        image={
                          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        }
                        isOpen={checked}
                      ></Testimonial>
                    )}
                  </RadioGroup.Option>
                  <RadioGroup.Option value={testimonials.testimonialThree}>
                    {({ checked }) => (
                      <Testimonial
                        name={testimonials.testimonialThree.name}
                        title={testimonials.testimonialThree.title}
                        image={
                          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        }
                        isOpen={checked}
                      ></Testimonial>
                    )}
                  </RadioGroup.Option>
                </RadioGroup>
                <div className="flex flex-col justify-center text-xl text-center text-orange-800 lg:px-0 lg:pl-20 lg:w-120">
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

          <section className="text-base text-orange-800" id="contact-us">
            <div className="flex flex-col items-center justify-center w-full mx-auto">
              <Heading
                title="Get in touch!"
                description="Contact us so we can learn more about your project and get you a
            quote."
              />
              <div className="flex justify-center w-full py-24">
                <ContactFrom></ContactFrom>
                {/* <div className="fixed inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                  >
                    Open dialog
                  </button>
                </div> */}

                <Transition appear show={isOpen} as={Fragment}>
                  <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={() => setIsOpen(false)}
                  >
                    <div className="min-h-screen px-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Dialog.Overlay className="fixed inset-0" />
                      </Transition.Child>

                      {/* This element is to trick the browser into centering the modal contents. */}
                      <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                      >
                        &#8203;
                      </span>
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                          <Dialog.Title
                            as="h3"
                            className="text-base text-lg font-medium leading-6 text-gray-900"
                          >
                            {" "}
                            Thanks for reaching out!
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              We have recieved your messaged and we'll get back
                              to you shortly.
                            </p>
                          </div>

                          <div className="mt-4">
                            <button
                              type="button"
                              className="inline-flex justify-center px-4 py-2 ml-64 text-sm font-bold text-white bg-orange-500 border border-transparent rounded-full shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500 hover:opacity-75"
                              onClick={() => closeModal()}
                            >
                              Got it, thanks!
                            </button>
                          </div>
                        </div>
                      </Transition.Child>
                    </div>
                  </Dialog>
                </Transition>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

Index.getInitialProps = async (context: any) => {
  const result = JSON.stringify(context.query);

  return { formSubmit: String(result) };
};
