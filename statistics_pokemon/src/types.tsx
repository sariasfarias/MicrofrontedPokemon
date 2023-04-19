export interface IPokemon {
    name: string;
    sprites: {
      front_default: string;
    };
};

export interface IStatisticsScreen {
    stats?: IPokemonStats[];
};

export interface IPokemonStats {
  base_stat: number;
  stat:{
    name: string;
  };
};