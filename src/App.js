import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BorderdButton from "./component/BorderdButton";

function App() {
  return (
    <div className="App">
      <BorderdButton
        name={"Submit"}
        backgroundColor={"#d3d3d3"}
        fontcolor={"blue"}
        width={100}
        height={30}
      />
    </div>
  );
}

export default App;
