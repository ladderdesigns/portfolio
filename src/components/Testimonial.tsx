import React, { useState } from "react";
import { Transition } from "@headlessui/react";

interface Props {
  name: string;
  title: string;
  image: string;
  isOpen: boolean;
}

const Testimonial = ({ name, title, image, isOpen }: Props) => {
  return (
    <>
      <div
        className={
          "flex flex-row h-28 px-4 mb-4 py-2 text-white items-center rounded-2xl hover:opacity-75 transition transform duration-200 " +
          (!isOpen
            ? "bg-white focus:w-full w-72 sm:focus:w-96 sm:w-80 transition-width rounded-lg"
            : "bg-orange-500 w-full sm:w-96 transition-width rounded-lg")
        }
      >
        <div className="flex-col self-center flex-grow-0 w-44">
          <p
            className={
              "text-xl font-bold text-left  " +
              (!isOpen ? "text-orange-500" : "text-white")
            }
          >
            {name}
          </p>
          <p
            className={
              "font-normal text-left text-md " +
              (!isOpen ? "text-orange-400" : "text-white")
            }
          >
            {title}
          </p>
        </div>
        <div className="my-auto ">
          <img
            src={image}
            alt="Testimonial image"
            className="w-20 h-20 rounded-full"
          />
        </div>
        <p
          className={
            "" + (!isOpen ? "" : "ml-16 px-3 py-8 bg-orange-100 rounded-full")
          }
        ></p>
      </div>
    </>
  );
};

export default Testimonial;
