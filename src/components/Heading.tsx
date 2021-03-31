import React from "react";

interface Props {
  title: string;
  description: string;
}
const Heading = ({ title, description }: Props) => {
  return (
    <>
      <p className="block mb-2 text-base text-3xl font-bold leading-tight md:text-4xl">
        {title}
      </p>
      <p className="block pr-16 mb-2 text-lg md:text-xl">{description}</p>
    </>
  );
};

export default Heading;
