import { Box, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

const Welcome = () => {
  const [isHovered, setIsHovered] = useState(false);

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
    if (isHovered) {
      return `Hope you have a great ${dayName}!`;
    }
    return `Hi there, nice to meet you!`;
  };

  return (
    <Box
      borderRadius="lg"
      bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      p={3}
      mt={3}
      mb={6}
      align="center"
      onClick={() => setIsHovered(!isHovered)}
      cursor="pointer"
      className="animate-cursor"
    >
      {renderText()}
    </Box>
  );
};

export default Welcome;
