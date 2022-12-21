import React from 'react';
import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  Input,
  useControllableState,
  Button,
  ModalCloseButton,
  Box,
  Stack,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const SignInModal = ({ onClose, onOpen, isOpen }) => {
  const [value, setValue] = useControllableState({
    defaultValue: 'none',
  });

  const navigate = useNavigate();
  const registerUser = () => {
    navigate('/register');
  };

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <Box>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        spacing={0}
        onClose={onClose}
        size="4xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent w={{ base: '80%', md: '70%' }}>
          <ModalCloseButton
            color={{ base: '#0077B6', md: 'white' }}
            fontWeight="bold"
            onClick={() => setValue('none')}
          />
          <Stack w={{ base: '100%', md: '100%' }} direction="row">
            <Stack w={{ base: '100%', md: '50%' }}>
              <ModalHeader
                fontWeight={'bold'}
                fontSize={'4xl'}
                color="#0077B6"
                textAlign={'center'}
              >
                Sign in as
              </ModalHeader>
              {value && value === 'user' && (
                <Button
                  w={'70%'}
                  alignSelf="center"
                  maxW={'md'}
                  mb="2%"
                  color="gray.600"
                  variant="ghost"
                  mt="14%"
                  leftIcon={<FcGoogle />}
                >
                  <Text>Sign in with Google</Text>
                </Button>
              )}

              {value && value === 'org' && (
                <ModalBody w="80%" alignSelf={'center'} pb={6}>
                  <FormControl>
                    <Input bg="gray.100" ref={initialRef} placeholder="Email" />
                  </FormControl>

                  <FormControl mt={6}>
                    <Input bg="gray.100" placeholder="Password" />
                  </FormControl>
                </ModalBody>
              )}
              {value && value === 'org' && (
                <>
                  <Box mb={3}>
                    <Text textAlign={'center'}>Fogot Password?</Text>
                  </Box>
                  <ModalFooter alignItems={'center'} alignSelf="center">
                    <Button
                      bg={'#0077B6'}
                      color={'white'}
                      borderRadius={18}
                      colorScheme="blue"
                      px={65}
                      mr={3}
                      mb="15%"
                      _hover={{ bg: '#00B4D8', color: 'white' }}
                    >
                      Sign In
                    </Button>
                  </ModalFooter>
                </>
              )}
              <ModalFooter alignItems={'center'} alignSelf="center">
                {value && value === 'none' && (
                  <Stack direction={'column'}>
                    <Button
                      bg={'#0077B6'}
                      color={'white'}
                      borderRadius={18}
                      colorScheme="blue"
                      px={65}
                      onClick={() => setValue('user')}
                      mr={3}
                      mb="8"
                      _hover={{ bg: '#00B4D8', color: 'white' }}
                    >
                      User
                    </Button>
                    <Button
                      bg={'#0077B6'}
                      color={'white'}
                      onClick={() => setValue('org')}
                      borderRadius={18}
                      colorScheme="blue"
                      px={65}
                      mr={3}
                      mb="15%"
                      _hover={{ bg: '#00B4D8', color: 'white' }}
                    >
                      Organization
                    </Button>
                  </Stack>
                )}
              </ModalFooter>
            </Stack>
            <Stack
              display={['none', 'none', 'flex', 'flex']}
              bg="#0077B6"
              w={{ base: 'none', md: '50%' }}
              pb="5%"
            >
              <Text
                fontWeight={'semibold'}
                fontSize={'4xl'}
                textAlign={'center'}
                mt="20%"
                color="white"
              >
                Hello, Frinend!
              </Text>
              <Text
                mt="-4%"
                alignSelf="center"
                w="80%"
                pb="4%"
                color="white"
                textAlign={'center'}
              >
                Register with our organization and enjoy the benefits of the
                decentralized platform
              </Text>
              <Button
                color={'white'}
                borderRadius={18}
                colorScheme="white"
                variant="outline"
                px={15}
                mr={3}
                onClick={registerUser}
                w="40%"
                mb="2%"
                _hover={{ bg: '#00B4D8', color: 'white' }}
                alignSelf={'center'}
              >
                Sign Up
              </Button>
            </Stack>
          </Stack>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SignInModal;
