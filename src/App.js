import React from "react";
import "./App.css";
import LeftSide from "./Components/LeftSide";
import Right from "./Components/Right";
import Main from "./Components/Main";
function App() {
  return (
    <div className="App">
      <LeftSide />
      <Main />
      <Right />
    </div>
  );
}

export default App;
