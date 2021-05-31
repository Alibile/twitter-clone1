import React from "react";
import "./App.css";
import LeftSide from "./Components/LeftSide";
import Main from "./Components/Main";
import Right from "./Components/Right";

function App() {
  return (
    <div className="App">
      <LeftSide />
      <Right />
      <Main />
    </div>
  );
}

export default App;
