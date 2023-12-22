import { createSlice } from "@reduxjs/toolkit";
import { Pokemon, PokemonURL } from "../constants/types";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemonSearch: [] as Pokemon[],
    pokemonFeed: [] as PokemonURL[],
  },
  reducers:{
    setPokemonSearch: (state, action) => {
      state.pokemonSearch = action.payload;
    },
    setPokemonFeed: (state, action) => {
      state.pokemonFeed += action.payload;
    },
  }
});

export const { setPokemonSearch,setPokemonFeed } = pokemonSlice.actions;
export default pokemonSlice.reducer;