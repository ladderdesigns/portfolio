import React from "react";

interface Props {
  title: string;
  text: string[];
  type: "primary" | "secondary" | "tertiary";
}

const Project = ({ title, text, type }: Props) => {
  return (
    <div className={"px-4 py-3 m-2 rounded-xl  " + typeBorder(type)}>
      <p className={"text-2xl font-semibold " + typeAccent(type)}> {title} </p>
      <svg
        className=""
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="150px"
        height="12px"
        viewBox="0 0 113.4 9"
      >
        <path
          fill="none"
          stroke={type === "primary" ? "white" : "#FF8C65"}
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M0,2.5c5.7,0,5.7,4,11.3,4c5.7,0,5.7-4,11.3-4c5.7,0,5.7,4,11.3,4c5.7,0,5.7-4,11.3-4c5.7,0,5.7,4,11.3,4
		c5.7,0,5.7-4,11.3-4c5.7,0,5.7,4,11.3"
        />
      </svg>
      <ul
        className={
          "mt-2 font-semibold list-disc list-inside text-md md:text-lg " +
          typeText(type)
        }
      >
        {text.map((bullet: String) => (
          <li>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

//TODO: figure out if there is a better way to conditionally style the props, this is so gross
const typeBorder = (type: "primary" | "secondary" | "tertiary") => {
  switch (type) {
    case "primary":
      return "bg-orange-500";
    case "secondary":
      return "bg-white border border-orange-500 border-4";
  }
};

const typeAccent = (type: "primary" | "secondary" | "tertiary") => {
  switch (type) {
    case "primary":
      return "text-white";
    case "secondary":
      return "text-orange-500";
  }
};

const typeText = (type: "primary" | "secondary" | "tertiary") => {
  switch (type) {
    case "primary":
      return "text-white";
    case "secondary":
      return "text-orange-500";
  }
};

export default Project;
