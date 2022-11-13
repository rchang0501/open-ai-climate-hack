import React from "react";
import { Box } from "@chakra-ui/react";

import { ReactComponent as Logo } from "../assets/logo.svg";
import TranslateTable from "../components/TranslateTable";

const Home = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      backgroundColor="background.black.100"
      paddingX="7vw"
      paddingY="5vh"
    >
      <Box mb="100px">
        <Logo width="220" />
        <TranslateTable />
      </Box>
    </Box>
  );
};

export default Home;
