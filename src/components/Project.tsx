import React from "react";

interface Props {
  src: string;
  url: string;
}
const Project = ({ src, url }: Props) => {
  return (
    <a className="" href={url}>
      <img
        className="border-4 border-orange-800 border-solid filter bg-champagne rounded-xl"
        src="https://via.placeholder.com/1600x1000"
      ></img>
    </a>
  );
};

export default Project;
