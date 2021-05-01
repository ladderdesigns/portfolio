import React from "react";

interface Props {
  name: string;
  title: string;
  image: string;
}

const Person = ({ name, title, image }: Props) => {
  return (
    <>
      <div className="flex flex-col text-orange-800 border-4 border-orange-800 rounded-xl w-80 h-108 bg-champagne">
        <img
          alt="headshot"
          src={image}
          className="self-center justify-center w-64 h-64 mt-8 mb-6 border border-4 border-orange-800 rounded-full"
        />
        <p className="text-3xl font-semibold text-center">{name}</p>
        <p className="text-2xl italic text-center">{title}</p>
      </div>
    </>
  );
};

export default Person;
