import React from "react";
import Topic from "../components/Topic";

interface Props {
  title: string;
  description: string;
  textCentered: boolean;
}

const ContactForm = () => {
  return (
    <>
      <div className="mt-10 text-black sm:mt-0">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-xl">
                <div className="px-4 py-4 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first_name"
                        className="block font-medium text-md"
                      >
                        Your name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        className="w-full px-3 py-2 leading-tight border rounded appearance-none focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last_name"
                        className="block font-medium text-md"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        className="w-full px-3 py-2 leading-tight border rounded appearance-none focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="email_address"
                        className="block font-medium text-md"
                      >
                        Message
                      </label>
                      <textarea
                        type="text"
                        name="email_address"
                        id="email_address"
                        autoComplete="email"
                        className="w-full px-3 py-2 leading-tight bg-gray-300 border rounded appearance-none focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </div>
                  <div className="pt-6 text-center bg-white sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center px-4 py-2 font-medium text-white bg-orange-500 border border-transparent rounded-md shadow-sm text-md hover:bg-opacity-75 "
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
