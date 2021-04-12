import React, { useState } from "react";
import { Transition } from "@headlessui/react";

interface Props {
  name: string;
  title: string;
  image: string;
  isOpen: boolean;
  callback: Function;
}
const Testimonial = ({ name, title, image, isOpen, callback }: Props) => {
  return (
    <>
      <button
        className={
          "flex flex-row h-24 px-4 py-2 text-white items-center rounded-2xl hover:opacity-75 transition transform duration-200 " +
          (!isOpen
            ? "bg-white focus:w-80 w-72 transition-width rounded-lg"
            : "bg-orange-500 w-80 transition-width rounded-lg")
        }
        onClick={() => callback()}
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
        <div className="flex flex-col justify-center w-16">
          <img src={image} alt="" className="w-16 h-16 rounded-full" />
        </div>
      </button>
    </>
  );
};

export default Testimonial;
