import { useInfiniteQuery } from "react-query";
import { useAppSelector } from "./useAppSelector";
import { getAllPokemon, getPokemonByType } from "../utils/apiCalls";

export function usePokemonData() {
  const { pokemonFilterType, pokemonSearch } = useAppSelector(
    (state) => state.pokemon
  );
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery(
    ["pokemon-feed", pokemonFilterType.length > 0 && pokemonFilterType],
    ({ pageParam = 1}) =>
      pokemonFilterType.length > 0
        ? getPokemonByType(pokemonFilterType)
        : getAllPokemon(pageParam),
    {
      enabled: pokemonSearch.length <= 0,
      getNextPageParam: (_, allPages) => {
        return allPages.length + 1;
      },
    },
  );
  console.log(data)
  return {
    pokemonFilterType,
    pokemonSearch,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  };
}
