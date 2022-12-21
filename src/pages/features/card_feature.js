import { Box, Text, Heading, Stack } from '@chakra-ui/react';

function FeatureCard({ title, desc, picture, ...rest }) {
  return (
    <Box p={5} bg="gray.50" borderRadius={'2%'} {...rest}>
      <Stack
        alignItems={{ base: 'center', md: 'normal' }}
        spacing={10}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack>
          <img width={'180px'} height={'180px'} alt="my_pic" src={picture} />
        </Stack>
        <Stack>
          <Heading textAlign={{ base: 'center', md: 'left' }} fontSize="xl">
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

export default FeatureCard;
