import React from "react";

interface Props {}
const Squiggly = ({}: Props) => {
  return (
    <div className="w-full py-16 bg-champagne">
      <img
        src={"/squiggly.svg"}
        alt="squiggly.svg"
        className="w-64 ml-auto mr-auto"
      />
    </div>
  );
};

export default Squiggly;
