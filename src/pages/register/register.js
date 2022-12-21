import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    Text,
    HStack,
    InputRightElement,
    Stack,
    ChakraProvider,
    theme,
    useDisclosure,
    Button,
    FormHelperText,
    Heading,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import Navigation from '../navigation/navigation';
  import Footer from '../footer/footer';
  import { useForm } from 'react-hook-form';
import SignInModal from '../../components/signInModal';
  
  export default function OrganizationForm() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showPassword, setShowPassword] = useState(false);
    const [file, setFile] = useState();
    const [loading, setLoading] = useState(false);
  
    const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
      const onSubmit = handleSubmit(async (mydata, e) => {
      e?.preventDefault();
       console.log(mydata);
         setLoading(true);
      });
      
    function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
      <ChakraProvider theme={theme}>
        <Navigation />
        <Flex w="100%" minH={'80vh'} align={'center'} justify={'center'}>
          <Stack
            w={{ base: '80%', md: '100%' }}
            spacing={8}
            mx={'auto'}
            maxW={'lg'}
            py={6}
            px={6}
          >
            <Stack align={'center'}>
              <Heading fontSize={'4xl'} color="#0077B6" textAlign={'center'}>
                Sign up
              </Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                Enjoy all of our cool features
              </Text>
            </Stack>
            <form onSubmit={onSubmit}>
              <Box rounded={'lg'} bg="gray.50" boxShadow={'lg'} p={5}>
                <Stack spacing={4}>
                  <FormControl>
                    <FormLabel>User Name</FormLabel>
                    <Input
                      type="text"
                      id="username"
                      {...register('username', { required: true })}
                    />
                    <FormHelperText color="red">
                      {errors.username?.type === 'required' &&
                        'Username is required'}
                    </FormHelperText>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Price</FormLabel>
                    <Input
                      type="text"
                      id="price"
                      {...register('price', { required: true })}
                    />
                    <FormHelperText color="red">
                      {errors.price?.type === 'required' &&
                        'Price input is required'}
                    </FormHelperText>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Country</FormLabel>
                    <Input
                      type="text"
                      id="country"
                      {...register('country', { required: true })}
                    />
                    <FormHelperText color="red">
                      {errors.country?.type === 'required' &&
                        'Country name is required'}
                    </FormHelperText>
                  </FormControl>
                  <FormControl>
                    <FormLabel>State</FormLabel>
                    <Input
                      type="text"
                      id="state"
                      {...register('state', { required: true })}
                    />
                    <FormHelperText color="red">
                      {errors.state?.type === 'required' &&
                        'State name is required'}
                    </FormHelperText>
                  </FormControl>
                  <FormControl>
                    <FormLabel>city/village</FormLabel>
                    <Input
                      type="text"
                      id="city"
                      {...register('city', { required: true })}
                    />
                    <FormHelperText color="red">
                      {errors.city?.type === 'required' &&
                        'City name is required'}
                    </FormHelperText>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Pin Code</FormLabel>
                    <Input
                      type="text"
                      id="Pincode"
                      {...register('Pincode', { required: true })}
                    />
                    <FormHelperText color="red">
                      {errors.Pincode?.type === 'required' &&
                        'Pin code is required'}
                    </FormHelperText>
                  </FormControl>
                  <FormControl id="waterType">
                    <FormLabel>Type of Water</FormLabel>
                    <Input
                      type="text"
                      id="waterType"
                      {...register('waterType', { required: true })}
                    />
                    <FormHelperText color="red">
                      {errors.waterType?.type === 'required' &&
                        'Water Type is required'}
                    </FormHelperText>
                  </FormControl>
                  <HStack>
                    <Box>
                      <FormControl>
                        <FormLabel>Address 1</FormLabel>
                        <Input
                          type="text"
                          id="address1"
                          {...register('address1', { required: true })}
                        />
                        <FormHelperText color="red">
                          {errors.address1?.type === 'required' &&
                            'Address Type is required'}
                        </FormHelperText>
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl>
                        <FormLabel>Address 2</FormLabel>
                        <Input
                          type="text"
                          id="address2"
                          {...register('address2', { required: true })}
                        />
                        <FormHelperText color="red">
                          {errors.address2?.type === 'required' &&
                            'Address Type is required'}
                        </FormHelperText>
                      </FormControl>
                    </Box>
                  </HStack>
                  <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      id="email"
                      {...register('email', { required: true })}
                    />
                    <FormHelperText color="red">
                      {errors.email?.type === 'required' &&
                        'Email Address is required'}
                    </FormHelperText>
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        {...register('password', {
                          required: true,
                          pattern:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{10,30}$/,
                          minLength: 10,
                          maxLength: 30,
                        })}
                      />
                      <InputRightElement h={'full'}>
                        <Button
                          variant={'ghost'}
                          onClick={() =>
                            setShowPassword(showPassword => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                        <FormHelperText color="red">
                          {errors.password?.type === 'required' &&
                            'Password is required'}
                        </FormHelperText>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Upload Image</FormLabel>
                    <input id="org_image" type="file" onChange={handleChange} />
                  </FormControl>
                  <Stack spacing={5} pt={2}>
                    <Button
                      isLoading={loading}
                      loadingText="Submitting"
                      size="md"
                      type="submit"
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}
                    >
                      Sign Up
                    </Button>
                  </Stack>
                  <Stack justifyContent={'center'} pt={2} direction="row">
                    <Stack>
                      <Text align={'center'}>Already a user?</Text>
                    </Stack>
                    <Stack>
                      <Text color="blue.600" cursor={'pointer'} onClick={onOpen}>
                        Sign In
                      </Text>
                    </Stack>
                  </Stack>
                  <SignInModal
                    onOpen={onOpen}
                    isOpen={isOpen}
                    onClose={onClose}
                  />
                </Stack>
              </Box>
            </form>
          </Stack>
        </Flex>
        <Footer />
      </ChakraProvider>
    );
  }