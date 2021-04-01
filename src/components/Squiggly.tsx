import React from "react";

interface Props {}
const Squiggly = ({}: Props) => {
  return (
    <div className="self-center justify-end my-8 md:my-16">
      <img src={"/squiggly.svg"} alt="squiggly.svg" className="w-64" />
    </div>
  );
};

export default Squiggly;
