import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Input, Text, Heading } from '@chakra-ui/react';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login
    // ...

    // Redirect to the editor page
    navigate('/editor');
  };

  return (
    <Box textAlign="center">
      <Heading mb="4">Login</Heading>
      <Box maxW="md" mx="auto">
        <Input placeholder="Username" mb="3" />
        <Input type="password" placeholder="Password" mb="6" />
        <Button colorScheme="teal" onClick={handleLogin} mb="4">
          Login
        </Button>
        <Text>
          Don't have an account? <Link to="/signup" style={{color:"blue"}}>Signup here</Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Login;
