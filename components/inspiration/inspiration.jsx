import React from "react";

const Inspiration = () => {
  return (
    <div className="md:h-[400px] h-[300px] bg-center px-4 md:px-0	flex items-center justify-center bg-fixed bg-no-repeat bg-contain   bg-[url('/globe.gif')] md:bg-[url('/inspiration.svg')]  w-full">
      <div className="font-black text-2xl sm:text-2xl md:text-5xl text-center md:w-3/5 bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400 drop-shadow-xl text-transparent ">
        We believe that young people are smart and if given the skills and
        opportunity to engage the real world, magic will happen.
      </div>
    </div>
  );
};

export default Inspiration;
