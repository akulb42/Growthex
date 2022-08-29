const Features = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center pt-8">
      <h1 className="text-5xl font-bold">
        More than just <span className="text-green-500">Trading stocks.</span>
      </h1>
      <p className=" text-xl pt-10">
        With new and innovative features, Growthex aims to stand out among all
        other platforms.
      </p>
      <div className="flex flex-col items-center justify-center">
        <div className="lg:h-40 md:w-96 md:h-40 lg:w-96 h-84 w-72 bg-gray-100  mb-2 mt-4 rounded-lg hover:shadow-xl">
          <h1 className="p-2 text-3xl font-bold">Startup Hunt</h1>
          <p className="mx-2 pt-4">
            Introducing Startup Hunt: A feature that allows you to find startups
            that require investing right from the dashboard. Use this to
            discover startups that you think are worth investing money in, and
            fund them via Growthex.
          </p>
        </div>
        <div className="lg:h-40 md:w-96 md:h-40 lg:w-96 h-84 w-72 bg-gray-100  m-2 rounded-lg hover:shadow-xl">
          <h1 className="p-2 text-3xl font-bold">Themes and Presets</h1>
          <p className="mx-2 pt-4">
            Themes and Presets give you full control over the Growthex
            dashboard. From graphs to color themes, you have the freedom to
            customise every element of the Growthex dashboard. Use presets to
            save different preferred display settings.
          </p>
        </div>
        <div className="lg:h-40 md:w-96 md:h-40 lg:w-96 h-84 w-72 bg-gray-100   m-2 rounded-lg hover:shadow-xl">
          <h1 className="p-2 text-3xl font-bold">Growthex Forum</h1>
          <p className="mx-2 pt-4">
            Be a part of the community. Find suggestions for what stocks to
            buy/sell, talk with follow investors and recieve latest updates of
            the finance world with the Growthex Forum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
