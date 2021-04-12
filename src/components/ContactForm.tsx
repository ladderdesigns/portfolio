import React from "react";

interface Props {
  title: string;
  description: string;
  textCentered: boolean;
}

const ContactForm = () => {
  return (
    <>
      <form className="w-full max-w-3xl p-8 text-base bg-white md:max-w-2xl rounded-xl">
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
              First Name
            </label>
            <input
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-red-500 rounded appearance-none focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
            {/* <p className="text-xs italic text-red-500">
              Please fill out this field.
            </p> */}
          </div>
          <div className="w-full px-3 md:w-1/2">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
              Last Name
            </label>
            <input
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
              E-mail
            </label>
            <input
              className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              placeholder="janedoe@mail.com"
              type="email"
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
              Message
            </label>
            <textarea
              className="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none resize-none no-resize focus:outline-none focus:bg-white focus:border-gray-500"
              id="message"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <button
            className="px-4 py-2 font-bold text-white bg-orange-500 rounded shadow hover:opacity-75 focus:shadow-outline focus:outline-none"
            type="button"
          >
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
