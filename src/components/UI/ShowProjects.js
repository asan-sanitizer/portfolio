import {
  Box,
  Button,
  Center,
  Container,
  Heading, HStack,
  Image,
  Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import Link from "next/link"

import { websitepreview } from "../../../config"
import * as PropTypes from "prop-types"

function Lorem(props) {
  return null
}

Lorem.propTypes = { count: PropTypes.number }
const ShowProject = ({repo, index, color}) => {
  const isOdd = (num) => num % 2

  const { isOpen ,onOpen ,onClose } = useDisclosure();

  return (
    <Box
      d={{ lg: "flex" }}
      mt={3}
      mb={3}
      justifyContent={{ lg: "center" }}
      alignItems={{ lg: "center" }}
      flexDir={{ lg: isOdd(index) == 1 && "row-reverse" }}
      key={index}
    >
      <Box bgColor="cyan.50"
           border="solid 5px #fb8500"
           borderColor="black"
           borderRadius="3" mt={3}
           w={"70vw"}
      >
        <Heading
          textAlign="center"
          textDecoration="underline"
          textDecorationThickness={8}
          textDecorationColor="#ffb703"
          color="#023047" as="h1">
          {repo.node && repo.node.name}
        </Heading>
        <Container mt={3}>

          {repo.node && repo.node.description}
        </Container>

        <Box ml={3} mr={3}>
        <Modal colorScheme="purple" size="xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader> <Heading size="md" color="black" >{repo.node && repo.node.name }  </Heading> </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Center>
                <Box>
                  <Image width="100%"  height="100%"  src={websitepreview[index].src} />
                </Box>
              </Center>
            </ModalBody>

          </ModalContent>
        </Modal>

        </Box>

        <Center>
          <HStack mb={3} mt={3} spacing={3}>
            <Box > <Button onClick={onOpen} variant="outline" colorScheme="purple"> Screenshots </Button> </Box>
            <Link href={String(repo.node && repo.node.url)}>
              <Box> <Button  variant="outline" colorScheme="purple"> GitHub </Button> </Box>
            </Link>
          </HStack>
        </Center>

        <Center>
          <Text bgColor="yellow.200" pl={3} pr={3} opacity="1.0" as="mark" fontWeight="30px"
                py="2"><b>
            {repo.node && repo.node.primaryLanguage.name}
          </b></Text>
        </Center>
      </Box>
    </Box>
  )
}

export default ShowProject;