import {
  Box,
  Center,
  useColorModeValue,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";

export default function EachCard({ name, imgUrl, price, storage, grade }) {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);
  return (
    <Center py={5}>
      <Box
        role={"group"}
        p={6}
        w={"320px"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        textAlign="center"
        justifyContent="center"
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          pt={12}
          pb={5}
          m="auto"
          w={40}
          mt={-12}
          textAlign="center"
        >
          <Image rounded={"lg"} src={imgUrl} />
        </Box>
        <Stack align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"Capitalize"}>
            {name}
          </Text>

          <Stack direction={"row"} align={"center"}>
            <Text m="0" as="p" color={"gray.500"} fontSize={"sm"}>
              Grade: {grade}
            </Text>
            <Text m="0" as="p" color={"gray.500"} fontSize={"sm"}>
              Storage Size: {storage}
            </Text>
          </Stack>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              ${price}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
