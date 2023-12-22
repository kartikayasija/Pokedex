import { AllPokemon, Pokemon } from "../constants/types";
import { SEARCH_POKEMON } from "../constants/url";

export const getAllPokemon = (page: number): Promise<AllPokemon> =>
  fetch(`${SEARCH_POKEMON}?limit=20&offset=${page}`).then((res) => res.json());

export const searchPokemon = (search: string|number): Promise<Pokemon> => 
  fetch(`${SEARCH_POKEMON}/${search}`).then((res) => res.json());
