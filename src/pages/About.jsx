import { Container, Text, VStack, Box, Flex, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const About = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <Link as={RouterLink} to="/" color="white" _hover={{ textDecoration: "none" }}>
            MyApp
          </Link>
        </Heading>
        <Box>
          <Link as={RouterLink} to="/" color="white" mx={2} _hover={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" color="white" mx={2} _hover={{ textDecoration: "none" }}>
            About
          </Link>
        </Box>
      </Flex>
      <Flex direction="column" align="center" justify="center" height="80vh">
        <VStack spacing={4}>
          <Text fontSize="2xl">About MyApp</Text>
          <Text>This is a simple React application using Chakra UI for styling.</Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default About;