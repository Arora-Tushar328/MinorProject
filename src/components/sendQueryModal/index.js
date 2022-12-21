import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  Input,
  Button,
  ModalCloseButton,
  FormLabel,
  Flex,
  Textarea,
} from '@chakra-ui/react';
import { useAuth } from '../../utils/context/AuthContext';
import { useContract } from '../../utils/context/ContractContext';

const QueryModal = ({ onClose, onOpen, isOpen, orginsation }) => {
  const { user } = useAuth();
  const { createContract } = useContract();
  // const [queryInfo, setQueryInfo] = useState({
  //   username: user.name,
  //   address_line1: '',
  //   address_line2: '',
  //   city: '',
  //   pin_code: '',
  //   state: '',
  //   purpose: '',
  //   water_req: '',
  // });
  const [queryInfo, setQueryInfo] = useState({
    username: user.name,
    address_line1: user.address.line_1,
    address_line2: user.address.line_2,
    city: user.address.city,
    pin_code: user.address.pin_code,
    state: user.address.state,
    purpose: ' ',
    water_req: '',
  });
  const handleFormFields = e => {
    setQueryInfo(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const onSubmit = () => {
    const data = {
      username: queryInfo.username,
      address: {
        line_1: queryInfo.address_line1,
        line_2: queryInfo.address_line2,
        city_village: queryInfo.city,
        state: queryInfo.state,
        pin_code: queryInfo.pin_code,
      },
      user:'637cdc95d266e9d82bcec623',
      org: orginsation._id,
      price: orginsation.price,
      requirements: queryInfo.water_req,
      purpose: queryInfo.purpose,
    };
    createContract(data)
      .then(res => {
        if (res) {
          queryInfo.purpose = '';
          queryInfo.water_req = '';
          onClose();
        } else {
          console.log('Error occurred');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const [resize, setResize] = React.useState('vertical');
  return (
    <Modal size="4xl" isOpen={isOpen} onClose={onClose} isCentered bg="blue">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader m="auto">Send your Request</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel fontSize={18} htmlFor="username">
              Name
            </FormLabel>
            <Input
              id="username"
              onChange={handleFormFields}
              type={'text'}
              placeholder="Name"
              size="lg"
              mb={3}
              rows="5"
              value={queryInfo.username}
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel fontSize={18} htmlFor="address_line1">
              Address Line 1
            </FormLabel>
            <Input
              id="address_line1"
              onChange={handleFormFields}
              placeholder="Address line 1"
              value={queryInfo.address_line1}
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel fontSize={18} htmlFor="address_line2">
              Address Line 2
            </FormLabel>
            <Input
              id="address_line2"
              onChange={handleFormFields}
              placeholder="Address line 2"
              value={queryInfo.address_line1}
            />
          </FormControl>
          <Flex>
            <FormControl mb={6}>
              <FormLabel fontSize={18} htmlFor="city">
                City / Village
              </FormLabel>
              <Input
                id="city"
                onChange={handleFormFields}
                placeholder="City / Village / Town"
                value={queryInfo.city}
              />
            </FormControl>
            <FormControl mb={6} ml={'4'}>
              <FormLabel fontSize={18} htmlFor="state">
                State
              </FormLabel>
              <Input
                id="state"
                onChange={handleFormFields}
                placeholder="State"
                value={queryInfo.state}
              />
            </FormControl>
          </Flex>
          <Flex>
            <FormControl mb={6}>
              <FormLabel fontSize={18} htmlFor="pin_code">
                Pin Code
              </FormLabel>
              <Input
                id="pin_code"
                onChange={handleFormFields}
                placeholder="Pin Code"
                value={queryInfo.pin_code}
              />
            </FormControl>
            <FormControl mb={6} ml={'4'}>
              <FormLabel fontSize={18} htmlFor="water_req">
                Water Requirement
              </FormLabel>
              <Input
                type={'number'}
                onChange={handleFormFields}
                id="water_req"
                placeholder="Enter water required in litres"
              />
            </FormControl>
          </Flex>
          <FormControl>
            <FormLabel fontSize={18} htmlFor="purpose">
              Purpose
            </FormLabel>
            <Textarea
              id="purpose"
              onChange={handleFormFields}
              placeholder="Purpose"
              size="md"
              rows="2"
              resize={resize}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onSubmit}>
            Send
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default QueryModal;
