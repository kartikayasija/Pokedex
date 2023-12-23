import {
  Box,
  Flex,
  Image,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Pokemon } from "../../constants/types";
import ProgressBar from "./PrograssBar";
import { capitalizeFirst } from "../../utils/capitalizeFirst";
import { GET_IMAGE } from "../../constants/url";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  pokemon: Pokemon;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, pokemon }) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {pokemon && capitalizeFirst(pokemon.name)}
          {pokemon && (
            <Image
              boxSize="40px"
              src={GET_IMAGE(pokemon.id)}
              alt={pokemon.name}
              ml={2}
            />
          )}
        </ModalHeader>
        <ModalBody>
          {pokemon.stats.map((stat, idx) => (
            <Box key={idx} margin={4}>
              <HStack>
                <Text fontWeight="bold">{capitalizeFirst(stat.stat.name)}:</Text>
                <Text>{stat.base_stat}</Text>
              </HStack>
              <Flex alignItems="center">
                <ProgressBar progress={stat.base_stat} />
              </Flex>
            </Box>
          ))}
        </ModalBody>
        <ModalCloseButton />
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
