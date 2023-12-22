import { Box, Modal as ChakraModal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { Pokemon } from "../../constants/types";
import ProgressBar from "./PrograssBar";
import { capitalizeFirst } from "../../utils/capitalizeFirst";
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  pokemon: Pokemon
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, pokemon}) => {
  return (
    <>
      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Stats</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {pokemon.stats.map((stat, idx) => (
              <Box key={idx} margin={4}>
                {capitalizeFirst(stat.stat.name)}: {stat.base_stat}{<ProgressBar progress={stat.base_stat} />}
              </Box>
            ))}
          </ModalBody>
        </ModalContent>
      </ChakraModal>
    </>
  )
}
export default Modal