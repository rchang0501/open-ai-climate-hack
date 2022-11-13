import React from "react";
import {
  Box,
  Textarea,
  HStack,
  Divider,
  Select,
  IconButton,
  Spinner,
  Text,
  Center,
} from "@chakra-ui/react";

import { ReactComponent as Switch } from "../assets/switch-arrows.svg";
import { InputTypes, OutputTypes } from "../common";

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-MfVBBu68da5QhwAPXxSsjwWU",
  apiKey: process.env.REACT_APP_OPENAI_API_KEY ?? "",
});

const openai = new OpenAIApi(configuration);

const TranslateTable = () => {
  const [codeInput, setCodeInput] = React.useState("");
  const [codeOutput, setCodeOutput] = React.useState("");
  const [inputType, setInputType] = React.useState(InputTypes.Python);
  const [outputType, setOutputType] = React.useState(
    OutputTypes.Structured_Text
  );
  const [loading, setLoading] = React.useState(false);

  const handleInputTypeChange = (selectedType: InputTypes) => {
    setInputType(selectedType);
  };

  const handleOutputTypeChange = (selectedType: OutputTypes) => {
    setOutputType(selectedType);
  };

  const handleCodeInputChange = (e: any) => {
    const inputValue = e.target.value;
    setCodeInput(inputValue);
  };

  const handleCodeOutputChange = (e: any) => {
    const inputValue = e.target.value;
    setCodeInput(inputValue);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const prompt = `${codeInput}\ntranslate the above ${inputType} code to ${outputType} code`;
    const res = await openai.createCompletion({
      model: "code-davinci-002",
      prompt: prompt,
      temperature: 0,
      max_tokens: 100,
    });
    setCodeOutput(res.data.choices[0].text ?? "");
    setLoading(false);
  };

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
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handleInputTypeChange(e.target.value as InputTypes)
          }
        >
          <option value={InputTypes.Python}>{InputTypes.Python}</option>
          <option value={InputTypes.Cpp}>{InputTypes.Cpp}</option>
          <option value={InputTypes.C}>{InputTypes.C}</option>
        </Select>
        <IconButton
          aria-label="switch-icon"
          isRound
          backgroundColor="background.black.200"
          _hover={{
            bg: `border.informative.100`,
          }}
          icon={<Switch />}
          onClick={handleSubmit}
        />
        <Select
          placeholder="Select output language"
          variant="unstyled"
          color="text.default.100"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handleOutputTypeChange(e.target.value as OutputTypes)
          }
        >
          <option value={OutputTypes.Structured_Text}>
            {OutputTypes.Structured_Text}
          </option>
          <option value={OutputTypes.Instruction_List}>
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
          onChange={handleCodeInputChange}
        />
        <Divider
          orientation="vertical"
          borderColor="overlay.light.100"
          height="50vh"
        />
        <Textarea
          paddingTop={5}
          value={codeOutput}
          variant="unstyled"
          textColor="text.default.100"
          resize="none"
          minHeight="50vh"
          placeholder="View your code here..."
          onChange={handleCodeOutputChange}
        />
      </HStack>
      {loading && (
        <Center justifyContent="center" marginTop="20px">
          <Spinner thickness="4px" speed="0.65s" color="accent.green.100" />
        </Center>
      )}
    </Box>
  );
};

export default TranslateTable;
