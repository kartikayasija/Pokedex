import { Box, Input } from "@chakra-ui/react";
import { useDebounce } from "../hooks/useDebounce";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { searchPokemon } from "../utils/apiCalls";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setPokemonSearch } from "../Redux/pokemonSlice";

const SearchBox: React.FC = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const dispatch = useAppDispatch();

  const { data } = useQuery(
    ["pokemon-search", debouncedSearch],
    () => searchPokemon(debouncedSearch),
    {retry: false, enabled: debouncedSearch.length > 1}
  );

  useEffect(()=>{
    if(data) dispatch(setPokemonSearch([data]))
  }, [data, dispatch])

  return (
    <Box textAlign={"center"} marginY={4}>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        variant={"filled"}
        placeholder="Search..."
        width={"50%"}
        minWidth={"280px"}
      />
    </Box>
  );
};

export default SearchBox;