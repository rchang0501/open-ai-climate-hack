import React from "react";
import {
  Box,
  HStack,
  Divider,
  Select,
  IconButton,
  Spinner,
  Center,
} from "@chakra-ui/react";

import { ReactComponent as Arrow } from "../assets/arrow.svg";
import { InputTypes, OutputTypes } from "../common";

import Editor from "@monaco-editor/react";

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

  const handleCodeInputChange = (value: any) => {
    setCodeInput(value);
  };

  const handleCodeOutputChange = (value: any) => {
    setCodeOutput(value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const outputLanguage =
      outputType === OutputTypes.Structured_Text
        ? "Structured Text"
        : "Instruction List";
    const prompt = `${codeInput}\n\ntranslate the above ${inputType} code to ${outputLanguage} code`;
    const res = await openai.createCompletion({
      model: "code-davinci-002",
      prompt: prompt,
      temperature: 0,
      max_tokens: 300,
    });
    setCodeOutput(res.data.choices[0].text ?? "");
    setLoading(false);
  };

  return (
    <Box
      backgroundColor="background.black.200"
      width="inherit"
      height="inherit"
    >
      <HStack paddingY="10px" paddingX="20px">
        <Select
          placeholder="Select input language"
          variant="unstyled"
          color="text.default.100"
          value={inputType}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handleInputTypeChange(e.target.value as InputTypes)
          }
        >
          <option value={InputTypes.Python}>{InputTypes.Python}</option>
          <option value={InputTypes.Cpp}>{InputTypes.Cpp}</option>
          <option value={InputTypes.C}>{InputTypes.C}</option>
        </Select>
        <Center paddingX="50px" height="20px" width="20px">
          {loading ? (
            <Center>
              <Spinner thickness="4px" speed="0.65s" color="accent.blue.100" />
            </Center>
          ) : (
            <IconButton
              aria-label="switch-icon"
              isRound
              backgroundColor="background.black.200"
              _hover={{
                bg: `accent.green.100`,
              }}
              icon={<Arrow />}
              onClick={handleSubmit}
            />
          )}
        </Center>
        <Select
          placeholder="Select output language"
          variant="unstyled"
          color="text.default.100"
          value={outputType}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handleOutputTypeChange(e.target.value as OutputTypes)
          }
        >
          <option value={OutputTypes.Structured_Text}>structured text</option>
          <option value={OutputTypes.Instruction_List}>instruction list</option>
        </Select>
      </HStack>
      <Divider borderColor="overlay.light.100" marginY="10px" />
      <HStack>
        <Editor
          height="90vh"
          language={inputType}
          defaultValue="# input your code"
          theme="vs-dark"
          onChange={handleCodeInputChange}
        />
        <Editor
          height="90vh"
          language={outputType}
          defaultValue="// view your translation"
          value={codeOutput}
          theme="vs-dark"
          onChange={handleCodeOutputChange}
        />
      </HStack>
    </Box>
  );
};

export default TranslateTable;
