import PokemonCard from "./Card";
import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Spinner from "./loader/Spinner";
import { usePokemonData } from "../hooks/usePokemonData";
import { useAppSelector } from "../hooks/useAppSelector";
import SearchCard from "./SearchCard";

const PokemonFeed: React.FC = () => {
  const { ref, inView } = useInView();
  const { pokemonSearch } = useAppSelector(
    (s) => s.pokemon
  );
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = usePokemonData();

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
  if (error) return <div>Something went wrong</div>;

  if (data && data.pages.every((page) => page.length === 0)) {
    return (
      <Box textAlign="center" py={4}>
        No results found.
      </Box>
    );
  }

  return (
    <>
      <Flex width={"100%"} flexWrap={"wrap"} justifyContent={"center"}>
        {pokemonSearch.length > 0 ? (
          <SearchCard />
        ) : (
          <>
            {data &&
              data.pages.map((page, idx) =>
                page.map((pokemon, pokemonIdx) => (
                  <PokemonCard
                    key={idx * 1000 + pokemonIdx}
                    pokemonURL={pokemon}
                  />
                ))
              )}
          </>
        )}
      </Flex>
      {pokemonSearch.length <=0 && (
        <>
          <div ref={ref} />
          {isFetchingNextPage && <Spinner />}
        </>
      )}   
    </>
  );
};

export default PokemonFeed;
