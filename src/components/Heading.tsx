import React from "react";
import Topic from "../components/Topic";

interface Props {
  title: string;
  description: string;
  textCentered: boolean;
}

const Heading = ({ title, description, textCentered }: Props) => {
  return (
    <>
      <div className="flex flex-row w-full px-8 text-base text-orange-800 bg-champagne">
        <div className="md:w-2/6"></div>
        <div className="justify-center md:w-2/6">
          <Topic
            title={title}
            description={description}
            textCentered={textCentered}
          ></Topic>
        </div>
        <div className="md:w-2/6"></div>
      </div>
    </>
  );
};

export default Heading;
