import React from "react";

interface Props {}
const Squiggly = ({}: Props) => {
  return (
    <div className="w-full py-24 bg-champagne">
      <svg
        className="mx-auto"
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
          stroke="#663828"
          strokeMiterlimit="10"
          strokeWidth="5"
          d="M0,2.5c5.7,0,5.7,4,11.3,4c5.7,0,5.7-4,11.3-4c5.7,0,5.7,4,11.3,4c5.7,0,5.7-4,11.3-4c5.7,0,5.7,4,11.3,4
		c5.7,0,5.7-4,11.3-4c5.7,0,5.7,4,11.3,4c5.7,0,5.7-4,11.3-4c5.7,0,5.7,4,11.4,4c5.7,0,5.7-4,11.4-4"
        />
      </svg>
    </div>
  );
};

export default Squiggly;
