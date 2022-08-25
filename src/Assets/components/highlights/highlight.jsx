import React from "react";
import { useSelector } from "react-redux";
import Cards from "../cards/card";
import "./highlight.css";

export const HighlightSection = () => {
  let { data, isLoading, isData } = useSelector((state) => state);
  return (
    <div className="highlight-main">
      <h2 className="animate__animated animate__flipInX">Highlight</h2>
      {isLoading || !isData ? (
        <div className="highlight-loading">
          {" "}
          <div></div>
        </div>
      ) : (
        <div className="highlight-cards">
          {data.map((elem, index) => (
            <Cards key={index} data={elem} />
          ))}
        </div>
      )}
    </div>
  );
};
