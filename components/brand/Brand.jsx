import React from "react";
import { BrandData } from "./BrandData";

const Brand = () => {
  return (
    <div className="md:h-[1000px] md:bg-center px-4 md:px-0 flex-col bg-top justify-center flex items-center bg-no-repeat md:rounded-2xl bg-[url('/brand.svg')]  w-full">
      <div className="mt-20 mx-auto md:w-2/5">
        <h1 className="text-2xl hover:animate-pulse  md:text-5xl font-black my-4 text-white text-center ">
          The City&#39;s Finest Brand<span className="text-green-500">.</span>
        </h1>
        <p className="text-green-500 text-xs font-mediun text-center ">
          We pride ourselves on our unique taste and sensibility, which allows
          us to continually create magic moments for our clients and deliver our
          services to high standards.
        </p>
      </div>
      <div className="md:self-start md:ml-52 mb-10 overflow-hidden self-center px-1">
        {BrandData.map((brand) => (
          <div key={brand.id} className="mt-5  max-w-sm mx-auto  flex flex-col">
            <h1 className="text-xl hover:animate-pulse hover:text-sky-500 md:text-4xl font-black my-2 text-sky-400 text-start ">
              {brand.name}
            </h1>
            <p className="text-white hover:animate-pulse text-sm md:font-semibold text-start ">
              {brand.description}
            </p>
            <button className="outline-none hover:text-white border-none text-xs mt-2 self-end text-green-400">
              {brand.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
