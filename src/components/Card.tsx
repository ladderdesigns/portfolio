import React from "react";

interface Props {
  title: string;
  text: string | string[];
  type: "primary" | "secondary" | "tertiary";
}

const Project = ({ title, text }: Props) => {
  return (
    <div className="px-4 py-3 m-2 bg-orange-500 w-96 rounded-xl">
      <p className="text-2xl font-semibold text-white "> {title} </p>
      <img src={"little-squiggly.svg"} className="w-24 mt-1"></img>
      <ul className="mt-2 font-semibold text-white list-disc list-inside text-md md:text-lg">
        <li>Lorem Ipsum is simply dummy text.</li>
        <li> It is long established fact that a reader will be distracted. </li>
        <li>
          {" "}
          It has survived not only five centuries, but also electronic
          typesetting.{" "}
        </li>
      </ul>
    </div>
  );
};

export default Project;
