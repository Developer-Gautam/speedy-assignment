import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Input, Text, Heading, color } from '@chakra-ui/react';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    // Simulate signup
    // ...

    // Redirect to the editor page
    navigate('/editor');
  };

  return (
    <Box textAlign="center">
      <Heading mb="4">Signup</Heading>
      <Box maxW="md" mx="auto">
        <Input placeholder="Username" mb="3" />
        <Input type="password" placeholder="Password" mb="6" />
        <Button colorScheme="teal" onClick={handleSignup} mb="4">
          Signup
        </Button>
        <Text>
          Already have an account? <Link to="/login" style={{color:"blue"}}>Login here</Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Signup;
