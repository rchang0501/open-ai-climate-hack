import React from "react";
import { Box, VStack, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      backgroundColor="background.black.100"
      padding={10}
    >
      <VStack>
        <Text textColor="text.white.100">hello</Text>
      </VStack>
    </Box>
  );
};

export default Home;
