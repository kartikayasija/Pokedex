import { createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../constants/types";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemonSearch: "" as string,
    pokemonSearchResult: {} as Pokemon,
    pokemonFilterType: "" as string,
  },
  reducers:{
    setPokemonSearch: (state, action) => {
      state.pokemonSearch = action.payload;
    },
    setPokemonFilterType: (state, action) => {
      state.pokemonFilterType = action.payload;
    },
    setPokemonSearchResult: (state, action) => {
      state.pokemonSearchResult = action.payload;
    }
  }
});

export const { setPokemonSearch, setPokemonFilterType, setPokemonSearchResult } = pokemonSlice.actions;
export default pokemonSlice.reducer;