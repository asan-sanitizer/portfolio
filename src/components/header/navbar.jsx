import { useState } from "react"
import { Box, chakra, Heading, useColorModeValue } from "@chakra-ui/react"
import NextLink from "next/link"

import HamburgerMenu from "../UI/hamburgerMenu"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const bg = useColorModeValue("gray.200", "gray.300")
  const color = useColorModeValue("black", "white")

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Box as="nav"
           display="flex"
           flexDir={{ base: "row", lg: "row" }}
           alignItems="center"
           fontWeight="500"
      >
        <HamburgerMenu toggled={isOpen} toggle={setIsOpen} />
        <chakra.ul
          bg={{ base: bg, lg: "transparent" }}
          color={{ base: "black", lg: color }}
          display={{
            base: isOpen ? "block" : "none",
            lg: "flex",
          }}
          position={{ base: "absolute", lg: "static" }}
          top="5rem"
          left="5%"
          right="5%"
          rounded={{ base: "lg", lg: "none" }}
          py={{ base: "2", lg: "0" }}
          px={{ base: "4", lg: "0" }}
          alignItems={{ lg: "center" }}
          boxShadow={{ base: "xl", lg: "none" }}
          zIndex="2"
        >
          <chakra.li
            listStyleType="none"
            px={{ lg: "6" }}
            py={{ base: "4", lg: "0" }}
          >
            <NextLink href="#projects">
              <a onClick={closeMenu}>
                <u>
                  <Heading color="purple.500" size="md">
                    PROJECTS
                  </Heading>
                </u>
              </a>
            </NextLink>
          </chakra.li>
          <chakra.li
            listStyleType="none"
            px={{ lg: "3" }}
            py={{ base: "3", lg: "0" }}
          >
            <NextLink href="/Abhishek-Raturi-Resume.pdf">
              <a onClick={closeMenu}>
                <u>
                  <Heading color="purple.500" size="md">
                    DOWNLOAD MY RESUME
                  </Heading>
                </u>
              </a>
            </NextLink>
          </chakra.li>

        </chakra.ul>
      </Box>
    </>
  )
}

export default Navbar
