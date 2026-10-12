import React, { Fragment, FormEvent, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Squiggly from "../components/Squiggly";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

import testimonials from "../data/testimonials.json";
import Background from "@/components/Background";
import Card from "@/components/Card";
import Meta from "@/components/Meta";

import { RadioGroup, Dialog, Transition } from "@headlessui/react";

type FormStatus = "idle" | "submitting" | "error";

export default function Index() {
  const [currTestimonial, setCurrTestimonial] = useState(
    testimonials.testimonialOne
  );
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    try {
      const body = new URLSearchParams(
        new FormData(form) as unknown as Record<string, string>
      ).toString();
      // Netlify Forms only accepts submissions posted to a static file.
      const response = await fetch("/contact_form.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);
      form.reset();
      setStatus("idle");
      setIsOpen(true);
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Meta title="Ladder Designs | Affordable, accessible website design" path="/" />
      <Head>
        <link rel="preload" as="image" href="/science.png" />
      </Head>
      <section className="w-full text-orange-800 bg-champagne" id="landing">
        <Background image="science.png" width={400} height={300}>
          <div className="m-4 bg-champagne rounded-xl">
            <Navbar isIndex />
            <div className="grid max-w-5xl grid-cols-1 px-4 mx-auto mt-8 sm:px-6 md:grid-cols-2">
              <div className="flex items-center justify-center my-8 md:justify-start">
                <div className="w-full p-4 my-auto">
                  <h1 className="pb-1 text-3xl font-bold leading-tight md:text-4xl">
                    We build high quality education technology, so you don’t
                    have to.
                  </h1>
                  <p className="pb-2 text-xl leading-tight md:text-2xl">
                    Affordable, accessible website design by people who care.
                  </p>
                  <Link href="#contact-us" className="px-4 py-2 text-sm font-bold leading-5 text-center uppercase transition duration-150 ease-in-out bg-white rounded-full shadow-lg focus:outline-none hover:opacity-75 focus:opacity-75">
                      {" "}
                      Contact Us{" "}
                    </Link>
                </div>
              </div>
              <div className="flex flex-col-reverse">
                <img
                  src="/learner.svg"
                  alt=""
                  width={560}
                  height={693}
                  fetchPriority="high"
                  className="w-3/5 pt-8 mx-auto md:w-4/5 md:ml-auto md:mr-4"
                />
              </div>
            </div>
          </div>
        </Background>
      </section>

      <main className="bg-champagne">
        <div className="max-w-5xl px-4 mx-auto sm:px-6">
          <section className="text-base text-orange-800" id="what-we-do">
            <div className="grid grid-cols-1 p-4 pt-24 mx-auto lg:grid-cols-2 place-items-center">
              <div className="items-center justify-center md:pr-12 xl:pr-16">
                <Image
                  alt="Example websites shown on a laptop and a phone"
                  src="/devices.webp"
                  width={1200}
                  height={729}
                  sizes="(min-width: 1024px) 460px, 90vw"
                />
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

          <Squiggly />

          <section className="text-base text-orange-800" id="why-us">
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

          <Squiggly />

          <section className="text-base text-orange-800" id="testimonials">
            <div className="flex flex-col items-center justify-center w-full mx-auto">
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

                <div className="flex flex-col justify-center text-xl text-center text-orange-800 lg:px-0 lg:pl-20 lg:w-120">
                  <p className="text-xl italic">“{currTestimonial.quote}”</p>
                  <p className="mt-6 text-lg italic font-semibold">
                    {currTestimonial.name}
                  </p>
                  <p className="text-sm italic">{currTestimonial.group}</p>
                </div>
              </div>
            </div>
          </section>

          <Squiggly />

          <section className="text-base text-orange-800" id="contact-us">
            <div className="flex flex-col items-center justify-center w-full mx-auto">
              <Heading
                title="Get in touch!"
                description="Contact us so we can learn more about your project and get you a
          quote."
              />
              <div className="flex justify-center w-full py-24">
                <div className="w-full sm:max-w-xl md:max-w-2xl">
                  <form
                    className="p-8 text-base bg-white rounded-xl"
                    name="contact"
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex flex-wrap mb-6 -mx-3">
                      <input type="hidden" name="form-name" value="contact" />
                      <label className="hidden">
                        Don’t fill this out if you’re human:{" "}
                        <input name="bot-field" tabIndex={-1} autoComplete="off" />
                      </label>
                      <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                        <label
                          className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                          htmlFor="firstname"
                        >
                          First Name
                        </label>
                        <input
                          className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none md:mb-3 focus:outline-none focus:bg-white focus:border-gray-300"
                          id="firstname"
                          autoComplete="given-name"
                          type="text"
                          placeholder="Jane"
                          name="firstname"
                          required
                        />
                      </div>
                      <div className="w-full px-3 md:w-1/2">
                        <label
                          className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                          htmlFor="lastname"
                        >
                          Last Name
                        </label>
                        <input
                          className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-300"
                          id="lastname"
                          autoComplete="family-name"
                          name="lastname"
                          type="text"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap mb-6 -mx-3">
                      <div className="w-full px-3">
                        <label
                          className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                          htmlFor="email"
                        >
                          E-mail
                        </label>
                        <input
                          className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-300"
                          id="email"
                          autoComplete="email"
                          name="email"
                          placeholder="janedoe@mail.com"
                          type="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap mb-6 -mx-3">
                      <div className="w-full px-3">
                        <label
                          className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          className="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none resize-none no-resize focus:outline-none focus:bg-white focus:border-gray-300"
                          id="message"
                          name="message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="px-6 py-3 text-sm font-bold leading-5 text-center text-white transition duration-150 ease-in-out bg-orange-500 rounded-lg shadow-lg focus:outline-none hover:opacity-75 focus:opacity-75 disabled:cursor-wait disabled:opacity-75"
                      >
                        <span className="grid">
                          <span
                            className={
                              "col-start-1 row-start-1 " +
                              (status === "submitting" ? "invisible" : "")
                            }
                          >
                            Send Message
                          </span>
                          <span
                            aria-hidden={status !== "submitting"}
                            className={
                              "col-start-1 row-start-1 " +
                              (status === "submitting" ? "" : "invisible")
                            }
                          >
                            Sending…
                          </span>
                        </span>
                      </button>
                      <p
                        role="alert"
                        className={
                          "mt-4 text-sm text-center text-red-700 " +
                          (status === "error" ? "" : "hidden")
                        }
                      >
                        Something went wrong sending your message. Please try
                        again or email jseanpatel@gmail.com.
                      </p>
                    </div>
                  </form>
                </div>

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
                              We have received your message and we’ll get back
                              to you shortly.
                            </p>
                          </div>

                          <div className="flex mt-4">
                            <button
                              type="button"
                              className="inline-flex justify-center px-4 py-2 ml-auto text-sm font-bold text-white bg-orange-500 border border-transparent rounded-full shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500 hover:opacity-75"
                              onClick={() => setIsOpen(false)}
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
      </main>

      <Footer />
    </>
  );
}
