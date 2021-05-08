import React from "react";

interface Props {
  src: string;
  url: string;
}
const Project = ({ src, url }: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: `100%`,
      }}
      className="h-56 transition border-4 border-orange-800 w-80 filter hover:drop-shadow-2xl bg-champagne sm:h-72 sm:w-108 2xl:h-80 2xl:w-120 rounded-xl hover:opacity-75"
    >
      <a href={url}></a>
    </div>
  );
};

export default Project;
