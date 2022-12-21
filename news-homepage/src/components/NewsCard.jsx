import React from "react";
import news from "../lib/news";
const NewsCard = () => {
  return (
    <div>
      <div className="">
        <ul>
          {news.map((item, index) => (
            <div key={index}>
              <li>
                <div className="left">
                  <img src={item.image} alt={item.id} />
                </div>
                <div className="right">
                  <p>{item.id}</p>
                  <h1>{item.title}</h1>
                  <p>{item.text}</p>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsCard;
