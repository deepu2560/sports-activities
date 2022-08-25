import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSportData } from "../redux/dataRedux/dataAction";
import { HighlightSection } from "../components/highlights/highlight";
import "./pages.css";

export const GymnastPage = () => {
  const [display, setDisplay] = useState("rhythmic");
  const dispatch = useDispatch();

  useEffect(() => {
    document.getElementById(display).style.color = "white";
    document.getElementById(display).style.fontWeight = "bold";
    fetchData();
  }, [display]);

  function fetchData() {
    dispatch(fetchSportData(dispatch, "gymnast", display));
  }

  return (
    <div className="page-main">
      <div className="heading-div">
        <p id="rhythmic" onClick={() => setDisplay(() => "rhythmic")}>
          Rhythmic
        </p>
        <p id="Trampoline" onClick={() => setDisplay(() => "Trampoline")}>
          Trampoline
        </p>
      </div>
      <HighlightSection />
    </div>
  );
};
