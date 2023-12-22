import { Skeleton as ChakraSkeleton } from '@chakra-ui/react'

const Skeleton: React.FC = () => {
  return (
    <>
      <ChakraSkeleton height={'100px'} width={'100%'} margin={4}/>
    </>
  )
}

export default Skeleton