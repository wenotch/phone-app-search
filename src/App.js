import axios from "axios";
import React, { useEffect, useState } from "react";
import { iphoneUrl } from "./components/endpoint";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box, Center, Divider, Text, Stack } from "@chakra-ui/layout";
import EachCard from "./components/EachCard";
import { SimpleGrid } from "@chakra-ui/react";
function App() {
  useEffect(() => {
    axios
      .get(iphoneUrl)
      .then((response) => {
        const data = response.data.data.data;
        const iphones = data.filter((each) => {
          return (
            each.brand === "Apple" && typeof each.lowestAsk !== "undefined"
          );
        });
        setIphone(iphones);
      })
      .catch((error) => console.error(error));
  }, []);
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);
  const [iphone, setIphone] = useState([]);

  let dataSearch = iphone.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(value.toString().toLowerCase())
    );
  });
  return (
    <>
      <Nav />
      <Hero />
      <Center>
        <Box
          w={"full"}
          mx={{ base: 5, md: 24 }}
          mt={5}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
          py={8}
          px={{ base: 4, md: 34 }}
        >
          <Stack
            direction="row"
            spacing={4}
            mb={4}
            align="center"
            justify="center"
          >
            <InputGroup w="60" m="auto">
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="#046494" />}
              />
              <Input
                value={value}
                onChange={handleChange}
                size="md"
                placeholder="Search Phone of Choice"
              />
            </InputGroup>
          </Stack>
          <Divider />

          <SimpleGrid
            w="full"
            alignContents="center"
            minChildWidth="330px"
            spacing={0}
            placeItems="center"
          >
            {iphone.map((phone) => {
              return (
                <EachCard
                  key={phone._id}
                  name={phone.name}
                  imgUrl={phone.imgUrl}
                  price={phone.lowestAsk.price}
                  grade={phone.lowestAsk.grade}
                  storage={phone.lowestAsk.storageSize}
                />
              );
            })}
          </SimpleGrid>
        </Box>
      </Center>
    </>
  );
}

export default App;
