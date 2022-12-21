import { Flex } from '@chakra-ui/react';

const Cards = ({ background, number, comment, iconColor, iconUsed, value }) => {
  return (
    <Flex
      h='160px'
      w='22%'
      bgColor={background}
      color={background === '#1B1C1E' ? '#F9FBFF' : '#1B1C1E'}
      borderRadius='2xl'
      flexDir='column'
      justifyContent={'center'}
      boxShadow='rgba(0, 0, 0, 0.26) 0px 1px 4px'
    >
      <Flex
        h='130px'
        alignItems={'center'}
        flexDir='row'
        justifyContent='space-between'
        p='4'
      >
        <Flex justifyContent='flex-start' flexDir='column'>
          <Flex fontSize='2xl' fontWeight='semibold'>
            {number}
          </Flex>
          <Flex
            fontSize='1.2rem'
            my='1'
            color={background === '#1B1C1E' ? '#F9FBFF' : '#3A3C40'}
          >
            {comment}
          </Flex>
        </Flex>
        <Flex
          bgColor={iconColor}
          h='65px'
          w='65px'
          color='#F9FBFF'
          alignItems='center'
          justifyContent='space-evenly'
          borderRadius='10px'
          ml='4'
        >
          {iconUsed}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Cards;
