import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import React from "react";

interface Props {
  image: string;
  height: number;
  width: number;
  children?: React.ReactNode;
}
const Background = ({ image, height, width, children }: Props) => {
  return (
    <div
      className="overflow-auto"
      id="bg"
      style={{
        backgroundImage: `url(/${image})`,
        backgroundRepeat: "repeat",
        backgroundSize: `${width}px ${height}px`,
      }}
    >
      {children}
    </div>
  );
};

export default Background;
