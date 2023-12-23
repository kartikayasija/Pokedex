import { useQuery } from "react-query";
import { PokemonURL } from "../constants/types";
import { searchPokemon } from "../utils/apiCalls";
import PokeCard from "./PokeCard";
type PokemonCardProps = {
  pokemonURL: PokemonURL;
};

const GetDetails: React.FC<PokemonCardProps> = ({ pokemonURL }) => {
  const pokemonId = pokemonURL.url.split("/")[6];
  const { data, isLoading } = useQuery(
    ["pokemon-search", pokemonURL.name, pokemonId],
    () => searchPokemon(pokemonId)
    );
  return (
    <>
      {data && <PokeCard pokemon={data} isLoading={isLoading} />}
    </>
  );
};

export default GetDetails;
