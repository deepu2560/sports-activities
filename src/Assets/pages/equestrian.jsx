import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSportData } from "../redux/dataRedux/dataAction";
import { HighlightSection } from "../components/highlights/highlight";
import "./pages.css";

export const EquestrianePage = () => {
  const [display, setDisplay] = useState("Show-jumping");
  const dispatch = useDispatch();

  useEffect(() => {
    document.getElementById(display).style.color = "white";
    document.getElementById(display).style.fontWeight = "bold";
    fetchData();
  }, [display]);

  function fetchData() {
    dispatch(fetchSportData(dispatch, "equestrian", display));
  }

  return (
    <div className="page-main">
      <div className="heading-div">
        <p id="Show-jumping" onClick={() => setDisplay(() => "Show-jumping")}>
          Show-jumping
        </p>
        <p id="dressage" onClick={() => setDisplay(() => "dressage")}>
          Dressage
        </p>
      </div>
      <HighlightSection />
    </div>
  );
};
