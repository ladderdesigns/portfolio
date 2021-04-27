import React from "react";

interface Props {
  src: string;
  url: string;
}
const Project = ({ src, url }: Props) => {
  return (
    <div
      // style={{
      //   backgroundImage: `url(${src})`,
      //   backgroundSize: `95%`,
      // }}
      className="w-full border-4 border-orange-800 filter hover:drop-shadow-2xl bg-champagne h-72 sm:w-108 2xl:h-80 2xl:w-120 rounded-xl"
    >
      <a href={url}></a>
    </div>
  );
};

export default Project;
