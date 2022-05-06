import { Box, useColorModeValue } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

const Welcome = () => {
  const renderText = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayName = days[new Date().getDay()];
    return `🤞 Hope you have a great ${dayName}!`;
  };

  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  return (
    <Box
      borderRadius="lg"
      bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      p={3}
      mt={3}
      mb={6}
      align="center"
    >
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: 40,
          strings: ["👋 Hi there, nice to meet you!", renderText()],
          stringSplitter,
        }}
      />
    </Box>
  );
};

export default Welcome;
