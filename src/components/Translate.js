import {
  Text,
  Input,
  Box,
  Select,
  InputGroup,
  InputRightElement,
  Textarea,
} from "@chakra-ui/react";
import { SearchIcon, Search2Icon } from "@chakra-ui/icons";
import Typewriter from "./TypeWriter";

const Translate = () => {
  const title_size = { base: "33px", md: "50px", lg: "55px" };
  const font_size = { base: "16px", md: "18px", lg: "20px" };

  return (
    <div>
      <Box pt="100" px="100">
        <Text
          className="i"
          size="lg"
          fontSize="40px"
          p="4"
          color="gray.100"
          textAlign="center"
          as="i"
          isTruncated
        >
          Paste your Text and Get your Translated Text in{" "}
          <span style={{ color: "red" }}>
            <Typewriter
              loop
              cursor
              typespeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
              words={["English", "French", "Arabic", "Other!"]}
            />
          </span>
        </Text>
        <Text
          className="i"
          size="md"
          fontSize="20px"
          p="10"
          color="gray.200"
          textAlign="center"
          isTruncated
        >
          Welcome! To get started, paste your text into the search box
        </Text>
      </Box>
      <Box className="i" my="12" align="center">
        <form  autoComplete="on">
          <InputGroup maxW="70vw">
		  	<Select placeholder="Select option" maxW = "15vw">
				<option value="option1">Twitter</option>
				<option value="option2">Facebook</option>
				<option value="option2">Instagram</option>
			</Select>
            <Input
              name="tweetURL"
              placeholder="https://twitter.com/fbOpenSource/status/1369334666843488256"
            />
            <InputRightElement>
              <button type="submit">
                <Search2Icon fontSize={font_size} color="blue.700" />
              </button>
            </InputRightElement>
          </InputGroup>
        </form>
      </Box>

    </div>
  );
};

export default Translate;
