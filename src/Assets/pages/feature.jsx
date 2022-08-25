import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSportData } from "../redux/dataRedux/dataAction";
import { HighlightSection } from "../components/highlights/highlight";
import "./pages.css";

export const FeaturePage = () => {
  const [display, setDisplay] = useState("new");
  const dispatch = useDispatch();

  useEffect(() => {
    document.getElementById(display).style.color = "white";
    document.getElementById(display).style.fontWeight = "bold";
    fetchData();
  }, [display]);

  function fetchData() {
    dispatch(fetchSportData(dispatch, "feature", display));
  }

  return (
    <div className="page-main">
      <div className="heading-div">
        <p id="new" onClick={() => setDisplay(() => "new")}>
          New
        </p>
      </div>
      <HighlightSection />
    </div>
  );
};
