import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSportData } from "../redux/dataRedux/dataAction";
import { HighlightSection } from "../components/highlights/highlight";
import "./pages.css";

export const ExtremePage = () => {
  const [display, setDisplay] = useState("snowboarding");
  const dispatch = useDispatch();

  useEffect(() => {
    document.getElementById(display).style.color = "white";
    document.getElementById(display).style.fontWeight = "bold";
    fetchData();
  }, [display]);

  function fetchData() {
    dispatch(fetchSportData(dispatch, "extreme", display));
  }

  return (
    <div className="page-main">
      <div className="heading-div">
        <p id="snowboarding" onClick={() => setDisplay(() => "snowboarding")}>
          Snowboarding
        </p>
        <p
          id="mountain-biking"
          onClick={() => setDisplay(() => "mountain-biking")}
        >
          Mountain-biking
        </p>
      </div>
      <HighlightSection />
    </div>
  );
};
