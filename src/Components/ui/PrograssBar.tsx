import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { scoreColor } from "../../constants/colorMap";

type ProgressProps = {
  progress: number;
};

const ProgressBar: React.FC<ProgressProps> = ({ progress }) => {
  return (
    <>
      <Box
        w="100%"
        h="10px"
        bgColor="#eee"
        borderRadius="4px"
        overflow="hidden"
      >
        <motion.div
          style={{
            height: "100%",
            backgroundColor: scoreColor(progress),
          }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        />
      </Box>
    </>
  );
};

export default ProgressBar;
