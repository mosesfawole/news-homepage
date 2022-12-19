import React from "react";
import HeroTexts from "../lib/hero";
const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="d-image"></div>
        <div className="mobile-image"></div>
        <div className="contents">
          <div className="bigTexts">
            {HeroTexts.map((item, index) => (
              <h1 key={index}>{item.largeText}</h1>
            ))}
            <h1></h1>
          </div>
          <div className="smallTexts">
            {HeroTexts.map((item, index) => (
              <div key={index}>
                <p>{item.smallText}</p>
                <button>{item.buttonText}</button>
              </div>
            ))}
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
