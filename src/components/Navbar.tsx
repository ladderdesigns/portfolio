import React, { useState } from "react";

import Link from "next/link";

interface Props {
  isIndex: boolean;
}

const Navbar = ({ isIndex }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <nav className={"bg-champagne " + (isIndex ? "rounded-md" : "")}>
      <div className="px-4 mx-auto">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            <button
              onClick={toggle}
              className="inline-flex items-center justify-center p-2 text-base transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-orange-800 focus:outline-none focus:bg-orange-800 focus:text-white"
            >
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={isOpen ? "hidden" : "inline-flex"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={isOpen ? "inline-flex" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center pr-2 md:static md:inset-auto md:pr-0">
            <Link href="/">
              <a>
                {" "}
                <img
                  src={"/landing-logo.svg"}
                  alt="Ladder Designs logo"
                  className="hidden w-64 sm:block"
                />
                <img
                  src={"/landing-logo-mobile.svg"}
                  alt="Ladder Designs logo"
                  className="block ml-2 w-28 sm:hidden"
                />
              </a>
            </Link>
          </div>
          <div className="flex items-center justify-center flex-1 md:items-stretch md:justify-end">
            <div className="hidden md:block md:ml-2">
              <div className="flex">
                <Link href="about">
                  <a className="px-4 py-2 text-sm font-bold leading-5 text-orange-800 transition duration-150 ease-in-out rounded-full hover:text-white hover:bg-orange-800 focus:outline-none focus:text-white focus:bg-orange-800">
                    ABOUT US
                  </a>
                </Link>

                <Link href="our-work">
                  <a className="px-4 py-2 ml-4 text-sm font-bold leading-5 text-orange-800 transition duration-150 ease-in-out rounded-full hover:text-white hover:bg-orange-800 focus:outline-none focus:text-white focus:bg-orange-800">
                    {" "}
                    OUR WORK
                  </a>
                </Link>

                <Link href="/#contact-us">
                  <a className="px-4 py-2 ml-4 text-sm font-bold leading-5 text-orange-800 transition duration-150 ease-in-out bg-white rounded-full shadow-lg focus:outline-none hover:opacity-75 focus:bg-opacity-75">
                    {" "}
                    CONTACT US
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={isOpen ? "block" : "hidden"}>
        <div className="px-2 pt-2 pb-3">
          <Link href="about">
            <a className="block px-4 py-2 mt-1 text-base font-bold text-orange-800 transition duration-150 ease-in-out rounded-lg hover:text-white hover:bg-orange-800 focus:outline-none focus:text-white focus:bg-orange-800">
              ABOUT US
            </a>
          </Link>

          <Link href="our-work">
            <a className="block px-4 py-2 mt-1 text-base font-bold text-orange-800 transition duration-150 ease-in-out rounded-lg hover:text-white hover:bg-orange-800 focus:outline-none focus:text-white focus:bg-orange-800">
              {" "}
              OUR WORK{" "}
            </a>
          </Link>

          <Link href="/#contact-us">
            <a className="block px-4 py-2 mt-1 text-base font-bold text-orange-800 transition duration-150 ease-in-out bg-white rounded-lg hover:opacity-75 focus:outline-none focus:opacity-75">
              {" "}
              CONTACT US
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  isIndex: false,
};

export default Navbar;
