import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  url: string;
  name: string;
  priority?: boolean;
}

const Project = ({ src, url, name, priority = false }: Props) => {
  return (
    <a
      className="block overflow-hidden transition duration-150 border-4 border-orange-800 border-solid cursor-pointer rounded-xl img-gradient hover:opacity-90 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-500"
      href={url}
    >
      <Image
        className="w-full h-auto bg-orange-800"
        src={src}
        alt={`Screenshot of the ${name} website`}
        width={1600}
        height={1000}
        sizes="(min-width: 1024px) 456px, (min-width: 768px) 45vw, 90vw"
        priority={priority}
      />
      <h2 className="absolute z-20 text-4xl font-bold text-white bottom-2 left-2">
        {name}
      </h2>
    </a>
  );
};

export default Project;
