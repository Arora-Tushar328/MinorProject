import { Box, Text, Heading, Stack } from '@chakra-ui/react';

function StepsCard({ title, desc, myIcon, ...rest }) {
  return (
    <Box bg="white" {...rest}>
      <Stack
        alignItems={{ base: 'center', md: 'normal' }}
        spacing={10}
        direction="row"
      >
        <Stack display={{ base: 'none', md: 'initial' }}>
          <img width={'100px'} height={'150px'} alt="my_pic" src={myIcon} />
        </Stack>
        <Stack>
          <Heading textAlign={{ base: 'center', md: 'left' }} fontSize="lg">
            {title}
          </Heading>
          <Text
            color="blue.700"
            textAlign={{ base: 'center', md: 'left' }}
            mt={4}
          >
            {desc}
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}

export default StepsCard;
