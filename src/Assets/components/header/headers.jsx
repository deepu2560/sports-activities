import React, { useEffect, useState } from "react";
import "./headers.css";

export const Topheader = () => {
  const [focused, setFocused] = useState("cycling");

  useEffect(() => {
    if (focused != "none") {
      [
        "feature",
        "armoury",
        "lake-sea",
        "aquatics",
        "cycling",
        "equestrian",
        "extreme",
        "golf",
        "gymnastics",
      ].forEach((elem) => {
        document.getElementById(elem).style.backgroundColor = "#343a40";
        document.getElementById(elem).style.boxShadow =
          "rgba(0, 0, 0, 0.16) 0px 1px 4px";
      });
      document.getElementById(focused).style.backgroundColor = "#adb5bd";
      document.getElementById(focused).style.boxShadow =
        "rgba(0, 0, 0, 0.35) 0px 5px 15px";
    }
  }, [focused]);
  return (
    <div className="header-main">
      <div onClick={() => setFocused(() => "feature")} id="feature">
        <div className="features">
          <i className="fa-solid fa-star"></i>
        </div>
        <h4>Featured</h4>
      </div>
      <div onClick={() => setFocused(() => "armoury")} id="armoury">
        <div className="armoury">
          <i className="fa-solid fa-bullseye"></i>
        </div>
        <h4>Armoury</h4>
      </div>
      <div onClick={() => setFocused(() => "aquatics")} id="aquatics">
        <div className="aquatics">
          <i className="fa-solid fa-person-swimming"></i>
        </div>
        <h4>Aquatics</h4>
      </div>
      <div onClick={() => setFocused(() => "cycling")} id="cycling">
        <div className="cycling">
          <i className="fa-solid fa-person-biking"></i>
        </div>
        <h4>Cycling</h4>
      </div>
      <div onClick={() => setFocused(() => "equestrian")} id="equestrian">
        <div className="equestrian">
          <i className="fa-solid fa-horse"></i>
        </div>
        <h4>Equestrian</h4>
      </div>
      <div onClick={() => setFocused(() => "extreme")} id="extreme">
        <div className="extreme">
          <i className="fa-solid fa-person-snowboarding"></i>
        </div>
        <h4>Extreme</h4>
      </div>
      <div onClick={() => setFocused(() => "golf")} id="golf">
        <div className="golf">
          <i className="fa-solid fa-golf-ball-tee"></i>
        </div>
        <h4>Golf</h4>
      </div>
      <div onClick={() => setFocused(() => "gymnastics")} id="gymnastics">
        <div id="gymnastics">
          <img
            src="https://www.svgrepo.com/show/172691/gymnast.svg"
            width="30px"
          />
        </div>
        <h4>Gymnastics</h4>
      </div>
      <div onClick={() => setFocused(() => "lake-sea")} id="lake-sea">
        <div className="lake-seas">
          <i className="fa-solid fa-sailboat"></i>
        </div>
        <h4>Lake & seas</h4>
      </div>
    </div>
  );
};
