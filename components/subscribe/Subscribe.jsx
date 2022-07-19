import React from "react";

const Subscribe = () => {
  return (
    <div className="w-screen px-10 flex flex-col items-center justify-center right-0 bg-gradient-to-r from-sky-500 to-green-500 relative h-[250px] md:h-[400px]">
      <div className="flex items-center flex-col">
        <h1 className="text-xl md:text-5xl w-3/4 md:w-2/4 text-center py-4 font-black text-white">
          Subscribe now to our newsletter and be in the loop.
        </h1>
        <div className="">
          <button className="border-white text-sm md:text-2xl font-medium border text-white hover:border-none hover:bg-[#000A37]  italic px-6 md:px-10 py-2 rounded-3xl">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
