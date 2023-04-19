import React from "react";
import ReactDOM from "react-dom";
import { RandomPokemonButton } from "./components/RandomPokemonButton";

import "./index.css";

const App = () => (
  <div className="container">
    <RandomPokemonButton setPokemon={() => console.log('lala')}/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
