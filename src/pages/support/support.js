import React from 'react';
import { Text, Box, Button, Stack } from '@chakra-ui/react';
import supportPic from '../../pictures/online.png';
import { useNavigate } from 'react-router-dom';
import DataCard from '../cards/dataCard';
import PictureCard from '../cards/pictureCard';
import CardDisplay from '../cards/cardDisplay';

function Support() {
  const navigate = useNavigate();
  function goToSignUp() {
    navigate('/sign-up');
  }
  return (
    <CardDisplay>
      <PictureCard myPicture={supportPic} />
      <DataCard>
        <Box w="100%">
          <Text
            textAlign={{ base: 'center', md: 'left' }}
            color="#0077B6"
            fontWeight="bold"
            fontSize="4xl"
            mb="3%"
            mt="12%"
          >
            Support
          </Text>
          <Text
            textAlign={{ base: 'center', md: 'left' }}
            color="blue.500"
            fontWeight="semibold"
            mb="3%"
          >
            Sign up and get support on how to use the platform
          </Text>
        </Box>
        <Stack w="100%">
          <Text
            pb="3%"
            color="blue.700"
            textAlign={{ base: 'center', md: 'left' }}
          >
            A central hub to answer some of your more obvious questions, and
            offer additional support to answer your more complex questions.
          </Text>
          <Box w="100%" textAlign={{ base: 'center', md: 'left' }}>
            <Button
              color="white"
              onClick={goToSignUp}
              bg="#0077B6"
              variant="solid"
              _hover={{ bg: '#3A72CD', color: 'white' }}
            >
              Sign Up Now
            </Button>
          </Box>
        </Stack>
      </DataCard>
    </CardDisplay>
  );
}

export default Support;
