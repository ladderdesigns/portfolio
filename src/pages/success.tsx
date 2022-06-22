import Head from "next/head";

export default function Success() {
  return (
    <>
      <Head>
        <title>Success | Ladder Designs</title>
      </Head>

      <section className="w-full py-24 bg-champagne" id="landing">
        <div className="grid max-w-5xl grid-cols-2 px-4 mx-auto mt-4 sm:px-6 place-items-center">
          <div className="flex items-center justify-center text-orange-800 md:justify-end">
            <div className="w-full p-4 my-auto " id="landing-block">
              <h2 className="pb-2 text-5xl font-bold leading-tight sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
                Success!
              </h2>
              <h3 className="pb-2 font-semibold leading-tight text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                We have recieved your submission and we will reach out soon.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
