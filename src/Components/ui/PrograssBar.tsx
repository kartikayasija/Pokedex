import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { scoreColor } from "../../constants/colorMap";

type ProgressProps = {
  progress: number;
};

const ProgressBar: React.FC<ProgressProps> = ({ progress }) => {
  return (
    <Box w="100%" h="15px" bgColor="#f0f0f0" borderRadius="6px" overflow="hidden" position="relative">
      <motion.div
        style={{
          height: "100%",
        }}
        initial={{ width: 0, backgroundColor: scoreColor(0) }}
        animate={{ width: `${progress}%`, backgroundColor: scoreColor(progress) }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        {/* Add labels or tooltip */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="#fff"
          textAlign="center"
        >
          <Text fontSize={'xs'}>{progress}%</Text>
        </Box>
      </motion.div>
    </Box>
  );
};

export default ProgressBar;
