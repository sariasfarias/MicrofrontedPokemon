import React, { useEffect, useState } from "react";
import Pokedex from "./Pokedex";

export function PokedexContainer () {
    const [ pokemon, setPokemon ] = useState(undefined);
    const [ error, setError ] = useState(false);

    return (<Pokedex pokemon={pokemon} setPokemon={setPokemon} error={error} setError={setError}/> );
}