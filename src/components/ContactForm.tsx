import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="w-full sm:max-w-xl md:max-w-2xl">
        <form
          className="p-8 text-base bg-white rounded-xl"
          name="contact"
          method="POST"
          netlify-honeypot="bot-field"
          action="?formSubmit=success"
          data-netlify="true"
        >
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor="firstname"
              >
                First Name
              </label>
              <input
                className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none md:mb-3 focus:outline-none focus:bg-white focus:border-gray-300"
                id="firstname"
                type="text"
                placeholder="Jane"
                name="firstname"
              />
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor="lastname"
              >
                Last Name
              </label>
              <input
                className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-300"
                id="lastname"
                type="text"
                placeholder="Doe"
                name="lastname"
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-300"
                id="youremail"
                name="email"
                placeholder="janedoe@mail.com"
                type="email"
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="block w-full h-48 px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none resize-none no-resize focus:outline-none focus:bg-white focus:border-gray-300"
                id="message"
                name="message"
              ></textarea>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            {/* TODO: Make the button look better and rounded like the landing */}
            <button
              type="submit"
              className="px-4 py-2 text-sm font-bold leading-5 text-center text-white transition duration-150 ease-in-out bg-orange-500 rounded-full shadow-lg focus:outline-none hover:opacity-75 focus:opacity-75"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
