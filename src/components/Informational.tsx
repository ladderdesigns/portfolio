import React from "react";

interface Props {
  title: string;
  invert: boolean;
  text: string;
}
//{ text, isTitle, url }: Props
const Informational = ({ title, invert, text }: Props) => {
  return (
    <div
      className={
        "flex flex-col h-48 w-96 self-center p-4 lg:w-56 lg:h-96 rounded-xl " +
        (invert
          ? "bg-white border-2 border-orange-500 text-orange-500"
          : "bg-orange-500 text-white")
      }
    >
      <p className="text-2xl font-semibold">{title}</p>
      {invert && (
        <img
          src={"little-squiggly-orange.svg"}
          className="w-24 mt-1 text-orange-500"
        ></img>
      )}
      {!invert && (
        <img src={"little-squiggly.svg"} className="w-24 mt-1 text-white"></img>
      )}
    </div>
  );
};

export default Informational;
