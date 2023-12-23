import { useQuery } from "react-query";
import { PokemonURL } from "../constants/types";
import { searchPokemon } from "../utils/apiCalls";
import { Box, Card, Flex, Image, Text } from "@chakra-ui/react";
import { GET_IMAGE } from "../constants/url";
import Skeleton from "./loader/Skeleton";
import { useState } from "react";
import Modal from "./ui/Modal";
import { RenderIf } from "./ui/RenderIf";
import { capitalizeFirst } from "../utils/capitalizeFirst";
type PokemonCardProps = {
  pokemonURL: PokemonURL;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonURL }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const pokemonId = pokemonURL.url.split("/")[6];
  const { data, error, isLoading } = useQuery(
    ["pokemon-search", pokemonURL.name, pokemonId],
    () => searchPokemon(pokemonId)
  );

  const [imageError, setImageError] = useState(false);
  if (isLoading) {
    return (
      <Card margin={5} minWidth={"300px"} padding={5} borderRadius={"20px"}>
        <Skeleton />
      </Card>
    );
  }
  if (error || !data) return <div>Something went wrong</div>;
  return (
    <>
      <Card
        margin={5}
        minWidth={"300px"}
        padding={5}
        borderRadius={"20px"}
        onClick={() => setModalOpen(true)}
      >
        <Flex justifyContent={"space-between"}>
          <Box>
            <Text fontWeight={"500"}>{capitalizeFirst(data.name)}</Text>
            {data.types.map((type, idx) => (
              <Text fontSize={"sm"} key={idx}>
                {capitalizeFirst(type.type.name)}
              </Text>
            ))}
          </Box>
          {!imageError ? (
            <Image
              boxSize="80px"
              src={GET_IMAGE(data.id)}
              alt={`Loading ${data.name}...`}
              onError={()=>setImageError(true)}
            />
          ) : (
            <Skeleton boxSize="80px" />
          )}
        </Flex>
      </Card>

      <RenderIf renderIf={modalOpen}>
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          pokemon={data}
        />
      </RenderIf>
    </>
  );
};

export default PokemonCard;
