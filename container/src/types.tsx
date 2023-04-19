export interface IPokemonStats {
  base_stat: number;
  stat:{
    name: string;
  };
};

export interface IPokemon {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
    stats: IPokemonStats[];
};

export interface IPokedexScreen {
  pokemon: IPokemon;
};

export interface IPokedex {
  pokemon?: IPokemon;
  setPokemon: Function;
  error?: boolean;
  setError: Function;
}

export interface ILeftPokedex {
  pokemon?: IPokemon;
  error?: boolean;
}

export interface IRightPokedex {
  pokemon?: IPokemon;
  error?: boolean;
  setPokemon: Function;
  setError: Function;
}