import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { StatisticsScreen } from "./components/StatisticsScreen";

const App = () => (
  <div className="container">
    <StatisticsScreen pokemonId={0}/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
