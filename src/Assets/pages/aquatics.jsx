import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSportData } from "../redux/dataRedux/dataAction";
import { HighlightSection } from "../components/highlights/highlight";
import "./pages.css";

export const AquaticPage = () => {
  const [display, setDisplay] = useState("swiming");
  const dispatch = useDispatch();

  useEffect(() => {
    document.getElementById(display).style.color = "white";
    document.getElementById(display).style.fontWeight = "bold";
    fetchData();
  }, [display]);

  function fetchData() {
    dispatch(fetchSportData(dispatch, "aquatic", display));
  }

  return (
    <div className="page-main">
      <div className="heading-div">
        <p id="swiming" onClick={() => setDisplay(() => "swiming")}>
          Swiming
        </p>
      </div>
      <HighlightSection />
    </div>
  );
};
