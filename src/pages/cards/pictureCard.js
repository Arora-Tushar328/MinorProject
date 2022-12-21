import React from 'react';
import { Box, Stack } from '@chakra-ui/react';

function PictureCard({ myPicture, ...rest }) {
  return (
    <Stack w={{ base: '100%', md: '50%' }} {...rest}>
      <Box align="center" mb="3%">
        <img alt="support_pic" src={myPicture} />
      </Box>
    </Stack>
  );
}

export default PictureCard;
