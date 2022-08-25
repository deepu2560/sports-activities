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

export const GymnastPage = () => {
  const [display, setDisplay] = useState("rhythmic");
  const dispatch = useDispatch();

  useEffect(() => {
    document.getElementById(display).style.color = "white";
    document.getElementById(display).style.fontWeight = "bold";
    fetchData();
  }, [display]);

  function fetchData() {
    dispatch(dataLoading());
    axios
      .get(`https://sport-deepu2560.herokuapp.com/gymnast?title=${display}`)
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
