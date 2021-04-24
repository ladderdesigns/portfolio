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
        backgroundSize: `95%`,
      }}
      className="h-64 border-4 border-orange-800 w-96 2xl:h-80 2xl:w-120 rounded-xl"
    >
      <a href={src}></a>
    </div>
  );
};

export default Project;
