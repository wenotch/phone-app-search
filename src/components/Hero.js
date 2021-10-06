import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Button,
  Text,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import svg from "../images/search1.svg";

const Hero = () => {
  return (
    <Flex
      w="full"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      direction={{ base: "column", md: "row-reverse" }}
      px={{ base: 8, md: 36 }}
      py={{ base: 20, md: 24 }}
      mx="auto"
      bg={"teal"}
    >
      <Box w={{ base: "100%", md: "50%" }}>
        <Image w="90%" src={svg} alt="Segun Adebayo" />
      </Box>
      <Box
        w={{ base: "100%", md: "50%" }}
        textAlign={{ base: "left", md: "left" }}
        mx="auto"
      >
        <chakra.h1
          mb={3}
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight={{ base: "bold", md: "extrabold" }}
          color={useColorModeValue("white", "gray.100")}
          lineHeight="shorter"
          textAlign="left"
        >
          Your{" "}
          <Text as="span" color="#FFD200">
            Ultimate{" "}
          </Text>{" "}
          Mobile Phone Filter.
        </chakra.h1>
        <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color="whiteAlpha.800"
          lineHeight="base"
          textAlign="left"
        >
          This is your ultimate phone search. made specially for you using;
          reactjs and chakra Ui. Feel free to search using whatever you like. if
          we have it, it would definitely show up.
        </chakra.p>

        {/* <InputGroup textAlign="left" w="72" size="md">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            focusBorderColor="#FFD200"
            type="text"
            placeholder="Search in anyway you like"
          />
        </InputGroup> */}

        <Button
          bg="white"
          color="teal"
          _hover={{ bg: "#FFD200", color: "white", transition: "all ease .3s" }}
          size="lg"
        >
          Get Started
        </Button>
      </Box>
    </Flex>
  );
};

export default Hero;
