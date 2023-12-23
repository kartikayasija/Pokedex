import { Box, Card, Flex, Image, Text } from "@chakra-ui/react";
import { useAppSelector } from "../hooks/useAppSelector";
import { capitalizeFirst } from "../utils/capitalizeFirst";
import { useState } from "react";
import { GET_IMAGE } from "../constants/url";
import Skeleton from "./loader/Skeleton";
import { RenderIf } from "./ui/RenderIf";
import Modal from "./ui/Modal";

const SearchCard: React.FC = () => {
  const { pokemonSearch, pokemonSearchResult } = useAppSelector(
    (s) => s.pokemon
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  if (!pokemonSearchResult)
    return <div>No Pokemon Matches {pokemonSearch}</div>;
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
            <Text fontWeight={"500"}>
              {capitalizeFirst(pokemonSearchResult.name)}
            </Text>
            {pokemonSearchResult.types.map((type, idx) => (
              <Text fontSize={"sm"} key={idx}>
                {capitalizeFirst(type.type.name)}
              </Text>
            ))}
          </Box>
          {!imageError ? (
            <Image
              boxSize="80px"
              src={GET_IMAGE(pokemonSearchResult.id)}
              alt={`Loading ${pokemonSearchResult.name}...`}
              onError={() => setImageError(true)}
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
          pokemon={pokemonSearchResult}
        />
      </RenderIf>
    </>
  );
};

export default SearchCard;
