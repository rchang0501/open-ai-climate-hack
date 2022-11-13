import React from "react";
import {
  Box,
  Textarea,
  HStack,
  Divider,
  Select,
  IconButton,
} from "@chakra-ui/react";

import { ReactComponent as Switch } from "../assets/switch-arrows.svg";
import { InputTypes, OutputTypes } from "../common";

const TranslateTable = () => {
  return (
    <Box
      backgroundColor="background.black.200"
      paddingX="50px"
      paddingY="30px"
      borderRadius={20}
      width="inherit"
      marginTop={20}
    >
      <HStack>
        <Select
          placeholder="Select input language"
          variant="unstyled"
          color="text.default.100"
        >
          <option value="python">{InputTypes.Python}</option>
          <option value="cpp">{InputTypes.Cpp}</option>
          <option value="c">{InputTypes.C}</option>
        </Select>
        <IconButton
          aria-label="switch-icon"
          icon={<Switch />}
          backgroundColor="background.black.200"
          _hover={{
            bg: `border.informative.100`,
          }}
          isRound
        />
        <Select
          placeholder="Select output language"
          variant="unstyled"
          color="text.default.100"
        >
          <option value="structured_text">{OutputTypes.Structured_Text}</option>
          <option value="instruction_list">
            {OutputTypes.Instruction_List}
          </option>
        </Select>
      </HStack>
      <Divider borderColor="overlay.light.100" marginTop={3} />
      <HStack spacing={10}>
        <Textarea
          paddingTop={5}
          variant="unstyled"
          textColor="text.default.100"
          resize="none"
          minHeight="50vh"
          placeholder="Enter your code here..."
        />
        <Divider
          orientation="vertical"
          borderColor="overlay.light.100"
          height="50vh"
        />
        <Textarea
          paddingTop={5}
          variant="unstyled"
          textColor="text.default.100"
          resize="none"
          minHeight="50vh"
          placeholder="View your code here..."
        />
      </HStack>
    </Box>
  );
};

export default TranslateTable;
