import React from "react";
import { Box } from "@chakra-ui/react";

import { ReactComponent as Logo } from "../assets/logo.svg";
import TranslateTable from "../components/TranslateTable";

const Home = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      backgroundColor="background.black.200"
      overflow="hidden"
    >
      <Box padding="10px" width="100%" boxShadow="5px 10px #888888">
        <Logo width="180" />
      </Box>
      <TranslateTable />
    </Box>
  );
};

export default Home;
