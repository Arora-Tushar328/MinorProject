import React from 'react';
import { Box, Stack } from '@chakra-ui/react';


function DataCard(props) {
  return (
    <Stack w={{ base: '100%', md: '50%' }}>
      <Box align="center" w="100%">
        {props.children}
      </Box>
    </Stack>
  );
}

export default DataCard;