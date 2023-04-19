import React, { useState } from "react";
import {RandomPokemonButton} from 'random_pokemon/RandomPokemonButton';
import {StatisticsScreen} from 'statistics_pokemon/StatisticsScreen';
import { IRightPokedex } from "../types";
import './PokedexRightLayout.scss';

export function PokedexRightLayout (props: IRightPokedex) {
  return(
    <div id="right-panel">
      {/*<!-- Blank container -->*/}
      <div className="empty-container">
        <svg height="100%" width="100%">
          <polyline
            points="0,0 0,40 338,40 358,75 550,75 550,0 0,0"
            style={{fill: "#f2f2f2", stroke: "none", strokeWidth: 3,}}
          />
          <polyline
            points="0,40 338,40 358,75 550,75"
            style={{fill: "none", stroke: "black", strokeWidth: 3}}
          />
        </svg>
      </div>
      {/*<!-- Top screen -->*/}
      <div>
        <StatisticsScreen stats={props.pokemon?.stats}/>
        <RandomPokemonButton setPokemon= {props.setPokemon} setError={props.setError}/>
      </div>  
    </div>
  );
}