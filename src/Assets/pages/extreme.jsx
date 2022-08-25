import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  dataError,
  dataLoading,
  dataSuccess,
} from "../redux/dataRedux/dataAction";
import axios from "axios";
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
    dispatch(dataLoading());
    axios
      .get(`https://sport-deepu2560.herokuapp.com/extreme?title=${display}`)
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
    </div>
  );
};
