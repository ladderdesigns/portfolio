import React from "react";

interface Props {
  text: string;
  isTitle: boolean;
  url: string;
}
const Button = ({ text, isTitle, url }: Props) => {
  const targetUrl = url;

  return (
    <a href={targetUrl}>
      <p
        className={
          "px-4 py-2 text-sm font-bold leading-5 text-orange-800 transition duration-150 ease-in-out bg-white rounded-full shadow-lg focus:outline-none hover:bg-gray-100 focus:bg-gray-100" +
          (isTitle ? "text-sm md:text-lg" : "text-md")
        }
      >
        {text}
      </p>
    </a>
  );
};

export default Button;
