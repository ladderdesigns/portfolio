import React from "react";

interface Props {
  //   title: string;
  //   description: string;
  //   textCentered: boolean;
}

const Person = ({}: Props) => {
  return (
    <>
      <div className="flex flex-col text-orange-800 border-4 border-orange-800 rounded-xl w-80 h-108 bg-champagne">
        <img
          alt="headshot"
          src="/jacob-headshot.jpg"
          className="self-center justify-center w-64 h-64 mt-8 mb-4 border border-4 border-orange-800 rounded-full"
        />
        <p className="text-3xl text-center">Lucas Patel</p>
        <p className="text-2xl italic font-light text-center">Developer</p>
      </div>
    </>
  );
};

export default Person;
