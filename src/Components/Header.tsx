import { Box, HStack, Stack } from "@chakra-ui/react"
import SearchBox from "./SearchBox"
import Filter from "./Filter"
import Theme from "./ui/Theme"

const Header: React.FC = () => {
  return (
    <>
    <Stack textAlign={'center'}>
      <Box textAlign={'right'} marginX={{base: 2, md: 5}} marginTop={{base: 2, md: 5}}>
        <Theme />
      </Box>
      <HStack justifyContent={'center'} alignItems={'center'} marginBottom={5}>
        <SearchBox />
        <Filter />
      </HStack>
    </Stack>
    </>
  )
}

export default Header