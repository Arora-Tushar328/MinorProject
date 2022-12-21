import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Text,
  Stack,
  InputRightElement,
  ChakraProvider,
  theme,
  useDisclosure,
  Button,
  FormHelperText,
  Heading,
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
// import SignInModal from '../signInModal/signIn';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';
import { useForm } from 'react-hook-form';
import { useOrg } from '../../utils/context/OrgContext';

export default function SignUp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);
  const [file, setFile] = useState();
  const {registerOrg} = useOrg(); 
  const [loading, setLoading] = useState(false);
  const [orgInfo, setOrgInfo] = useState({
    category: '',
    name: '',
    email: '',
    description: '',
    type: '',
    password: '',
    address1: '',
    address2: '',
    city: '',
    pincode: '',
    state: '',
    price: 0,
    url: '',
  });
  const handleFormFields = e => {
    console.log(e.target.value);
    setOrgInfo(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const onSubmit = async () => {
    const data = {
      name: orgInfo.name,
      email: orgInfo.email,
      type: orgInfo.type,
        address: {
          line_1: orgInfo.address1,
          line_2: orgInfo.address2,
          city_village: orgInfo.city,
          state: orgInfo.state,
          pin_code: orgInfo.pincode,
        },
      category: orgInfo.category,
      price: orgInfo.price,
      password: orgInfo.password,
      url: orgInfo.url,
      description: orgInfo.description,
    };
    console.log(data);
    await registerOrg(data)
      .then(res => {
        if (res) {
          orgInfo.name = '';
          orgInfo.address1 = '';
          orgInfo.address2 = '';
          orgInfo.city = '';
          orgInfo.state = '';
          orgInfo.pincode = '';
          orgInfo.email = '';
          orgInfo.type = '';
          orgInfo.category = '';
          orgInfo.price = 0;
          orgInfo.password = '';
          orgInfo.url = '';
        } else {
          console.log('Error occurred');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = handleSubmit(async (mydata, e) => {
  //   e?.preventDefault();
  //   console.log(mydata);
  //   setLoading(true);
  // });

  return (
    <>
      <Navigation />
      <Flex w="100%" minH={'80vh'} align={'center'} justify={'center'}>
        <Stack
          w={{ base: '80%', md: '100%' }}
          spacing={8}
          mx={'auto'}
          maxW={'80%'}
          py={12}
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
          <Box rounded={'lg'} bg="gray.50" boxShadow={'lg'} p={5}>
            <Stack spacing={4}>
              <Stack w="100%" direction={'row'}>
                {/* <Stack w="50%"> */}
                <FormControl>
                  <FormLabel ml="1%" htmlFor="name">
                    Organisations Name
                  </FormLabel>
                  <Input type="text" id="name" onChange={handleFormFields} />
                </FormControl>
                <Stack w="50%">
                  <FormControl>
                    <FormLabel ml="1%" htmlFor="email">
                      Email address
                    </FormLabel>
                    <Input
                      type="email"
                      onChange={handleFormFields}
                      id="email"
                    />
                  </FormControl>
                </Stack>
              </Stack>

              <Stack w="100%" direction={'row'}>
                <Stack w="50%">
                  <FormControl>
                    <FormLabel ml="1%" htmlFor="type">
                      Water Type
                    </FormLabel>
                    <Input
                      type="text"
                      onChange={handleFormFields}
                      placeholder="Recycled water, Ground Water"
                      id="type"
                    />
                  </FormControl>
                </Stack>
                <Stack w="50%">
                  <FormControl>
                    <FormLabel ml="1%">State</FormLabel>
                    <Input type="text" id="state" onChange={handleFormFields} />
                  </FormControl>
                </Stack>
              </Stack>

              <Stack w="100%" direction={'row'}>
                <Stack w="50%">
                  <FormControl>
                    <FormLabel ml="1%">Address Line 1</FormLabel>
                    <Input
                      type="text"
                      onChange={handleFormFields}
                      id="address1"
                    />
                  </FormControl>
                </Stack>
                <Stack w="50%">
                  <FormControl>
                    <FormLabel ml="1%">Address Line 2</FormLabel>
                    <Input
                      type="text"
                      onChange={handleFormFields}
                      id="address2"
                    />
                  </FormControl>
                </Stack>
              </Stack>

              <Stack w="100%" direction={'row'}>
                <Stack w="50%">
                  <FormControl>
                    <FormLabel ml="1%">City / Village</FormLabel>
                    <Input type="text" onChange={handleFormFields} id="city" />
                    <FormHelperText color="red">
                      {errors.city?.type === 'required' &&
                        'City name is required'}
                    </FormHelperText>
                  </FormControl>
                </Stack>
                <Stack w="50%">
                  <FormControl>
                    <FormLabel ml="1%">Pin Code</FormLabel>
                    <Input
                      type="text"
                      onChange={handleFormFields}
                      id="pincode"
                    />
                    <FormHelperText color="red">
                      {errors.pincode?.type === 'required' &&
                        'Pin code is required'}
                    </FormHelperText>
                  </FormControl>
                </Stack>
              </Stack>

              <Stack w="100%" direction={'row'}>
                <Stack w="50%">
                  <FormControl id="category">
                    <FormLabel ml="1%">Organisation Type</FormLabel>
                    <Input
                      type="text"
                      onChange={handleFormFields}
                      placeholder="Private, Public, Semi-Government"
                      id="category"
                    />
                    <FormHelperText color="red">
                      {errors.category?.type === 'required' &&
                        'Organisation type is required'}
                    </FormHelperText>
                  </FormControl>
                </Stack>
                <Stack w="50%">
                  <FormControl>
                    <FormLabel ml="1%">Price</FormLabel>
                    <Input type="text" id="price" onChange={handleFormFields} />
                    <FormHelperText color="red">
                      {errors.price?.type === 'required' &&
                        'Price input is required'}
                    </FormHelperText>
                  </FormControl>
                </Stack>
              </Stack>

              <Stack w="100%" direction={'row'}>
                <Stack w="50%">
                  <FormControl id="password">
                    <FormLabel ml="1%">Password</FormLabel>
                    <InputGroup>
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={handleFormFields}
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
                </Stack>
                <Stack w="50%">
                  <FormControl>
                    <FormLabel ml="1%">Add Image URL</FormLabel>
                    <Input type="text" onChange={handleFormFields} id="url" />
                  </FormControl>
                </Stack>
              </Stack>
              <FormControl>
                <FormLabel ml="1%">Org Description</FormLabel>
                <Textarea
                  id="description"
                  onChange={handleFormFields}
                  placeholder="description"
                  size="md"
                  rows="3"
                />
              </FormControl>

              <Stack spacing={5} pt={2}>
                <Button
                  isLoading={loading}
                  loadingText="Submitting"
                  size="md"
                  w="40%"
                  alignSelf={'center'}
                  onClick={onSubmit}
                  type="submit"
                  bg={'#3A72CD'}
                  color={'white'}
                  _hover={{
                    bg: '#3A72CD',
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
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </>
  );
}
