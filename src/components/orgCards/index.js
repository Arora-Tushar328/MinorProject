import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Stack,
  Image,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  Textarea,
  ModalFooter,
  useDisclosure,
  Input,
  FormLabel,
  Box,
} from '@chakra-ui/react';
import { Card, CardBody, CardFooter } from '@chakra-ui/card';
import { useAuth } from '../../utils/context/AuthContext';
import { useContract } from '../../utils/context/ContractContext';
import QueryModal from '../sendQueryModal';
import { useNavigate } from 'react-router-dom';
import { useOrg } from '../../utils/context/OrgContext';

function OrgCards({ orginsation }) {
  const navigate = useNavigate();
  const { currentOrg, setCurrentOrg } = useOrg();
  const { user } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const learnMore = () => {
    setCurrentOrg(orginsation);
    navigate(`/organisations/${orginsation._id}`);
  };

  return (
    <Card
      maxW="sm"
      boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
      p={6}
      borderRadius="lg"
    >
      <CardBody>
          <Image
            src={orginsation.url}
            alt={orginsation.name}
            borderRadius="lg"
            height="70px"
            // minHeight="50px"
          />
        <Stack mt="6" spacing="3">
          <Heading fontSize={'1.5rem'} letterSpacing="0.12rem">
            {orginsation.name}
          </Heading>
          <Text fontSize={'0.95rem'}>{orginsation.address}</Text>
          <Text fontSize={'1.1rem'}>
            {orginsation.description.substring(0, 90)}...
          </Text>
          {/* <Text fontSize={'1.1rem'}> {orginsation.email}</Text> */}
          <Text color="black" fontSize="lg" fontWeight="normal">
            <span style={{ fontWeight: 'bold' }}>Email :</span>{' '}
            {orginsation.email}
          </Text>
          <Text color="black" fontSize="lg" fontWeight="normal">
            <span style={{ fontWeight: 'bold' }}>Price :</span> Rs.
            {orginsation.price} per litre
          </Text>
        </Stack>
      </CardBody>
      <Divider mt={3} />
      <CardFooter>
        <ButtonGroup spacing="2">
          {/* <Button
            variant="solid"
            colorScheme="blue"
            bg="background.500"
            onClick={onOpen}
          >
            Send Request
          </Button> */}
          {user ? (
            <Box
              as="button"
              variant="solid"
              onClick={onOpen}
              bg="#3A72CD"
              color="#FBFFFF"
              colorScheme="blue"
              outline="2px solid transparent"
              outline-offset="2px"
              fontSize={'md'}
              px={4}
              borderRadius={'md'}
              verticalAlign={'middle'}
              fontWeight="semibold"
            >
              Send Request
            </Box>
          ) : (
            <Box
              as="button"
              variant="solid"
              bg="#3A72CD"
              color="#FBFFFF"
              colorScheme="blue"
              outline="2px solid transparent"
              outline-offset="2px"
              fontSize={'md'}
              px={4}
              borderRadius={'md'}
              verticalAlign={'middle'}
              fontWeight="semibold"
              opacity={'0.6'}
              cursor="not-allowed"
              _disabled={{}}
            >
              Send Request
            </Box>
          )}
          <Button
            variant="ghost"
            colorScheme="blue"
            onClick={() => learnMore()}
          >
            Learn more
          </Button>
        </ButtonGroup>
      </CardFooter>
      {user ? (
        <QueryModal
          onOpen={onOpen}
          isOpen={isOpen}
          onClose={onClose}
          orginsation={orginsation}
        />
      ) : (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody pb={6}>Please login First</ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Card>
  );
}

export default OrgCards;
