import React from "react";
import "./headers.css";

export const Topheader = () => {
  return (
    <div className="header-main">
      <div className="icons-div">
        <div className="features">
          <i className="fa-solid fa-star"></i>
        </div>
        <h4>Featured</h4>
      </div>
      <div className="icons-div">
        <div className="armoury">
          <i class="fa-solid fa-bullseye"></i>
        </div>
        <h4>Armoury</h4>
      </div>
      <div className="icons-div">
        <div className="aquatics">
          <i class="fa-solid fa-person-swimming"></i>
        </div>
        <h4>Aquatics</h4>
      </div>
      <div className="icons-div">
        <div className="cycling">
          <i class="fa-solid fa-person-biking"></i>
        </div>
        <h4>Cycling</h4>
      </div>
      <div className="icons-div">
        <div className="equestrian">
          <i class="fa-solid fa-horse"></i>
        </div>
        <h4>Equestrian</h4>
      </div>
      <div className="icons-div">
        <div className="extreme">
          <i class="fa-solid fa-person-snowboarding"></i>
        </div>
        <h4>Extreme</h4>
      </div>
      <div className="icons-div">
        <div className="golf">
          <i class="fa-solid fa-golf-ball-tee"></i>
        </div>
        <h4>Golf</h4>
      </div>
      <div className="icons-div">
        <div id="gymnastics">
          <img
            src="https://www.svgrepo.com/show/172691/gymnast.svg"
            width="50px"
          />
        </div>
        <h4>Gymnastics</h4>
      </div>
      <div className="icons-div">
        <div className="lake-seas">
          <i class="fa-solid fa-sailboat"></i>
        </div>
        <h4>Lake & seas</h4>
      </div>
    </div>
  );
};
