const Testimonials = () => {
  return (
    <div>
      <section className="w-screen body-font">
        <h1 className="pt-8 text-5xl font-bold text-center">
          What our <span className="text-green-500">testers</span> say
        </h1>
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <p>
                  I've learned a lot about stocks and financial market with this
                  platform. This is an easy way to dive into investing. Would
                  recommend for new and experienced investers alike.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                <h2 className=" font-medium title-font tracking-wider text-sm">
                  J. JAMESON
                </h2>
                <h2 className=" font-medium title-font tracking-wider text-sm">
                  ⭐⭐⭐⭐⭐
                </h2>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <p>
                  The setup was amazingly easy. It took me less than 5 minutes
                  to set up and start trading. The interface was easy to
                  customise and didn't take me long to tune it to my personal
                  needs.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                <h2 className=" font-medium title-font tracking-wider text-sm">
                  S. SMITH
                </h2>
                <h2 className=" font-medium title-font tracking-wider text-sm">
                  ⭐⭐⭐⭐
                </h2>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <p>
                  Growthex's customer support is remarkable. We got fast
                  responses, their team sent us a lot of useful resources and it
                  was awesome to have much required support under 24 hours by a
                  human.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                <h2 className=" font-medium title-font tracking-wider text-sm">
                  H. HENRY
                </h2>
                <h2 className=" font-medium title-font tracking-wider text-sm">
                  ⭐⭐⭐⭐⭐
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
