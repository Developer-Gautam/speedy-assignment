import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';

const Home = () => {
  return (
    <Container maxW="container.md" mt="8">
      <Heading mb="4">Welcome to Image Editor App</Heading>
      <Text fontSize="lg" mb="6">
        Edit your images with ease using our powerful image editing tools.
      </Text>
      <Button colorScheme="teal" as={Link} to="/editor" mr="4">
        Go to Image Editor
      </Button>
      <Button colorScheme="blue" as={Link} to="/login">
        Login
      </Button>

      <Box mt="8">
        <Heading size="lg" mb="4">
          Featured Images
        </Heading>
        <SimpleGrid columns={3} spacing={4}>
          {/* Display some sample images */}
          <Box
            bg="gray.100"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            p="2"
            textAlign="center"
          >
            <img
              src="https://via.placeholder.com/150"
              alt="Sample 1"
              style={{ width: '100%', height: 'auto' }}
            />
            <Text mt="2">Sample Image 1</Text>
          </Box>
          {/* Add more sample images as needed */}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Home;
