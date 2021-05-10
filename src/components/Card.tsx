import React from "react";

interface Props {
  title: string;
  text: string | string[];
  type: "primary" | "secondary" | "tertiary";
}

const Project = ({ title, text, type }: Props) => {
  return (
    <div className={"px-4 py-3 m-2 rounded-xl " + typeBorder(type)} >
      <p className={"text-2xl font-semibold " + typeAccent(type)}> {title} </p>
      <img src={type === "primary" ? "little-squiggly.svg" : "little-squiggly-orange.svg"} className={"w-24 mt-1" + typeText(type)}></img>
      <ul className={"mt-2 font-semibold list-disc list-inside text-md md:text-lg " + typeText(type)}>
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

//TODO: figure out if there is a better way to conditionally style the props, this is so gross
const typeBorder = (type: "primary" | "secondary" | "tertiary") => {
  switch(type) {
    case "primary":
      return "bg-orange-500"
    case "secondary":
      return "bg-white border border-orange-500 border-4"
  }
}

const typeAccent = (type: "primary" | "secondary" | "tertiary") => {
  switch(type) {
    case "primary":
      return "text-white"
    case "secondary":
      return "text-orange-500"
  }
}

const typeText = (type: "primary" | "secondary" | "tertiary") => {
  switch(type) {
    case "primary":
      return "text-white"
    case "secondary":
      return "text-orange-500"
  }
}

export default Project;
