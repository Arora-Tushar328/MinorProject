import React from 'react';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import FeatureCard from './card_feature';
import security_icon from '../../pictures/icons/security3.png';
import allocate_icon from '../../pictures/icons/share2.jpg';
import transparency_icon from '../../pictures/icons/security2.png';
import realTime_icon from '../../pictures/icons/real.jpg';

function Features() {
  return (
    <Flex
      align="center"
      justify="center"
      w="100%"
      mt={{ base: '5%', md: '7%' }}
      color="#0077B6"
    >
      <Box alignItems={'center'} align="center" w="80%">
        <Box w="100%" align="center">
          <Text mb="1%" textAlign={'center'} fontWeight="bold" fontSize="4xl">
            Features
          </Text>
          <Text
            textAlign="center"
            mb="4%"
            w={{ base: '100%', md: '60%' }}
            fontSize="lg"
            color="blue.700"
          >
            Simple, easy to remember and functional way to navigate the site and
            get information you need.
          </Text>
        </Box>

        <Stack w={{ base: '90%', md: '94%' }} spacing={12} direction="column">
          <Stack spacing={8} direction={{ base: 'column', md: 'row' }}>
            <FeatureCard
              picture={security_icon}
              title="Blockchain Security"
              desc="This feature shows how each new block of information connects to all the previous blocks in a way that it's nearly impossible to tamper with."
            />
            <FeatureCard
              picture={allocate_icon}
              title="Water Allocation"
              desc="This feature shows the allocation in terms of quantity, quality or timing of water resources between and within different sectors and for different uses."
            />
          </Stack>

          <Stack spacing={8} direction={{ base: 'column', md: 'row' }}>
            <FeatureCard
              picture={realTime_icon}
              title="Real Time Data"
              desc="This feature gives us available data ready for the user's consumption."
            />
            <FeatureCard
              picture={transparency_icon}
              title="Transparency"
              desc="This feature provides a fully auditable and valid ledger of transactions"
            />
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
}

export default Features;
