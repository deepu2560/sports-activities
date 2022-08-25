import React from "react";
import "./App.css";
import { Topheader } from "./Components/pages/header/headers";
import { HighlightSection } from "./Components/pages/highlights/highlight";

function App() {
  return (
    <div className="App">
      <Topheader />
      <HighlightSection />
    </div>
  );
}

export default App;
