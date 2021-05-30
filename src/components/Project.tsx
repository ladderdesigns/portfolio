import React from "react";

interface Props {
  src: string;
  url: string;
  name: string;
}
const Project = ({ src, url, name }: Props) => {
  return (
    <a
      className="z-10 border-4 border-orange-800 border-solid rounded-xl img-gradient"
      style={{
        background: "linear-gradient(0deg, #00000088 30%, #ffffff44 100%)",
      }}
      href={url}
    >
      <img className="z-0 rounded-lg " src={src}></img>
      <h3 className="absolute z-20 text-4xl font-bold text-champagne bottom-2 left-2">
        {" "}
        {name}{" "}
      </h3>
    </a>
  );
};

export default Project;
