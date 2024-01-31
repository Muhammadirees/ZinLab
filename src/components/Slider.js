import React, { useState } from "react";

import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { LuBookmark } from "react-icons/lu";

import { data } from "./SliderData";
import "./Operations.css";

const Slider = (props) => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) => {
      if (prevIndex < 5) {
        return (prevIndex + 1) % data.length;
      }
      return prevIndex;
    });
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => {
      if (prevIndex > 0) {
        return (prevIndex - 1 + data.length) % data.length;
      }

      return prevIndex;
    });
  };

  return (
    <div className="slider-container">
      <button onClick={prevSlide} id="prev-btn">
        <GrLinkPrevious />
      </button>
      <div
        className="slider-wrapper"
        onMouseOver={(e) => {
          props.hoverOverHandler(true, e);
        }}
        onMouseOut={(e) => {
          props.hoverOverHandler(false, e);
        }}
      >
        {data.slice(startIndex, startIndex + 5).map((item, index) => (
          <div key={index} className="slider-item">
            <LuBookmark className="bookmark bookmark-close" />
            <a href="https://www.hipdf.com/all-tools">
              <div className="section-logo">{item.logo}</div>
              <h3 className="section-title">{item.title}</h3>
              <p className="section-description">{item.content}</p>
            </a>
          </div>
        ))}
      </div>
      <button onClick={nextSlide} id="next-btn">
        <GrLinkNext />
      </button>
    </div>
  );
};

export default Slider;
