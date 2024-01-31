import React, { useState } from "react";

import { LuBookmark } from "react-icons/lu";
import { data } from "./SliderData";

import Slider from "./Slider";
import "./Operations.css";

export default function Operations() {
  const [showAll, setShowAll] = useState(false);

  const hoverOverHandler = (show, e) => {
    const wrapper =
      e.target.closest(".slider-item") || e.target.closest(".section-item");
    if (wrapper && show) {
      wrapper.querySelector(".bookmark").classList.remove("bookmark-close");
    } else if (wrapper && !show) {
      wrapper.querySelector(".bookmark").classList.add("bookmark-close");
    }
  };
  const buttonText = showAll ? "Slides" : "All >";
  return (
    <section className="operation-section">
      <div className="operation-header">
        <h2 className="section-header">Convert From PDF</h2>
        <button onClick={() => setShowAll((prev) => !prev)}>
          {buttonText}
        </button>
      </div>
      {!showAll && <Slider hoverOverHandler={hoverOverHandler} />}

      {showAll && (
        <div
          className="operation-items"
          onMouseOver={(e) => {
            hoverOverHandler(true, e);
          }}
          onMouseOut={(e) => {
            hoverOverHandler(false, e);
          }}
        >
          {data.map((item, index) => (
            <div className="section-item" key={index}>
              <LuBookmark className="bookmark bookmark-close" />
              <a href="https://www.hipdf.com/all-tools">
                <div className="section-logo">{item.logo}</div>
                <h3 className="section-title">{item.title}</h3>
                <p className="section-description">{item.content}</p>
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
