import { MoonIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";

export default function Theme() {
  const { toggleColorMode } = useColorMode();
  return (
    <Button size={'sm'} onClick={toggleColorMode}>
      <MoonIcon />
    </Button>
  );
}
