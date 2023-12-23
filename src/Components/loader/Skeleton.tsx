import { Skeleton as ChakraSkeleton, SkeletonProps } from '@chakra-ui/react'



const Skeleton: React.FC<SkeletonProps> = (props) => {
  return (
    <>
      <ChakraSkeleton {...props} margin={2}/>
    </>
  )
}

export default Skeleton