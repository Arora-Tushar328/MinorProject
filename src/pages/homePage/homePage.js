import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
// import Navigation from '../navigation/navigation';
import Support from '../support/support';
import Footer from '../footer/footer';
import Features from '../features/features';
import UserGuide from '../userGuide/userGuide';
import StartComponent from '../getStartedPage/startComponent';
import Navigation from '../navigation/navigation';

function HomePage() {
  return (
      <Box w="100%">
        <Navigation />
        <StartComponent />
        <UserGuide />
        <Features />
        <Support />
        <Footer />
      </Box>
  );
}

export default HomePage;
