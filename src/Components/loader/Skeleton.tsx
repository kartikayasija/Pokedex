import { Skeleton as ChakraSkeleton, SkeletonProps } from '@chakra-ui/react'

const Skeleton: React.FC<SkeletonProps> = (props) => {
  return (
    <>
      <ChakraSkeleton {...props} height={'80px'} margin={2} borderRadius={'15px'}/>
    </>
  )
}

export default Skeleton