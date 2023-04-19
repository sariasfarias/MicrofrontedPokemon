import React from "react";
import ReactDOM from "react-dom";
import {PokedexContainer} from "./components/PokedexContainer";

import "./index.css";

const App = () => (
  <div className="container">
    <PokedexContainer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
