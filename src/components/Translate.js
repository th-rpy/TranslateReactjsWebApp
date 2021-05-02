import {
  Text,
  Input,
  Box,
  Select,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon, Search2Icon } from "@chakra-ui/icons";
import Typewriter from "./TypeWriter";

const Translate = () => {
  const title_size = { base: "33px", md: "50px", lg: "55px" };
  const font_size = { base: "16px", md: "18px", lg: "20px" };

  return (
    <div>
      <Box pt="100" px="100">
        <Text className="i"
          size="lg" 
          fontSize="40px"
          p="4"
          color="gray.500"
          textAlign="center"
          as="i"
          isTruncated>
          Paste your Text and Get your Translated Text in {" "}
          <span style={{ color: "red"}}>
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
          p="10"
          color="gray.500"
          textAlign="center"
          isTruncated
        >
          Welcome! To get started, paste your text into the search box
        </Text>
      </Box>
      
    </div>
  );
};

export default Translate;
