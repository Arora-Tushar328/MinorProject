import React from 'react';
import { Text, Box, Button, Stack, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import blockChainPic from '../../pictures/chart.svg';
import { Icon } from '@chakra-ui/react';
import { animateScroll as scroll } from 'react-scroll';
import { ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons';
import bgImage from '../../pictures/background_pics/bg3.svg';

function StartComponent() {
  // Scroll to 1152px from the top
  const goToSteps = () => {
    scroll.scrollTo(590);
  };

  const navigate = useNavigate();
  function goToSignIn() {
    navigate('/sign-in');
  }
  return (
    <Flex
      backgroundImage={bgImage}
      backgroundPosition="bottom"
      backgroundRepeat={'no-repeat'}
      textAlign={'center'}
      w="100%"
      mt={{ base: '20%', md: '8%' }}
      justifyItems="center"
      align="center"
      justify="center"
    >
      <Stack
        mt={{ base: '5%', md: '3%' }}
        direction={{ base: 'column', md: 'row' }}
        w="80%"
        pb="2%"
      >
        <Stack w={{ base: '100%', md: '50%' }}>
          <Box align="center" w="100%">
            <Text
              textAlign={{ base: 'center', md: 'left' }}
              color="#0077B6"
              fontWeight="bold"
              fontSize={{ base: '2xl', md: '4xl' }}
              mb={{ base: '8%', md: '4%' }}
              ml={{ base: '0%', md: '5%' }}
            >
              Water management
            </Text>
            <Stack w={{ base: '100%', md: '90%' }}>
              <Text
                color="blue.700"
                mb={{ base: '5%', md: '4%' }}
                textAlign={{ base: 'center', md: 'left' }}
                fontSize="md"
              >
                To keep track of transactions between parties, we offer a
                distributed ledger that is secure and transparent. Conserve
                water, make an investment in a clean environment for future
                generations, and change how water resources are handled and
                traded.
              </Text>
              <Stack
                pt="2%"
                pb={{ base: '4%', md: '1%' }}
                textAlign={{ base: 'center', md: 'left' }}
                align={'center'}
                spacing={4}
                direction={{ base: 'column', md: 'row' }}
              >
                <Button
                  size={'lg'}
                  color="#0077B6"
                  _hover={{ bg: 'gray.100', color: '#0077B6' }}
                  bg="white"
                  variant="solid"
                  onClick={goToSteps}
                >
                  Take a trip
                  <Icon as={ChevronDownIcon} w={8} h={8} color="#0077B6" />
                </Button>
                <Button
                  size={'lg'}
                  color="white"
                  onClick={goToSignIn}
                  bg="#0077B6"
                  variant="solid"
                  _hover={{ bg: '#3A72CD', color: 'white' }}
                >
                  Get Started
                  <Icon as={ChevronRightIcon} w={8} h={8} color="white" />
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        <Stack w={{ base: '100%', md: '50%' }}>
          <Box pb={{ base: '0%', md: '19%' }} align="center">
            <img alt="support_pic" width={'85%'} src={blockChainPic} />
          </Box>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default StartComponent;
