import React from "react";
import news from "../lib/news";
const NewsCard = () => {
  return (
    <div>
      <div className="md:p-10 p-4">
        <div className="grid gap-10 md:flex justify-center items-center">
          {news.map((item, index) => (
            <div className="flex  gap-10" key={index}>
              <span className="flex sm:basis-40  ">
                <img src={item.image} alt={item.id} />
              </span>
              <span className="flex sm:basis-60 flex-col gap-4 right">
                <p className="text-header-text text-4xl font-bold">{item.id}</p>
                <h1 className="font-extrabold text-lg">{item.title}</h1>
                <p className="text-header-text ">{item.text}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
