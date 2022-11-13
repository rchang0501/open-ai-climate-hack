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
      padding={50}
    >
      <Box mb="100px">
        <Logo height="5vh" />
        <TranslateTable />
      </Box>
    </Box>
  );
};

export default Home;
