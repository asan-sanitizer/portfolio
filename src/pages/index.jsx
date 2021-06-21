import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Icon,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import NextImage from "next/image"
import { CloseIcon} from '@chakra-ui/icons'

import { seo } from "config"

import { FaEnvelope,  FaGithub, FaLinkedin} from "react-icons/fa"
import qry from "../graphql/query"
import github from "../db"
import { useEffect, useState } from "react"
import ShowProject from "@/components/UI/ShowProjects"

const socialAccounts = [
  {
    icon: FaGithub, path: "https://github.com/abhishek1998",
    title:"Github"
},
{
  icon: FaLinkedin, path: "https://www.linkedin.com/in/abhishek-r-7bb907118/",
  title: "Linkedin"
},
{
  icon: FaEnvelope, path: "mailto: raturiabhi1000@gmail.com",
  title: "Gmail"
},
]
const Home = () => {
  const title = `${seo.title}`
  const color = useColorModeValue("purple.800", "purple.100")
  const description = seo.description

  const [filter, setFilter ] = useState(false);
  const [userRepos, setUserRepos] = useState([{}])
  const [filteredRepos , setFilteredRepos]= useState([{}])


  const reset = (e) => {
    e.preventDefault();
    setFilter(false);
  }

  const filterJS = (e) => {
    e.preventDefault()
    setFilter(true)
    console.log(filter)
    const res = userRepos.filter((repo) => repo.node.primaryLanguage.name.toLowerCase() === "JavaScript".toLowerCase() || repo.node.primaryLanguage.name.toLowerCase() === "EJS".toLowerCase() )
    setFilteredRepos(res)
    console.log("filtered js ", res)
  }

  const filterC = (e) =>  {
    e.preventDefault()
    setFilter(true)
    console.log(filter)
    const res = userRepos.filter((repo) => repo.node.primaryLanguage.name.toLowerCase() === "C#".toLowerCase() )
    setFilteredRepos(res)
    console.log("filtered C#", res)
  }


  const fetchdata = (() => {
    //cant use GET method when using headers
    fetch(github.baseURL, {
      method: "POST",
      headers: github.headers,
      body: JSON.stringify(qry),
    }).then((resp) => resp.json())
      .then((data) => {
        console.log("Github GraphQL API returned: ", data, process.env.GITHUB_TOKEN)
        setUserRepos(data.data.viewer.starredRepositories.edges)
      })
      .catch((err) => console.error(err))
  })

  useEffect(() => {
    fetchdata()
  }, [])

  return (
    <>
      <NextSeo
        title={title}
        robotsProps={seo.robots}
        description={description}
        canonical={seo.canonical}
        openGraph={{
	  title,
	  description,
          images: [
            {
              url: `${seo.canonical}bighead.svg`,
              width: "350px",
              height: "350px",
              alt: "avatar bigheads",
            },
          ],
        }}
      />

      <Box
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        py="4"
      >
        <NextImage
          src="/bighead.svg"
          width="350"
          height="350"
          alt="avatar bigheads"
        />
        <Box>
          <VStack w="100%">
            <HStack>
              <Box py="2">
                {socialAccounts.map((item, index) => (
                  <a
                    href={item.path}
                    aria-label={item.title}
                    key={index}
                  >
                    <Button ml={3} mr={3} colorScheme="purple" variant="outline" aria-label={item.title}>
                      <Icon as={item.icon} w="6" h="6" />
                    </Button>
                  </a>
                ))}
              </Box>
            </HStack>
            <Heading color={color} as="h1" fontSize="3xl" fontWeight="500" py="2">
              <Heading ml={6} mb={5} bgColor="orange.100" textShadow="0px 4px #cdb4db" size="3xl"> Abhishek Raturi </Heading>
            </Heading
>
          </VStack>
          <Heading fontSize={["3xl", "4xl"]} fontWeight="700">
            <Text as="span" color={color}>
              An Aspiring Full Stack Developer
            </Text>{" "}
          </Heading>
          <Center mt={4}>
          <Box>
            <Heading pl={3} pr={3} as={"mark"} color="purple.600"> Available For Hire </Heading>
          </Box>
          </Center>
          <Container mb={3}>
            <Text color="purple" py="2">
              Based in the <u><b>Toronto</b></u>, Canada. I'm passionate about JavaScript based frameworks such as React.js, Next.js and Chakra UI
            </Text>
          </Container>
          <Center>
          <Box
            w={[200,300]}
            _hover={{cursor:"pointer"}}
            colorScheme="purple"
            bgColor="purple.100"
            borderRadius={5}
            border="solid 2px purple"
            size="lg"
            fontSize="20px"
          >
            <a href="mailto: raturiabhi1000@gmail.com"> Get in touch </a>
          </Box>
          </Center>
        </Box>
      </Box>

      <Box
        id="projects"
        as="section"
        d="flex"
        alignItems="center"
        flexDir="column"
        textAlign={{ base: "center", lg: "left" }}
        py="4"
      >
        <Box w="100vw" mb={3} textAlign="center" boxShadow="base">
          <Heading color="purple.600" textShadow="0px 4px #cdb4db" bgColor="purple.50" pt={3} pb={3} size="3xl"> PROJECTS </Heading>
        </Box>
        <Center>
          <VStack>
            <Box >
              <Heading size="lg" color="purple.700"  mb={3}> Filter </Heading>
            </Box>
          <Box w="100%" h="100%" pr={[1,2]} pl={[1,2]} pt={[1,2]} pb={[1,2]}  boxShadow="2xl" border="solid 3px #bc00dd" borderRadius={3}>
            <HStack spacing={[1,4,6]}>
              <Button onClick={filterJS} value="JavaScript" variant="solid" colorScheme="purple">
                  Node.js/ React.js
              </Button>
              <Button  onClick={filterC} value="C#" variant="solid" colorScheme="orange">
                  ASP .NET
              </Button>
              <Button onClick={reset} value="reset" variant="solid" colorScheme="pink">
                <CloseIcon />
              </Button>
            </HStack>
          </Box>
          </VStack>
        </Center>
        {
          filter == true ?
            (filteredRepos && filteredRepos.map((repo, index) =>  <ShowProject repo={repo} index={index}/> )) :
            ( userRepos && userRepos.map((repo, index) => (
                <ShowProject repo={repo} color={color}  index={index}/>
            )))
        }
      </Box>
    </>
  )
}
export default Home
