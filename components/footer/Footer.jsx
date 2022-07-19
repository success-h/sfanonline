import React from "react";
import Image from "next/image";
import { GoLocation } from "react-icons/go";
import { BsTelephoneX } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="w-screen p-2 md:p-10 flex flex-col overflow-x-hidden">
      <div className="py-4 my-4 flex flex-col md:grid grid-cols-2 gap-4">
        <div className="px-2 mb-5 text-xs md:py-7 md:px-10">
          <div className="flex md:flex-col items-center md:items-start justify-center md:justify-start flex-row">
            <div className="relative my-4 mx-3 rounded-full md:h-[70px] md:w-[150px] hover:bg-slate-700 h-[50px] w-[70px] bg-slate-900">
              <Image
                src="/logo.png"
                alt="logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="w-3/5 mx-2 leading-tight text-gray-600">
              SFAN is unlocking the potential of Africa&apos;s young geniuses by
              helping them turn their passion into businesses and fulfilling
              careers.
            </p>
          </div>
          <div className="md:px-2 mx-3 md:mx-0 mt-4 text-xs">
            <div className="flex text-slate-900 font-medium flex-col gap-3">
              <div className="flex items-center">
                <GoLocation className="mr-3 text-xl md:text-lg" />
                <p className="mr-3 text-sm">
                  King Solomon&#39;s Height, 26, Mango St, Accra
                </p>
              </div>
              <div className="flex items-center">
                <BsTelephoneX className="mr-3 text-xl md:text-lg" />
                <p className="mr-3 text-sm">030 280 2935</p>
              </div>
              <div className="flex items-center">
                <AiOutlineMail className="mr-3 text-xl md:text-lg" />
                <p className="mr-3 text-sm">info@sfanonline.org</p>
              </div>
            </div>
            <div className="flex mt-4">
              <AiFillTwitterCircle className="mr-3  md:text-xl text-lg" />
              <RiFacebookCircleFill className="mr-3 md:text-xl text-lg" />
              <AiFillInstagram className="mr-3 md:text-xl text-lg" />
              <AiFillYoutube className="mr-3 md:text-xl text-lg" />
              <AiFillLinkedin className="mr-3 md:text-xl text-lg" />
            </div>
          </div>
        </div>
        <div className="flex md:mt-10 justify-around text-xs md:flex-row md:py-7 md:px-2">
          <div className="gap-1 flex flex-col">
            <h2 className="text-lg font-bold text-[#000A37]">Our Platform</h2>
            <p>Venture Studio</p>
            <p>ReadyforWork</p>
            <p>Resume Service</p>
            <p>Events</p>
            <p>Media</p>
          </div>
          <div className="md:gap-1 flex flex-col">
            <h2 className="text-lg font-bold text-[#000A37]">Support</h2>
            <p>Help Center</p>
            <p>Privacy</p>
          </div>
          <div className="gap-1 flex flex-col">
            <h2 className="text-lg font-bold text-[#000A37]">About us</h2>
            <p>Careers</p>
            <p>Our Team</p>
            <p>#StarsWeAre</p>
            <p>Media</p>
            <p>Press</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
