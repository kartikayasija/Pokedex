import { useAppSelector } from "../hooks/useAppSelector";
import PokeCard from "./PokeCard";

const SearchCard: React.FC = () => {
  const { pokemonSearch, pokemonSearchResult } = useAppSelector(
    (s) => s.pokemon
  );
  if (!pokemonSearchResult)
    return <div>No Pokemon Matches {pokemonSearch}</div>;
  return (
    <>
      <PokeCard pokemon={pokemonSearchResult} isLoading={false} />
    </>
  );
};

export default SearchCard;
