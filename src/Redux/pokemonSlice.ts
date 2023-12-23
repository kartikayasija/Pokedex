import { createSlice } from "@reduxjs/toolkit";
import { Pokemon, PokemonURL } from "../constants/types";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemonSearch: [] as Pokemon[],
    pokemonFeed: [] as PokemonURL[],
    pokemonFilterType : "" as string,
  },
  reducers:{
    setPokemonSearch: (state, action) => {
      state.pokemonSearch = action.payload;
    },
    setPokemonFeed: (state, action) => {
      state.pokemonFeed += action.payload;
    },
    setPokemonFilterType: (state, action) => {
      state.pokemonFilterType = action.payload;
    }
  }
});

export const { setPokemonSearch, setPokemonFeed, setPokemonFilterType } = pokemonSlice.actions;
export default pokemonSlice.reducer;