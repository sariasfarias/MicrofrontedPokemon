import React from 'react'
import { IPokedex } from '../types';
import './Pokedex1.scss';
import { PokedexLeftLayout } from './PokedexLeftLayout';
import { PokedexRightLayout } from './PokedexRightLayout';

function Pokedex( props: IPokedex){
  return (
    <>
    <div className="logo">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png"
        height="100%"
        alt="logo"
      />
    </div>

    <div id="pokedex">
      <PokedexLeftLayout pokemon={props.pokemon} error={props.error}/>
      <PokedexRightLayout {...props}/> 
    </div>
    </>
  )
}

export default Pokedex