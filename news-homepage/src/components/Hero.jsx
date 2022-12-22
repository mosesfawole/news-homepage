import React from "react";
import HeroTexts from "../lib/hero";
import DesktopBg from "../images/image-web-3-desktop.jpg";
import MobileBg from "../images/image-web-3-mobile.jpg";
import SideCard from "./SideCard";

const Hero = () => {
  return (
    <div className="md:flex p-4 md:p-10 gap-4">
      <div className="hero">
        <div className="d-image hidden md:flex">
          <img
            className="w-full h-full"
            src={DesktopBg}
            alt="desktop web3 image"
          />
        </div>
        <div className="mobile-image flex justify-center items-center  md:hidden">
          <img
            className="w-full h-full"
            src={MobileBg}
            alt="mobile web3 image"
          />
        </div>
        <div className="md:flex gap-4 mt-4 justify-between ">
          <div className="bigTexts ">
            {HeroTexts.map((item, index) => (
              <h1
                className="text-5xl leading-[50px]  font-extrabold"
                key={index}
              >
                {item.largeText}
              </h1>
            ))}
          </div>
          <div className="smallTexts md:w-1/2 flex flex-col gap-4 justify-center    ">
            {HeroTexts.map((item, index) => (
              <div key={index}>
                <p className="text-header-text  font-bold">{item.smallText}</p>
              </div>
            ))}
            <button className="p-3  hover:bg-black hover:text-white text-btnText w-fit bg-btn">
              <p className=" tracking-[2px] font-inter   uppercase text-xs">
                {" "}
                read more
              </p>
            </button>
          </div>
        </div>
      </div>
      <SideCard />
    </div>
  );
};

export default Hero;
