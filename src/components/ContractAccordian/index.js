import {
  Input,
  ModalFooter,
  FormControl,
  ModalBody,
  ModalCloseButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Select,
  Textarea,
  FormLabel,
} from '@chakra-ui/react';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Tag,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import WarningModal from '../Modal/WarningModal';
import { Link } from 'react-router-dom';

import Table from '../Table';
import { JsonToTable } from 'react-json-to-table';
import { useAuth } from '../../utils/context/AuthContext';
// import ReviewModal from '../reviewModal/reviewModal';

const ContractAccordian = ({ data, show, showUpdate }) => {
  const id = data.data._id;
  const orgId = data.orgdata._id;
  const [deliveryStatus, setDeliveryStatus] = useState('');
  const { user } = useAuth();
  const [message, setMessage] = useState('');
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { isOpenUpdate, onOpenUpdate, onCloseUpdate } = useDisclosure();

  const {
    isOpen: isWarnOpen,
    onOpen: onWarnOpen,
    onClose: onWarnClose,
  } = useDisclosure();
  const {
    isOpen: isReviewOpen,
    onOpen: onReviewOpen,
    onClose: onReviewClose,
  } = useDisclosure();

  const [warnModalData, setWarnModalData] = useState({
    title: 'Title',
    body: 'Body',
    onConfirm: () => {},
  });

  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time =
      date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
  }

  const onClickAdd = async () => {
    const finalData = {
      id: id,
      water: 50,
      message: message,
      state: deliveryStatus,
    };
    const response = await fetch(`http://localhost:6969/request/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(finalData),
    });
    console.log(response);
  };

  const onCommentChange = e => {
    setMessage(e.target.value);
  };
  const handleUpdate = async status => {
    console.log(status);
    try {
      //Write code for change
      if (status === 'Approved') {
        await fetch(`http://localhost:6969/request/accept`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: data.data._id,
          }),
        });
      } else if (status === 'Reject') {
        await fetch(`http://localhost:6969/request/reject`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: data.data._id,
          }),
        });
      }
    } catch (err) {
      console.log('Update Error', err);
    }
  };
  const [resize, setResize] = React.useState('vertical');
  const [ratingInfo, setRatingInfo] = useState({
    rating: 1,
  });

  const handleFormFields = e => {
    setRatingInfo(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleRating = async () => {
    const data = {
      review: {
        rating: ratingInfo.rating,
        username: user.name,
        comment: message,
      },
      id: orgId,
    };
    const response = await fetch(
      `http://localhost:6969/organization/updateReview`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    console.log(response);
  };

  return (
    <Box>
      <Accordion allowMultiple w="full">
        <AccordionItem
          borderTop="none"
          borderBottom="none"
          borderRadius="lg"
          my="2.5"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
        >
          {({ isExpanded }) => (
            <>
              <AccordionButton
                borderTopRadius="lg"
                borderBottomRadius="none"
                py="4"
                px="6"
                _focus={{}}
                _expanded={{ color: 'brand.600', bg: 'brand.400' }}
                role="group"
              >
                <Flex flexDir="column" textAlign="left" grow="1">
                  <Text as="h2" fontWeight="600" fontSize="xl">
                    {`${data.data.username}- ${data.orgdata.name}`}
                  </Text>
                  <Flex mt="3" alignItems="center" wrap="wrap">
                    <Tag bg="none" fontSize={'md'}>
                      {' '}
                      <span style={{ fontWeight: 'bold' }}>
                        Water Requirements :
                      </span>
                      {data.data.requirements} L
                    </Tag>
                  </Flex>
                </Flex>
                <AccordionIcon h="6" w="6" />
              </AccordionButton>
              <AccordionPanel borderBottomRadius="lg" py="4" px="8">
                <Flex
                  flexDir="column"
                  width="100%"
                  // justifyContent="space-between"
                  // alignItems="flex-start"
                >
                  <Flex
                    direction={'row'}
                    justifyContent=" space-between"
                    w="100%"
                  >
                    <Flex>
                      <Text fontWeight={'bold'}>Organisation Name:</Text>
                      <Text> {data.orgdata.name} </Text>
                    </Flex>
                    <Flex>
                      <Text fontWeight={'bold'}>User Name : </Text>
                      <Text> {data.data.username} </Text>
                    </Flex>
                  </Flex>
                  <Flex mt={4}>
                    <Text fontWeight={'bold'}>Address :</Text>
                    <Text>
                      {`${data.data.address.line_1} ${data.data.address.line_2},${data.data.address.city_village}, ${data.data.address.state}-${data.data.address.pin_code} `}
                    </Text>
                  </Flex>
                  <Flex mt={4}>
                    <Text fontWeight={'bold'}>Water Type :</Text>
                    <Text>{data.orgdata.type}</Text>
                  </Flex>
                  <Flex mt={4} justifyContent="space-between">
                    <Flex>
                      <Text fontWeight={'bold'}>Price:</Text>
                      <Text>Rs. {data.data.price} </Text>
                    </Flex>
                    <Flex>
                      <Text fontWeight={'bold'}>Organisation Type : </Text>
                      <Text> {data.orgdata.category} </Text>
                    </Flex>
                  </Flex>
                  <Flex mt={4}>
                    <Text fontWeight={'bold'}>Purpose :</Text>
                    <Text>{data.data.purpose}</Text>
                  </Flex>
                  {data.data.state === 'ACCEPTED' ? (
                    <>
                      <Flex mt={4} direction="column">
                        <Box>
                          <a
                            href={
                              'http://localhost:6969/request/getContractData/' +
                              data.data.chain
                            }
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Button>Link to contract data</Button>
                          </a>
                        </Box>
                        <br />
                        <Flex>
                          <JsonToTable
                            json={JSON.parse(data.data.delivery)
                              .reverse()
                              .map(function (row) {
                                row.timestamp = timeConverter(
                                  row.timestamp / 1000
                                );
                                return row;
                              })}
                          />
                        </Flex>
                      </Flex>
                      {showUpdate ? (
                        <Button mt={6} onClick={onOpen}>
                          Update delivery status!
                        </Button>
                      ) : (
                        <Button mt={6} onClick={onReviewOpen}>
                          Write a Review
                        </Button>
                      )}
                    </>
                  ) : (
                    ' '
                  )}

                  <Modal isOpen={isOpen} onClose={onClose} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader m="auto">Update!</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody pb={6}>
                        <FormControl>
                          <Select
                            id="idne"
                            onChange={e => setDeliveryStatus(e.target.value)}
                            placeholder="Select option"
                            size="lg"
                          >
                            <option value="INTRANSIT">INTRANSIT</option>
                            <option value="DISCHARGE">DISCHARGE</option>
                          </Select>
                        </FormControl>
                        <FormControl>
                          <Textarea
                            placeholder="Message"
                            size="md"
                            mt={3}
                            rows="5"
                            id="message"
                            // onChange={e => setMessage(e.target.value)}
                            onChange={onCommentChange}
                            resize={resize}
                          />
                        </FormControl>
                      </ModalBody>

                      <ModalFooter>
                        <Button onClick={onClickAdd} colorScheme="blue" mr={3}>
                          Add
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>

                  <Modal
                    isOpen={isReviewOpen}
                    onClose={onReviewClose}
                    isCentered
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader m="auto">Write a Review</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody pb={6}>
                        <FormControl>
                          <FormLabel fontSize={18} htmlFor="chairman">
                            Rating
                          </FormLabel>
                          <Input id="rating" onChange={handleFormFields} />
                        </FormControl>
                        <FormControl>
                          <Textarea
                            placeholder="Message"
                            size="md"
                            mt={3}
                            rows="5"
                            id="message"
                            // onChange={e => setMessage(e.target.value)}
                            onChange={onCommentChange}
                          />
                        </FormControl>
                      </ModalBody>

                      <ModalFooter>
                        <Button
                          onClick={handleRating}
                          colorScheme="blue"
                          mr={3}
                        >
                          Add
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Flex>
                {show ? (
                  <Flex mt="6" w="full">
                    <WarningModal
                      isOpen={isWarnOpen}
                      onClose={onWarnClose}
                      onConfirm={warnModalData.onConfirm}
                      title={warnModalData.title}
                      body={warnModalData.body}
                    />
                    <>
                      <Button
                        fontSize="sm"
                        fontWeight="medium"
                        mr="4"
                        bg="brand.600"
                        _hover={{ backgroundColor: 'myGray.500' }}
                        onClick={() => {
                          setWarnModalData({
                            title: 'Accept Question',
                            body: 'Are you sure you want to accept this question?',
                            onConfirm: () => handleUpdate('Approved'),
                          });
                          onWarnOpen();
                        }}
                      >
                        Accept
                      </Button>
                      <Button
                        fontSize="sm"
                        fontWeight="medium"
                        bg="brand.400"
                        color="brand.600"
                        mr="4"
                        _hover={{ backgroundColor: 'brand.450' }}
                        onClick={() => {
                          setWarnModalData({
                            title: 'Reject Question',
                            body: 'Are you sure you want to reject this question?',
                            onConfirm: () => handleUpdate('Reject'),
                          });
                          onWarnOpen();
                        }}
                      >
                        Reject
                      </Button>
                    </>
                  </Flex>
                ) : (
                  ''
                )}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default ContractAccordian;
ContractAccordian.defaultProps = {
  show: false,
};