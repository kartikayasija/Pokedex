import {
  CloseButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useDebounce } from "../hooks/useDebounce";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { searchPokemon } from "../utils/apiCalls";
import { useAppDispatch } from "../hooks/useAppDispatch";
import {
  setPokemonSearch,
  setPokemonSearchResult,
} from "../Redux/pokemonSlice";
import { useAppSelector } from "../hooks/useAppSelector";
import { RenderIf } from "./ui/RenderIf";

const SearchBox: React.FC = () => {
  const search = useAppSelector((s) => s.pokemon.pokemonSearch);
  const debouncedSearch = useDebounce(search);
  const dispatch = useAppDispatch();

  const { data } = useQuery(
    ["pokemon-search", debouncedSearch],
    () => searchPokemon(debouncedSearch.toLowerCase()),
    { retry: false, enabled: debouncedSearch.length > 0 }
  );

  useEffect(() => {
    if (data && debouncedSearch.length > 0) {
      dispatch(setPokemonSearchResult(data));
    } else if (!data || debouncedSearch.length == 0)
      dispatch(setPokemonSearchResult(null));
  }, [data, dispatch, debouncedSearch]);

  const handleClearSearch = () => {
    dispatch(setPokemonSearch(""));
    dispatch(setPokemonSearchResult(null));
  };

  return (
    <InputGroup height={"48px"} width={"30%"} minWidth={"200px"}>
      <Input
        height={'full'}
        value={search}
        onChange={(e) => dispatch(setPokemonSearch(e.target.value))}
        variant={"filled"}
        placeholder="Search..."
      />
      <RenderIf renderIf={search.length > 0}>
        <InputRightElement height={'full'}>
          <CloseButton onClick={handleClearSearch} />
        </InputRightElement>
      </RenderIf>
    </InputGroup>
  );
};

export default SearchBox;
