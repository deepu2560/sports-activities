import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  dataError,
  dataLoading,
  dataSuccess,
} from "../redux/dataRedux/dataAction";
import axios from "axios";
import { HighlightSection } from "../components/highlights/highlight";
import "./pages.css";

export const CyclingPage = () => {
  const [display, setDisplay] = useState("BMX");
  const dispatch = useDispatch();

  useEffect(() => {
    ["BMX", "Mountain", "Road", "Track"].forEach((elem) => {
      document.getElementById(elem).style.color = "#c9c7c7";
      document.getElementById(elem).style.fontWeight = "normal";
    });
    document.getElementById(display).style.color = "white";
    document.getElementById(display).style.fontWeight = "bold";
    fetchData();
  }, [display]);

  function fetchData() {
    dispatch(dataLoading());
    axios
      .get(`https://sport-deepu2560.herokuapp.com/cycling?title=${display}`)
      .then((res) => {
        const { data } = res.data[0];
        setTimeout(() => {
          dispatch(dataSuccess(data));
        }, 500);
      })
      .catch((err) => {
        dispatch(dataError());
        console.log(err);
      });
  }

  return (
    <div className="page-main">
      <div className="heading-div">
        <p id="BMX" onClick={() => setDisplay(() => "BMX")}>
          BMX
        </p>
        <p id="Mountain" onClick={() => setDisplay(() => "Mountain")}>
          Mountain
        </p>
        <p id="Road" onClick={() => setDisplay(() => "Road")}>
          Road
        </p>
        <p id="Track" onClick={() => setDisplay(() => "Track")}>
          Track
        </p>
      </div>
      <HighlightSection />
    </div>
  );
};
