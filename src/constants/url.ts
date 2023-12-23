export const BASE_URL = "https://pokeapi.co/api/v2";

export const SEARCH_POKEMON = `${BASE_URL}/pokemon`

export const SEARCH_TYPE = `${BASE_URL}/type`

export const GET_IMAGE = (id: string) => `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`;