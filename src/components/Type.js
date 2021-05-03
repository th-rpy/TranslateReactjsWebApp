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

const Type = () => {
  const title_size = { base: "33px", md: "50px", lg: "55px" };
  const font_size = { base: "16px", md: "18px", lg: "20px" };

  return (
    <div>
      <Box pt="100" px="100">
        <div>
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
        </div>
        <Text
          className="i"
          size="md"
          fontSize="20px"
          p="10"
          color="gray.900"
          textAlign="center"
          isTruncated
        >
          Welcome! To get started, paste your text into the search box
        </Text>
      </Box>
    </div>
  );
};

export default Type;
