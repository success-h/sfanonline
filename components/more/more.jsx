import React from "react";
import Image from "next/image";

const More = () => {
  return (
    <div className="py-10 max-w-screen-lg">
      <div className="md:flex-row gap-5 px-10 flex flex-col items-center justify-between">
        <div className="flex flex-col justify-between md:w-[600px]">
          <div className="font-black leading-tight mt-4 mb-5 text-[#000A37] text-center md:text-right text-2xl md:text-4xl">
            Build a Global Brand Not Just another Knock-off
          </div>
          <p className="text-xs text-center md:text-right font-medium text-blue-500 leading-tight">
            Get all the help you need to build your company and have a
            fulfilling career. Building a business is hard work, lets help you
            to make things easier & faster.
          </p>
          <div className="flex items-center justify-center md:justify-end">
            <button className="italic px-3 text-xs mt-4 text-black hover:text-white py-2 bg-emerald-400 hover:bg-emerald-600 rounded-2xl">
              Learn more
            </button>
          </div>
        </div>
        <div className="relative h-[300px] md:mx-10 flex w-[300px]">
          <Image
            src="/more.png"
            alt="/more"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col justify-between md:w-[600px]">
          <div className="font-black leading-tight mt-4 mb-5 text-[#000A37] text-center md:text-left text-2xl md:text-4xl">
            Build a Global Brand Not Just another Knock-off
          </div>
          <p className="text-xs text-center md:text-left font-medium text-blue-500 leading-tight">
            Get all the help you need to build your company and have a
            fulfilling career. Building a business is hard work, lets help you
            to make things easier & faster.
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <button className="italic px-3 text-xs mt-4 text-black hover:text-white py-2 bg-emerald-400 hover:bg-emerald-600 rounded-2xl">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
