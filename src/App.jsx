import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, CSSReset, Box, Container } from '@chakra-ui/react';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ImageEditor from './components/Editor/ImageEditor';

const App = () => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <Box bg="gray.100" minH="100vh" py="8">
          <Container maxW="container.md" bg="white" borderRadius="lg" p="6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/editor" element={<ImageEditor />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;
