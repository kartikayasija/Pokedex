import { HStack } from "@chakra-ui/react"
import SearchBox from "./SearchBox"
import Filter from "./Filter"

const Header: React.FC = () => {
  return (
    <>
      <HStack justifyContent={'center'} alignItems={'center'} marginY={5}>
        <SearchBox />
        <Filter />
      </HStack>
    </>
  )
}

export default Header