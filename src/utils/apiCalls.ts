import { AllPokemon, Pokemon, PokemonByType, PokemonURL, Type } from "../constants/types";
import { SEARCH_POKEMON, SEARCH_TYPE } from "../constants/url";

export const getAllPokemon = async(page: number): Promise<PokemonURL[]> => {
  const limit = 20;
  const next = (page - 1) * limit;
  const res = await fetch(`${SEARCH_POKEMON}?limit=${limit}&offset=${next}`);
  const data = await res.json() as AllPokemon;
  return data.results;
}

export const searchPokemon = (search: string | number): Promise<Pokemon> =>
  fetch(`${SEARCH_POKEMON}/${search}`).then((res) => res.json());

export const getTypes = (): Promise<Type> =>
  fetch(SEARCH_TYPE).then((res) => res.json());

export const getPokemonByType = async (type: string): Promise<PokemonURL[]> => {
  const res = await fetch(`${SEARCH_TYPE}/${type}`);
  const data = await res.json() as PokemonByType;
  return data.pokemon.map((p) => p.pokemon);
};