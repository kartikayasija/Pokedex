import { Select, Spinner } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useQuery } from "react-query";
import { getTypes } from "../utils/apiCalls";
import Error from "./loader/Error";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { ChangeEvent } from "react";
import { setPokemonFilterType } from "../Redux/pokemonSlice";

const Filter: React.FC = () => {
  const { data, isLoading, error } = useQuery("types", getTypes);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const typeNumber = e.target.value.split("/")[6];
    if (!typeNumber) {
      dispatch(setPokemonFilterType(""));
      return;
    }
    dispatch(setPokemonFilterType(typeNumber));
  };
  if (error) return <Error />;

  return (
    <Select
      placeholder="Type"
      icon={<ChevronDownIcon />}
      size={"lg"}
      variant={"filled"}
      onChange={handleChange}
      width={"10%"}
      minWidth={"60px"}
    >
      {isLoading || !data ? (
        <Spinner />
      ) : (
        data.results.map((type) => (
          <option key={type.name} value={type.url}>
            {type.name}
          </option>
        ))
      )}
    </Select>
  );
};

export default Filter;
