import React from "react";
import Cards from "../cards/card";
import "./highlight.css";

export const HighlightSection = () => {
  let data = [
    {
      url: "https://via.placeholder.com/365x500.png",
      title: "Day 1 BMX",
      time: "5:12",
      genre: ["Heats", "Highlights"],
    },
    {
      url: "https://via.placeholder.com/365x500.png",
      title: "Day 1 BMX",
      time: "5:12",
      genre: ["Heats", "Mixed"],
    },
    {
      url: "https://via.placeholder.com/365x500.png",
      title: "Day 1 BMX",
      time: "5:12",
      genre: ["Semi's", "Mixed"],
    },
  ];
  return (
    <div className="highlight-main">
      <h2>Highlight</h2>
      <div className="highlight-cards">
        {data.map((elem, index) => (
          <Cards key={index} data={elem} />
        ))}
      </div>
    </div>
  );
};
