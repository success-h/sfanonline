import React from "react";
import Image from "next/image";
const Intro = () => {
  return (
    <div className="max-w-6xl md:mt-32  mt-7 overflow-hidden  flex flex-col justify-center bg-white">
      <h1 className="mx-auto mb-10 text-2xl font-black text-[#000A37] md:text-5xl">
        Introducing
      </h1>
      <Image
        className=""
        alt="video"
        height={500}
        width={1000}
        src="/video.png"
        objectFit="cover"
      />
    </div>
  );
};

export default Intro;
