import React from 'react';
import { Stack, Flex } from '@chakra-ui/react';

function CardDisplay(props) {
  return (
      <Flex
        backgroundPosition="bottom"
        backgroundRepeat={'no-repeat'}
        textAlign={'center'}
        w="100%"
        mt={{ base: '8%', md: '5%' }}
        justifyItems="center"
        align="center"
        justify="center"
      >
        <Stack direction={{ base: 'column', md: 'row' }} w="80%" pb="3%">
          {props.children}
        </Stack>
      </Flex>
  );
}

export default CardDisplay;
