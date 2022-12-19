import React from "react";
import Logo from "../images/logo.svg";
import Hamburger from "../images/icon-menu.svg";
import navs from "../lib/navbar";
const Header = () => {
  return (
    <div>
      {/* mobile menu */}
      <div className="mobile flex justify-between p-4 items-center   md:hidden">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="menu">
          <img src={Hamburger} alt="hamburger" />
        </div>
        <div className="menu-content hidden">
          <ul>
            {navs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* desktop menu */}
      <div className="desktop hidden md:flex">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="menu-lists">
          <ul>
            {navs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          ;
        </div>
      </div>
    </div>
  );
};

export default Header;
