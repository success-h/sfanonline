import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mt-20 relative w-full flex flex-col items-center justify-center mx-auto">
      <div className="h-[700px] bg-center	relative bg-fixed bg-no-repeat bg-cover  md:bg-[url('/home.png')]  w-full">
        <Image src="/globe.gif" objectFit="contain" alt="globe" layout="fill" />
      </div>
      <div className="absolute text-white mx-10 left-0 right-0 md:top-52 z-10">
        <h1 className="text-start w-[200px] md:w-[500px] leading-tight font-black text-[40px] md:text-7xl">
          Build a Life, Not a Resume
        </h1>
        <p className="] text-[16px] md:text-sm mt-4  md:w-[500px] ">
          SFAN is unlocking the potential of Africa young geniuses by helping
          them turn their passion into businesses and fulfilling careers.
        </p>
      </div>
    </div>
  );
};

export default Hero;
