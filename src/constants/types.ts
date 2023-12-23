export type Pokemon = {
  id: string;
  name: string;
  stats: PokemonStat[];
  types: PokemonType[];
};

export type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type PokemonURL = {
  name: string;
  url: string;
};

export type AllPokemon = {
  results: PokemonURL[];
  count: number;
  previous: string | null;
  next: string | null;
};

export type Type = {
  count: number;
  next: string;
  results: PokemonURL[];
};

export type PokemonByType = {
  pokemon: { pokemon: PokemonURL }[];
  name: string;
  id: number;
};
