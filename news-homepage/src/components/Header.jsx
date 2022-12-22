import React, { useState } from "react";
import Logo from "../images/logo.svg";
import Hamburger from "../images/icon-menu.svg";
import CloseIcon from "../images/icon-menu-close.svg";
import navs from "../lib/navbar";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  const openMenu = () => {
    setIsMenu(true);
  };

  const closeMenu = () => {
    setIsMenu(false);
  };

  return (
    <div>
      {/* mobile menu */}
      <div className="mobile flex justify-between p-4 items-center   md:hidden">
        <div className="logo">
          <img className="w-full h-full" src={Logo} alt="logo" />
        </div>
        <div className="menu-icon" onClick={openMenu}>
          <img className="w-full h-full" src={Hamburger} alt="hamburger" />
        </div>
        <div className={isMenu ? "flex" : "hidden"}>
          <div className="overlay fixed right-0 top-0 w-full z-30 h-full bg-[#00000036]"></div>
          <div className="bg-white flex flex-col gap-20 fixed right-0 top-0 p-6 z-30 w-[70%] h-full">
            <span className="flex justify-end" onClick={closeMenu}>
              <img
                className="w-full h-full"
                src={CloseIcon}
                alt="clos menu icon"
              />
            </span>
            <ul className="flex flex-col gap-4">
              {navs.map((item, index) => (
                <li
                  className="cursor-pointer  hover:text-btn   text-2xl"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* desktop menu */}
      <div className="desktop hidden md:flex p-10 justify-between">
        <div className="logo">
          <img className="w-full h-full" src={Logo} alt="logo" />
        </div>
        <div className="menu-lists">
          <ul className="flex  font-bold gap-4 text-header-text">
            {navs.map((item, index) => (
              <li
                className="cursor-pointer hover:opacity-50   hover:text-btn"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
