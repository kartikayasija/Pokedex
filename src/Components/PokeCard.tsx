import { Pokemon } from "../constants/types";
import { useState } from "react";
import { Box, Card, Flex, Image, Text } from "@chakra-ui/react";
import { capitalizeFirst } from "../utils/capitalizeFirst";
import { GET_IMAGE } from "../constants/url";
import { RenderIf } from "./ui/RenderIf";
import Modal from "./ui/Modal";
import Skeleton from "./loader/Skeleton";
import { cardColor } from "../constants/colorMap";

type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokeCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <Card
        margin={5}
        minWidth={"300px"}
        padding={5}
        borderRadius={"20px"}
        onClick={() => setModalOpen(true)}
        bgColor={cardColor[pokemon.types[0].type.name]}
        _hover={{ cursor: "pointer", transform: "scale(1.05)" }} // Add hover effect
        transition="transform 0.3s ease-in-out" // Add transition for a smooth effect
      >
        <Flex justifyContent={"space-between"}>
          <Box>
            <Text>#{pokemon.id}</Text>
            <Text fontWeight={"500"}>{capitalizeFirst(pokemon.name)}</Text>
            {pokemon.types.map((type, idx) => (
              <Text fontSize={"sm"} key={idx}>
                {capitalizeFirst(type.type.name)}
              </Text>
            ))}
          </Box>
          {!imageError ? (
            <Image
              boxSize="80px"
              src={GET_IMAGE(pokemon.id)}
              alt={`Loading ${pokemon.name}...`}
              onError={() => setImageError(true)}
              onLoad={() => setImageError(false)}
            />
          ) : (
            <Skeleton boxSize="80px" />
          )}
        </Flex>
      </Card>

      <RenderIf renderIf={modalOpen}>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} pokemon={pokemon} />
      </RenderIf>
    </>
  );
};

export default PokeCard;