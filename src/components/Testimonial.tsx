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
            ? "bg-white focus:w-80 w-72 transition-width rounded-lg"
            : "bg-orange-500 w-80 transition-width rounded-lg")
        }
      >
        <div className="flex-col self-center w-40">
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
        <div>
          <img src={image} alt="" className="w-16 h-16 rounded-full" />
        </div>
        <div className="pl-10">
          <p
            className={
              "" + (!isOpen ? "" : "px-3 py-8 bg-orange-100 rounded-full")
            }
          ></p>{" "}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
