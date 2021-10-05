import React from "react";
import {
  chakra,
  Flex,
  useColorModeValue,
  Button,
  Avatar,
} from "@chakra-ui/react";

export default function Nav() {
  return (
    <>
      <chakra.header
        bg={useColorModeValue("white", "gray.800")}
        w="full"
        px={{ base: 2, sm: 4, md: 32 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Button variant="ghost">Logo</Button>

          <Avatar size="sm" name="Emmanuel Nwanochie" />
        </Flex>
      </chakra.header>
    </>
  );
}
