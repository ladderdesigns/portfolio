import React from "react";

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
      {!isOpen && (
        <button
          className="flex flex-row h-24 px-4 py-2 text-white bg-white w-72 rounded-2xl hover:opacity-75"
          onClick={() => callback()}
        >
          <div className="flex-col self-center w-3/5">
            <p className="text-xl font-bold text-left text-orange-500 ">
              {name}
            </p>
            <p className="font-normal text-left text-orange-400 text-md">
              {title}
            </p>
          </div>
          <div className="flex self-center justify-center w-2/5">
            <img src={image} alt="" className="w-16 h-16 rounded-full" />
          </div>
        </button>
      )}
      {isOpen && (
        <button className="flex flex-row h-24 px-4 py-2 text-white bg-orange-500 w-80 rounded-2xl hover:opacity-75">
          <div className="flex-col self-center w-3/5">
            <p className="text-xl font-bold text-left text-white ">{name}</p>
            <p className="font-normal text-left text-orange-800 text-md">
              {title}
            </p>
          </div>
          <div className="flex self-center justify-between w-2/5">
            <img src={image} alt="" className="w-16 h-16 rounded-full" />

            <img src={"/oval.svg"} className="h-16" />
          </div>
        </button>
      )}
    </>
  );
};

export default Testimonial;
