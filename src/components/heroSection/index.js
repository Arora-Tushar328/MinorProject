import { Box, Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import organisationHero from '../../assets/organisationHero.svg';
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Flex
      my={['2', '2', '4', '8', '8']}
      justifyContent="space-between"
      flexDirection={['column', 'column', 'row']}
    >
      <Flex
        flexDirection="column"
        w={['100%', '100%', '45%', '40%']}
        alignItems={['center', 'center', 'flex-start']}
      >
        <Box
          fontSize={['xl', '2xl', '3xl', '5xl']}
          fontWeight="bold"
          mt={['2', '4', '8', '12']}
          textAlign={['center', 'center', 'left']}
        >
          Find you <br /> Organisations here
          {/* <span className="highlight"> here</span> */}
        </Box>
        <Flex
          fontSize={['small', 'md', 'lg', '2xl']}
          mt={['8', '10', '12', '16']}
          textAlign={['center', 'center', 'left']}
        >
          Explore the new world of water with our partner organisations.
        </Flex>

        <Button
          w="fit-content"
          mt={['8', '10', '12', '12', '16']}
          mb={['8', '8', '2', '2', '0']}
          fontSize={['small', 'md']}
          p={['2', '2', '4', '6']}
          onClick={() => navigate('/register')}
        >
          Register as an organisation
        </Button>
      </Flex>
      <Image
        src={organisationHero}
        alt="Logo"
        mt={'4'}
        w={['80%', '80%', '55%', '38%']}
        alignSelf={['center', 'center', 'normal']}
      />
    </Flex>
  );
};

export default HeroSection;
