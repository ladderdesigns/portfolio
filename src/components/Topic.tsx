import React from "react";

interface Props {
  title: string;
  description: string;
  textCentered: boolean;
}

const Topic = ({ title, description, textCentered }: Props) => {
  return (
    <>
      <p
        className={
          "block mb-2 text-2xl font-bold leading-tight md:text-3xl lg:text-4xl " +
          (textCentered ? "text-center" : "text-left")
        }
      >
        {title}
      </p>
      <p
        className={
          "block mb-2 text-xl md:text-2xl " +
          (textCentered ? "text-center" : "text-left")
        }
      >
        {description}
      </p>
    </>
  );
};

export default Topic;
