import { Box, Link as ChakraLink, Text } from "@chakra-ui/react"

import { MAX_WIDTH } from "config"

const Footer = () => (
  <>
    <Box mb="7" as="footer">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        minH="4rem"
        px={[4, 6, 10, 14, 20]}
        maxW={MAX_WIDTH}
        mx="auto"
      >
        <Box py="2">
          <Text>
            Built with{" "}
            <ChakraLink
              href="https://nextjs.org/"
              fontWeight="600"
              _focus={{ outline: "none" }}
              isExternal
            >
              Next.js
            </ChakraLink>
            ,{" "}
            <ChakraLink
              href="https://chakra-ui.com/"
              fontWeight="600"
              _focus={{ outline: "none" }}
              isExternal
            >
              Chakra UI
            </ChakraLink>
            <Text ml={3} mr={3}>
              and
            </Text>
            <ChakraLink
              href="https://graphql.org"
              fontWeight="600"
              _focus={{ outline: "none" }}
              isExternal
            >
              GraphQL
            </ChakraLink>
          </Text>
        </Box>
      </Box>
    </Box>
  </>
)

export default Footer
