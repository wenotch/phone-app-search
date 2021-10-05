import { useColorModeValue } from "@chakra-ui/color-mode";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box, Center, Divider, Flex, Grid, Stack } from "@chakra-ui/layout";
import React from "react";
import EachCard from "./EachCard";
import { SimpleGrid } from "@chakra-ui/react";
function Main({ data }) {
  return (
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
        px={{ base: 8, md: 34 }}
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
              //   value={value}
              //   onChange={handleChange}
              size="md"
              placeholder="Search Phone of Choice"
            />
          </InputGroup>
        </Stack>
        <Divider />
        {/* 
          <Tbody>
            {" "}
            {isLoading ? (
              <Flex w="full" justify="space-between" align="center">
                <Button isLoading colorScheme="gray" loadingText="Loading">
                  Click me
                </Button>
              </Flex>
            ) : (
              currentPosts.map((admin) => {
                return (
                  <Tr key={admin.id}>
                    <Td>{admin.id}</Td>
                    <Td>{admin.name}</Td>
                    <Td>{admin.username}</Td>
                    <Td>{admin.email}</Td>
                  </Tr>
                );
              })
            )}
        </Table> */}
        {/* {dataSearch.length === 0 ? <Text>No Match Found</Text> : null}
        <Pagination
          postsPerpage={postsPerPage}
          totalPosts={dataSearch.length}
          paginate={paginate}
        /> */}

        <SimpleGrid
          w="full"
          alignContents="center"
          minChildWidth="330px"
          spacing={0}
          placeItems="center"
        >
          {data.map((phone) => {
            return (
              <EachCard
                name={phone.name}
                imgUrl={phone.imgUrl}
                price={phone.price}
              />
            );
          })}
        </SimpleGrid>
      </Box>
    </Center>
  );
}

export default Main;
