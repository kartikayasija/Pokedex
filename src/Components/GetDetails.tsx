import { useQuery } from "react-query";
import { PokemonURL } from "../constants/types";
import { searchPokemon } from "../utils/apiCalls";
import PokeCard from "./PokeCard";
import { Card } from "@chakra-ui/react";
import Skeleton from "./loader/Skeleton";
type PokemonCardProps = {
  pokemonURL: PokemonURL;
};

const GetDetails: React.FC<PokemonCardProps> = ({ pokemonURL }) => {
  const pokemonId = pokemonURL.url.split("/")[6];
  const { data, isLoading } = useQuery(
    ["pokemon-search", pokemonURL.name, pokemonId],
    () => searchPokemon(pokemonId)
  );

  if (isLoading) {
    return (
      <Card margin={5} minWidth={"300px"} padding={5} borderRadius={"20px"}>
        <Skeleton />
      </Card>
    );
  }
  return <>{data && <PokeCard pokemon={data} />}</>;
};

export default GetDetails;
