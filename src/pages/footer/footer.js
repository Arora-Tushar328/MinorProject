import React from 'react';
import { Box, Stack, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Footer() {

  const navigate = useNavigate();
  function goToSignUp(){
    navigate("/sign-up");
  }
  return (
    <Box bg="brand.500" w="100%" mt="6%" color="white">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        ml={{ base: '5', md: '10' }}
        py={3}
        w="94%"
        p={2}
      >
        <Stack w="100%" direction={'row'}>
          <Stack w="50%">
            <Text fontWeight="semibold">Company</Text>
            <Text fontsize="sm">Terms of Service</Text>
            <Text>Law Enforcement</Text>
          </Stack>
          <Stack w="50%">
            <Text fontWeight="semibold">Support</Text>
            <Text>Privacy Policy</Text>
            <Text>Terms of Service</Text>
          </Stack>
        </Stack>

        <Stack w="100%" direction={'row'}>
          <Stack w="50%">
            <Text fontWeight="semibold">Legal</Text>
            <Text>Cookies Policy</Text>
            <Text>Privacy Policy</Text>
          </Stack>
          <Stack w="50%">
            <Text fontWeight="semibold">Subscribe</Text>
            <Text>Sign up to get updates on water.....</Text>
            <Button
              w="50%"
              _hover={{ bg: '#3A72CD', color: 'white' }}
              variant="ghost"
              bg="white"
              color="blue.600"
              onClick={goToSignUp}
              pt="3"
              pb="3"
              px={8}
              size="xs"
            >
              Sign Up
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor="blackAlpha.100"
        py={1}
        w="100%"
        alignItems="center"
      >
        <Stack py={2}>
          <Text textAlign="center">Copyright © 2022 Water899, Inc</Text>
        </Stack>
      </Box>
    </Box>
  );
}

export default Footer;
