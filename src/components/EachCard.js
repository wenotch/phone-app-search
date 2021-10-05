import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

export default function EachCard({ name, imgUrl, price }) {
  return (
    <Center py={5}>
      <Box
        role={"group"}
        p={6}
        w={"330px"}
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
              Grade:
            </Text>
            <Text m="0" as="p" color={"gray.500"} fontSize={"sm"}>
              Storage Size: {}
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
