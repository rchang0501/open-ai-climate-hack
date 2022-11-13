import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Home } from "./pages";
import customTheme from "./theme/index";

const App = (): React.ReactElement => {
  return (
    <ChakraProvider theme={customTheme}>
      <Home />
    </ChakraProvider>
  );
};

export default App;
