import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Heading,
  FormLabel,
  FormControl,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Stack,
  FormHelperText,
} from '@chakra-ui/react';

const Edit = () => {
  const [showPassword, setShowPassword] = useState(false);
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

  const email = 'molatipaballo@gmail.com';
  const username = 'molati';
  const contry = 'Lesotho';
  const state = 'Maseru';

  return (
    <Box>
      <Heading as="h1" fontSize="4xl" fontWeight="bold" mb={10}>
        <mark
          style={{
            backgroundColor: '#C3D0F9',
            borderRadius: '25px',
            padding: '0 12px 2px 12px',
            marginRight: '3px',
          }}
        >
          Edit
        </mark>
        Contracts
      </Heading>
      <Box w="100%">
        <form onSubmit={onSubmit}>
          <Stack spacing={4}>
            <Stack w="100%" direction={'row'}>
              <Stack w="50%">
                <FormControl>
                  <FormLabel ml="1%">User Name</FormLabel>
                  <Input
                    type="text"
                    borderWidth={'2px'}
                    id="username"
                    placeholder={username}
                    {...register('username')}
                  />
                </FormControl>
              </Stack>
              <Stack w="50%">
                <FormControl>
                  <FormLabel ml="1%">Email address</FormLabel>
                  <Input
                    type="email"
                    borderWidth={'2px'}
                    id="email"
                    placeholder={email}
                    {...register('email')}
                  />
                </FormControl>
              </Stack>
            </Stack>

            <Stack w="100%" direction={'row'}>
              <Stack w="50%">
                <FormControl>
                  <FormLabel ml="1%">Country</FormLabel>
                  <Input
                    type="text"
                    borderWidth={'2px'}
                    placeholder={contry}
                    id="country"
                    {...register('country')}
                  />
                </FormControl>
              </Stack>
              <Stack w="50%">
                <FormControl>
                  <FormLabel ml="1%">State</FormLabel>
                  <Input
                    type="text"
                    borderWidth={'2px'}
                    id="state"
                    placeholder={state}
                    {...register('state')}
                  />
                </FormControl>
              </Stack>
            </Stack>

            <Stack w="100%" direction={'row'}>
              <Stack w="50%">
                <FormControl>
                  <FormLabel ml="1%">city/village</FormLabel>
                  <Input
                    borderWidth={'2px'}
                    type="text"
                    id="city"
                    {...register('city')}
                  />
                </FormControl>
              </Stack>
              <Stack w="50%">
                <FormControl>
                  <FormLabel ml="1%">Pin Code</FormLabel>
                  <Input
                    borderWidth={'2px'}
                    type="text"
                    id="Pincode"
                    {...register('Pincode')}
                  />
                </FormControl>
              </Stack>
            </Stack>

            <Stack w="100%" direction={'row'}>
              <Stack w="50%">
                <FormControl id="waterType">
                  <FormLabel ml="1%">Type of Water</FormLabel>
                  <Input
                    borderWidth={'2px'}
                    type="text"
                    id="waterType"
                    {...register('waterType')}
                  />
                </FormControl>
              </Stack>
              <Stack w="50%">
                <FormControl>
                  <FormLabel ml="1%">Price</FormLabel>
                  <Input
                    borderWidth={'2px'}
                    type="text"
                    id="price"
                    {...register('price')}
                  />
                </FormControl>
              </Stack>
            </Stack>

            <Stack w="100%" direction={'row'}>
              <Stack w="50%">
                <FormControl>
                  <FormLabel ml="1%">Address 1</FormLabel>
                  <Input
                    borderWidth={'2px'}
                    type="text"
                    id="address1"
                    {...register('address1')}
                  />
                </FormControl>
              </Stack>
              <Stack w="50%">
                <FormControl>
                  <FormLabel ml="1%">Address 2</FormLabel>
                  <Input
                    borderWidth={'2px'}
                    type="text"
                    id="address2"
                    {...register('address2')}
                  />
                </FormControl>
              </Stack>
            </Stack>

            <FormControl>
              <FormLabel ml="1%">Add Image URL</FormLabel>
              <Input
                borderWidth={'2px'}
                type="text"
                id="img_url"
                {...register('img_url')}
              />
            </FormControl>
            <Stack spacing={5} pt={2}>
              <Button
                isLoading={loading}
                loadingText="Submitting"
                size="md"
                w="40%"
                alignSelf={'center'}
                type="submit"
                bg={'#3A72CD'}
                color={'white'}
                _hover={{
                  bg: '#3A72CD',
                }}
              >
                Update Organisation Details
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Edit;
