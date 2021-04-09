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
          "flex flex-row h-24 px-4 py-2 text-white  rounded-2xl hover:opacity-75 transition transform duration-200 " +
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

// {!isOpen && (
//   <>
// <div className="flex-col self-center w-3/5">
//   <p className="text-xl font-bold text-left text-orange-500 ">
//     {name}
//   </p>
//   <p className="font-normal text-left text-orange-400 text-md">
//     {title}
//   </p>
// </div>
// <div className="flex self-center justify-center w-2/5">
//   <img src={image} alt="" className="w-16 h-16 rounded-full" />
// </div>
//   </>
// )}
// {isOpen && (
//   <>
//     <div className="flex-col self-center w-3/5">
//       <p className="text-xl font-bold text-left text-white ">{name}</p>
//       <p className="font-normal text-left text-orange-800 text-md">
//         {title}
//       </p>
//     </div>
//     <div className="flex self-center justify-between w-2/5">
//       <img src={image} alt="" className="w-16 h-16 rounded-full" />

//       {/* <img src={"/oval.svg"} className="h-16" /> */}
//     </div>
//   </>
// )}

export default Testimonial;
