import React, { useState } from "react";

import Link from "next/link";

const logo: String = "/logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <nav className="font-mono bg-transparent ">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={toggle}
              className="inline-flex items-center justify-center p-2 text-base transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-green-700 focus:outline-none focus:bg-green-700 focus:text-white"
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
          <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
            <div className="p-1 text-3xl font-bold text-gray-400 duration-150 ease-in-out rounded-full focus:outline-none focus:text-white ">
              <Link href="/">LADDER DESIGNS</Link>
            </div>
          </div>
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-end">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
                <div className="px-4 py-2 ml-4 text-sm text-base font-medium leading-5 transition duration-150 ease-in-out rounded-lg hover:text-white hover:bg-green-700 focus:outline-none focus:text-white focus:bg-green-700">
                  <Link href="about">ABOUT US</Link>
                </div>
                <div className="px-4 py-2 ml-4 text-sm text-base font-medium leading-5 transition duration-150 ease-in-out rounded-lg hover:text-white hover:bg-green-700 focus:outline-none focus:text-white focus:bg-green-700">
                  <Link href="ourwork">OUR WORK</Link>
                </div>

                <div className="px-4 py-2 ml-4 text-sm text-base font-medium leading-5 transition duration-150 ease-in-out rounded-lg hover:text-white hover:bg-green-700 focus:outline-none focus:text-white focus:bg-green-700">
                  {" "}
                  <Link href="contact">CONTACT US</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={isOpen ? "block" : "hidden"}>
        <div className="px-2 pt-2 pb-3">
          <div className="block px-4 py-2 mt-1 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-lg hover:text-white hover:bg-green-700 focus:outline-none focus:text-white focus:bg-green-700">
            <Link href="about">ABOUT US</Link>
          </div>
          <div className="block px-4 py-2 mt-1 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-lg hover:text-white hover:bg-green-700 focus:outline-none focus:text-white focus:bg-green-700">
            {" "}
            <Link href="blog">OUR WORK</Link>
          </div>
          <div className="block px-4 py-2 mt-1 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-lg hover:text-white hover:bg-green-700 focus:outline-none focus:text-white focus:bg-green-700">
            <Link href="donate">CONTACT US</Link>
          </div>
          <div className="block px-4 py-2 mt-1 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-lg hover:text-white hover:bg-green-700 focus:outline-none focus:text-white focus:bg-green-700">
            <Link href="addherejacob">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
