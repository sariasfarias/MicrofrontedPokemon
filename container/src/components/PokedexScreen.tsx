import React from 'react';
import { IPokedexScreen } from '../types';
import './PokedexScreen.scss';

function PokedexScreen(props: IPokedexScreen){
  return (
    <div className='pokemon-screen'>
      <div>{props.pokemon.name}</div>
      <img
        width={320} height={320}
        src={props.pokemon.sprites.front_default}
        alt={props.pokemon.name}
      />
    </div>
  )
}

export default PokedexScreen;