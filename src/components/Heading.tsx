import React from "react";
import Topic from "../components/Topic";

interface Props {
  title: string;
  description: string;
}

const Heading = ({ title, description }: Props) => {
  return (
    <>
      <div className="flex flex-col justify-start max-w-xl pb-2 text-base text-center text-orange-800 md:max-w-2xl">
        <h2 className="pb-2 text-3xl font-bold leading-tight md:text-4xl">
          {" "}
          {title}{" "}
        </h2>
        <h3 className="text-xl leading-tight md:text-2xl"> {description}</h3>
      </div>
    </>
  );
};

export default Heading;
