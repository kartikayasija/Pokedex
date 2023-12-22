import { Box, Spinner as ChakraSpinner } from "@chakra-ui/react"


const Spinner: React.FC = () => {
  return (
    <Box textAlign={'center'}>
      <ChakraSpinner size={'xl'}/>
    </Box>
  )
}

export default Spinner