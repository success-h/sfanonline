import React from "react";
import Image from "next/image";

const Partner = () => {
  return (
    <div className="w-screen right-0 bg-white relative h-[250px] md:h-[400px] px-4">
      <div className="p-4 text-xs md:px-10 md:absolute mx-auto -mt-40 md:-mt-20 right-0 mb-20 rounded-lg md:py-5 sm:w-[400px] md:mr-14 bg-gradient-to-r from-green-400 to-blue-500 ">
        <div className="drop-shadow font-black italic leading-normal">
          Are you looking for a job? Apply for ReadyforWork Digital Career
          Accelerator and launch your career in a high-growth company
        </div>
        <button className="text-black text-xs md:text-sm block font-black hover:border-blue-800 hover:text-blue-800 italic border-2 border-black rounded-3xl mt-4 px-4 py-2">
          READ MORE
        </button>
      </div>
      <div className="md:grid absolute hidden -ml-36 -mt-36 left-0">
        <Image
          src="/hero.png"
          className=""
          alt="hero"
          height={300}
          width={300}
        />
      </div>
      <div>
        <h1 className="text-center text-2xl font-extrabold md:text-5xl mt-5 md:mt-40">
          They believe in our vision
        </h1>
        <div className="flex gap-8 justify-between md:mx-20 mt-10 sm:mt-20">
          <Image
            objectFit="contain"
            src="/ashoka.png"
            height={70}
            width={80}
            alt="slides"
          />
          <Image
            objectFit="contain"
            src="/british.png"
            height={70}
            width={120}
            alt="slides"
          />
          <Image
            objectFit="contain"
            src="/ecobank.png"
            height={70}
            width={100}
            alt="slides"
          />
          <Image
            objectFit="contain"
            src="/village.png"
            height={100}
            width={90}
            alt="slides"
          />
          <Image
            src="/founders.png"
            height={10}
            objectFit="contain"
            width={100}
            alt="slides"
          />
        </div>
      </div>
    </div>
  );
};

export default Partner;
