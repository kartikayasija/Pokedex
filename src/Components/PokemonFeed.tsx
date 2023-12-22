import { useInfiniteQuery } from "react-query";
import { getAllPokemon } from "../utils/apiCalls";
import PokemonCard from "./PokemonCard";
import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Spinner from "./loader/Spinner";

const PokemonFeed: React.FC = () => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["pokemon-feed"],
    ({ pageParam = 1 }) => getAllPokemon(pageParam),
    { getNextPageParam: (_, allPages) => {
      return allPages.length + 1;
    } }
  );

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage, isFetchingNextPage]);

  if (!data) return null;

  return (
    <>
      <Flex width={'100%'} flexWrap={'wrap'} justifyContent={'center'}>
        {data.pages.map((page, idx) => (
          page.results.map((pokemon, pokemonIdx) => (
            <PokemonCard key={idx * 1000 + pokemonIdx} pokemonURL={pokemon} />
          ))
        ))}
      </Flex>
      <div ref={ref} />
      {isFetchingNextPage &&
        <Spinner />}
    </>
  );
};

export default PokemonFeed;
