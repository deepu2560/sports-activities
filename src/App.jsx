import React from "react";
import "./App.css";
import { Topheader } from "./Assets/components/header/headers";
import { HighlightSection } from "./Assets/components/highlights/highlight";
import { Allroutes } from "./Assets/router";

function App() {
  return (
    <div className="App">
      <Topheader />
      <Allroutes />
      <HighlightSection />
    </div>
  );
}

export default App;
