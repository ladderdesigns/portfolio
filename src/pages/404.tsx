import Meta from "@/components/Meta";

export default function NotFound() {
  return (
    <>
      <Meta title="Page not found | Ladder Designs" path="/404" noIndex />

      <section className="w-full py-24 bg-champagne" id="landing">
        <div className="grid max-w-5xl grid-cols-2 px-4 mx-auto mt-4 sm:px-6 place-items-center">
          <div className="flex items-center justify-center text-orange-800 md:justify-end">
            <div className="w-full p-4 my-auto">
              <h1 className="pb-2 text-5xl font-bold leading-tight sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
                Oops!
              </h1>
              <p className="pb-2 font-semibold leading-tight text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                We can’t seem to find the page you’re looking for.
              </p>
              <p className="pb-2 text-sm italic font-normal leading-tight md:text-md lg:text-lg xl:text-xl">
                Error code: 404
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
