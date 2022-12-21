import React from 'react';
import { ChakraProvider, theme, Text, Box } from '@chakra-ui/react';

function SignIn() {
  return (
      <ChakraProvider theme={theme}>
    <Box w="100%">
      <Text fontSize={'3xl'} textAlign={'center'}>
        Sign In
      </Text>
    </Box>
    </ChakraProvider>
  );
}

export default SignIn;
