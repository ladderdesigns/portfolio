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
      <div className="w-full md:flex">
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
