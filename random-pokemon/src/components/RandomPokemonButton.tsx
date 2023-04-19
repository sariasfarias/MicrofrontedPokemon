import React, { useEffect, useState } from "react";
import { IRandomPokemonButton } from "../types";
import './RandomPokemonButton.scss';


export function RandomPokemonButton ({setPokemon, setError}: IRandomPokemonButton) {

    const [ loading, setLoading ] = useState(true);
    const [ pokemonID, setPokemonId ] = useState(0);
  
    useEffect(() => {
        if (pokemonID != 0) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPokemon(data);
                setLoading(false);
            })
            .catch(err => {
                setError(true);
                setLoading(false);
            })
        } 
        
    }, [pokemonID]);

    return (
        <>
            <div className="bottom-modes">
                <button className="level-button"></button>
                <button className="level-button"></button>
                <button className="level-button"></button>
                <button className="level-button"></button>
            </div>
            <button
                    onClick={() => setPokemonId(Math.floor(Math.random() * 806 + 1))}
                    className='pokedex-button'
                >
                    Select Random Pokemon
                </button>
            </>
    );
}