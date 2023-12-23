import { Input } from "@chakra-ui/react";
import { useDebounce } from "../hooks/useDebounce";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { searchPokemon } from "../utils/apiCalls";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setPokemonSearch, setPokemonSearchResult } from "../Redux/pokemonSlice";
import { useAppSelector } from "../hooks/useAppSelector";

const SearchBox: React.FC = () => {
  const search = useAppSelector(s=>s.pokemon.pokemonSearch)
  const debouncedSearch = useDebounce(search);
  const dispatch = useAppDispatch();

  const { data } = useQuery(
    ["pokemon-search", debouncedSearch],
    () => searchPokemon(debouncedSearch.toLowerCase()),
    { retry: false, enabled: debouncedSearch.length >0 }
  );

  useEffect(() => {
    if (data && debouncedSearch.length>0){
      dispatch(setPokemonSearchResult(data))
    }
    else if(!data || debouncedSearch.length==0) dispatch(setPokemonSearchResult(null));
  }, [data, dispatch, debouncedSearch]);

  return (
    <Input
      height={"48px"}
      value={search}
      onChange={(e) => dispatch(setPokemonSearch(e.target.value))}
      variant={"filled"}
      placeholder="Search..."
      width={"30%"}
      minWidth={"200px"}
    />
  );
};

export default SearchBox;
