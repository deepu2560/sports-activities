import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSportData } from "../redux/dataRedux/dataAction";
import { HighlightSection } from "../components/highlights/highlight";
import "./pages.css";

export const GolfPage = () => {
  const [display, setDisplay] = useState("golf");
  const dispatch = useDispatch();

  useEffect(() => {
    document.getElementById(display).style.color = "white";
    document.getElementById(display).style.fontWeight = "bold";
    fetchData();
  }, [display]);

  function fetchData() {
    dispatch(fetchSportData(dispatch, "golf", display));
  }

  return (
    <div className="page-main">
      <div className="heading-div">
        <p id="golf" onClick={() => setDisplay(() => "golf")}>
          Golf
        </p>
      </div>
      <HighlightSection />
    </div>
  );
};
