import {
  Avatar,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useAuth } from '../../utils/context/AuthContext';
import Footer from '../footer/footer';
import Navigation from '../navigation/navigation';
import { GrMail } from 'react-icons/gr';
import { GiSmartphone } from 'react-icons/gi';

const Profile = () => {
  const { user } = useAuth();
  return (
    <>
      <Navigation />
      <Flex
        mx={['8', '12', '20', '36', '52']}
        mt={['4', '4', '4', '2', '6']}
        mb="0"
        flexDirection={['column', 'column', 'column']}
        h="100%"
      >
        <Box
          position="relative"
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
          //bgImage='/images/event-bg1.jpg'
          bg="linear-gradient(90deg, hsla(217, 60%, 47%, 1) 0%, hsla(212, 68%, 80%, 1) 15%, hsla(311, 85%, 95%, 1) 53%, hsla(180, 100%, 99%, 1) 100%)"
          // bgSize='cover'
          h="40vh"
          w="100%"
          bgPosition="center"
        >
          <Flex
            position="absolute"
            direction="column"
            align="center"
            bottom="-60px"
            left="10%"
            bg="white"
            pt="4"
            px="4"
            borderRadius="50%"
            boxShadow="md"
          >
            {/* <Text fontSize='7xl' fontWeight='600' lineHeight='64px'>
            25
          </Text> */}
            {/* <Avatar h="20%" src={user ? user.image : 'https://avatars.dicebear.com/api/avataaars/food.svg'} /> */}
            <Box w="150px" h="150px">
              <Avatar
                h="100%"
                w="100%"
                src="https://avatars.dicebear.com/api/avataaars/teddy.svg"
              />
            </Box>
            {/* <Text
            fontSize='xl'
            fontWeight='500'
            lineHeight= '22px'
            mt='1'
          >
            Oct 2022
          </Text> */}
          </Flex>
        </Box>
        <Flex mt={5} direction="column" ml="25%">
          <Heading as="h2" ml="1%">
            Profile
          </Heading>
          <Text ml="1%" mt={3}>
            {' '}
            Update your photo and personal data
          </Text>
        </Flex>
        <Flex direction={'column'} w='100%' p='8' m='auto' mt={12}  borderRadius='lg'
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        >
          <FormControl mb={6} display="flex">
            <FormLabel fontSize={20} htmlFor="name" w="30%">
              UserName:
            </FormLabel>
            <Input
              id="name"
              placeholder="Username"
              //   value = {user.name}
            />
          </FormControl>
          <FormControl mb={6} display="flex">
            <FormLabel fontSize={20} htmlFor="profession" w="30%">
              Profession
            </FormLabel>
            <Input
              id="profession"
              placeholder="profession"
              //   value = {user.profession}
            />
          </FormControl>
          <FormControl mb={6} display="flex">
            <FormLabel fontSize={18} htmlFor="address_line1" w="30%">
              Address Line 1
            </FormLabel>
            <Input
              id="address_line1"
              placeholder="Address line 1"
              //   value = {user.address.line_1}
            />
          </FormControl>
          <FormControl mb={6} display="flex">
            <FormLabel fontSize={18} htmlFor="address_line2" w="30%">
              Address Line 2
            </FormLabel>
            <Input
              id="address_line2"
              placeholder="Address line 2"
              //   value = {user.address.line_2}
            />
          </FormControl>
          <FormControl mb={6}  display="flex">
                  <FormLabel fontSize={18} htmlFor="city" w='30%'>
                    City / Village
                  </FormLabel>
                  <Input
                    id="city"
                    placeholder="City / Village / Town"
                    //   value = {user.address.city_village}
                  />
                </FormControl>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};
export default Profile;
