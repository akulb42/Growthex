const Hero = () => {
  return (
    <div className="w-screen lg:h-96 md:h-96 h-72 bg-gradient-to-r from-green-400 via-green-500 to-green-400">
      <img src="./logo.svg" className="w-72 pt-4  pl-6" alt="logo"></img>
      <div className="flex flex-col justify-center items-center text-center pt-12 text-white">
        <h1 className="text-5xl font-extrabold">Trading Stocks, Simplified.</h1>
        <h2 className="pt-8 text-lg font-bold invisible md:visible lg:visible">
          Growthex is a new and coming platform that makes stock trading
          accessible to everyone.
          <br />
          With over 250 assets available, a fully customisable interface, and
          world className customer support, <br /> trading stocks has never been
          easier.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
