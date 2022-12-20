import React from "react";
import HeroTexts from "../lib/hero";
import DesktopBg from "../images/image-web-3-desktop.jpg";
import MobileBg from "../images/image-web-3-mobile.jpg";
import SideCard from "./SideCard";

const Hero = () => {
  return (
    <div>
      <div className="hero p-4">
        <div className="d-image hidden md:flex">
          <img src={DesktopBg} alt="desktop web3 image" />
        </div>
        <div className="mobile-image flex md:hidden">
          <img src={MobileBg} alt="mobile web3 image" />
        </div>
        <div className="contents   md:flex ">
          <div className="bigTexts mt-8">
            {HeroTexts.map((item, index) => (
              <h1 className="text-5xl  font-extrabold" key={index}>
                {item.largeText}
              </h1>
            ))}
          </div>
          <div className="smallTexts flex flex-col gap-4    ">
            {HeroTexts.map((item, index) => (
              <>
                <p className="text-header-text font-bold">{item.smallText}</p>
              </>
            ))}
            <button className="px-6  p-3 text-btnText uppercase text-sm w-fit bg-btn">
              read more
            </button>
          </div>
        </div>
        <SideCard />
      </div>
    </div>
  );
};

export default Hero;
