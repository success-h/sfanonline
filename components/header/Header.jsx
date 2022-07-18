import Image from "next/image";
import HeadData from "./HeaderData";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex py-3 z-20 fixed top-0 right-0 left-0 bg-[#000A37] justify-between items-center px-7">
      <div className="">
        <Image alt="Logo" src="/logo.png" height={60} width={170} />
      </div>
      <div className="gap-5 flex flex-col lg:flex-row font-semibold text-white">
        {HeadData.map((item) => (
          <div
            className="hidden lg:block hover:bg-blue-900
            hover:rounded-xl transition-all duration-300 ease-linear
          cursor-pointer hover:shadow-lg p-3"
            key={item.id}
          >
            {item.title.toUpperCase()}
          </div>
        ))}
      </div>
      <div className="absolute px-7 transition-all duration-300 ease-linear font-semibold text-white left-0 right-0 top-0 mt-20 bg-[#000A37] ">
        {HeadData.map((item) => (
          <div
            className={`${
              isOpen
                ? "lg:hidden text-sm p-4 hover:bg-blue-900 hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer hover:shadow-lg m-3"
                : "hidden"
            }`}
            key={item.id}
          >
            {item.title.toUpperCase()}
          </div>
        ))}
      </div>
      {isOpen ? (
        <IoClose
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white text-3xl cursor-pointer"
        />
      ) : (
        <HiMenuAlt4
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white text-3xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Header;
