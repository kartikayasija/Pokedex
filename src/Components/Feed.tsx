import { useInfiniteQuery } from "react-query";
import { getAllPokemon, getPokemonByType } from "../utils/apiCalls";
import PokemonCard from "./Card";
import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Spinner from "./loader/Spinner";
import { useAppSelector } from "../hooks/useAppSelector";

const PokemonFeed: React.FC = () => {
  const { ref, inView } = useInView();
  const { pokemonFilterType } = useAppSelector((state) => state.pokemon);
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery(
    ["pokemon-feed", pokemonFilterType.length > 0 && pokemonFilterType],
    ({ pageParam = 1 }) => pokemonFilterType.length > 0
        ? getPokemonByType(pokemonFilterType)
        : getAllPokemon(pageParam),
    {
      getNextPageParam: (_, allPages) => {
        return allPages.length + 1;
      },
    }
  );

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage, isFetchingNextPage]);

  if (isLoading)
    return (
      <Flex justifyContent={"center"} alignItems={"center"} height={"80vh"}>
        <Spinner />
      </Flex>
    );
  if (error || !data) return <div>Something went wrong</div>;

  if (data.pages.every((page) => page.length === 0)) {
    return (
      <Box textAlign="center" py={4}>
        No results found.
      </Box>
    );
  }


  return (
    <>
      <Flex width={"100%"} flexWrap={"wrap"} justifyContent={"center"}>
        {data.pages.map((page, idx) =>
          page.map((pokemon, pokemonIdx) => (
            <PokemonCard key={idx * 1000 + pokemonIdx} pokemonURL={pokemon} />
          ))
        )}
      </Flex>
      <div ref={ref} />
      {isFetchingNextPage && <Spinner />}
    </>
  );
};

export default PokemonFeed;
