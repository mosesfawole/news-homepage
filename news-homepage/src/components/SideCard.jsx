import React from "react";
import sideCardTexts from "../lib/sideCard";
const SideCard = () => {
  return (
    <div className="mt-8 md:mt-0 md:p-0 ">
      <div className="box bg-sideCard p-4 ">
        <div className="title">
          <h1 className=" text-title text-2xl font-bold">New</h1>
        </div>
        <ul className="">
          {sideCardTexts.map((item, index) => (
            <div key={index} className="mt-4 flex flex-col gap-2  ">
              <li className="hover:text-title cursor-pointer text-btnText text-base font-bold">
                {item.title}
              </li>
              <p className="text-header-text text-sm mb-4">{item.text}</p>
              {item.line ? <hr /> : ""}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideCard;
