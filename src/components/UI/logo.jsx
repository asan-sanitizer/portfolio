import { chakra, Heading } from "@chakra-ui/react"
import NextLink from "next/link"

const Logo = () => (
  <>
    <NextLink href="/" passHref>
      <chakra.a fontSize="2rem" fontWeight="700">
        <Heading size="lg" bgColor="red.100" p={2} color="purple.800"> AR </Heading>
      </chakra.a>
    </NextLink>
  </>
)

export default Logo
