import React from "react";
import Image from "next/image";

const News = () => {
  return (
    <div className="w-screen md:mb-10 right-0 bg-white relative h-[200px] md:h-[400px] px-4">
      <div>
        <h1 className="text-center text-[#000A37]  py-2 text-2xl font-extrabold md:text-5xl mt-5 md:mt-20">
          SFAN in the News
        </h1>
        <div className="flex gap-8 justify-between md:mx-20 md:mt-10 sm:mt-5">
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

export default News;
