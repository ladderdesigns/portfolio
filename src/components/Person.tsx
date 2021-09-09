import React from "react";

interface Props {
  name: string;
  title: string;
  image: string;
}

const Person = ({ name, title, image }: Props) => {
  return (
    <>
      <div className="flex flex-col text-orange-800 border-4 border-orange-800 rounded-xl h-96 w-72 sm:w-80 sm:h-108 bg-champagne">
        <img
          alt="headshot"
          src={image}
          className="self-center justify-center w-56 h-56 mt-8 mb-6 border-orange-800 rounded-full sm:w-64 sm:h-64"
        />
        <p className="text-3xl font-semibold text-center">{name}</p>
        <p className="text-2xl italic text-center">{title}</p>
      </div>
    </>
  );
};

export default Person;
