import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Flex,
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  Heading,
  Text,
  IconButton,
  useDisclosure,
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
// import FullScreenLoader from '../../components/Loader/FullScreenLoader';
import { AiOutlineSearch } from 'react-icons/ai';
import { CiTempHigh } from 'react-icons/ci';
import { IoIosWater } from 'react-icons/io';
import { GiLevelEndFlag } from 'react-icons/gi';
import { ImLocation } from 'react-icons/im';
import {
  MdOutlineConnectWithoutContact,
  MdOutlineDirtyLens,
} from 'react-icons/md';
import { CgOverflow } from 'react-icons/cg';
import { BsSpeedometer2 } from 'react-icons/bs';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { useCenter } from '../../utils/context/CenterContext';
import { useAuth } from '../../utils/context/AuthContext';
import Footer from '../footer/footer';
import Navigation from '../navigation/navigation';
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

// mapboxgl.accessToken =
//   'pk.eyJ1IjoiZGlzaGEtYmhhcmR3YWoiLCJhIjoiY2tubmd4d3llMHl2djJucnk4eGltMWd5eCJ9.QVQays7LSuE3CG1K0wP1gw';

// const nearbycenters = {
//   mainCenter: {
//     center_id: 0,
//     corrdinates: [77.216721, 28.6448],
//   },
//   nearby: [
//     {
//       center_id: 1,
//       corrdinates: [77.278618, 28.627949],
//     },
//     {
//       center_id: 2,
//       corrdinates: [77.202805, 28.558899],
//     },
//     {
//       center_id: 3,
//       corrdinates: [77.1242, 28.662],
//     },
//   ],
// };

const Center = () => {
  // const { nearbyCenters } = useCenter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useAuth();
  const { addCenter, nearbyCenters,getNearbyCenter } = useCenter();
  useEffect(() => {
    getNearbyCenter();
  }, [])
  console.log(nearbyCenters)
  const [centerInfo, setCenterInfo] = useState({
    centerName: '',
    centerMail: '',
    address_line1: '',
    address_line2: '',
    city: '',
    pin_code: '',
    state: '',
    admin: '',
    phone: '',
    chairman: '',
  });
  const handleFormFields = e => {
    setCenterInfo(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const [viewState, setViewState] = React.useState({
    longitude: nearbyCenters.main.doc.location.long,
    latitude: nearbyCenters.main.doc.location.lat,
    zoom: 12,
  });
  const {
    isOpen: modalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  useEffect(() => {
    getNearbyCenter(201312)
  }, [])
  

  const [resize, setResize] = React.useState('vertical');

  const onSubmit = () => {
    const data = {
      name: centerInfo.centerName,
      address: {
        line_1: centerInfo.address_line1,
        line_2: centerInfo.address_line2,
        city_village: centerInfo.city,
        state: centerInfo.state,
        pin_code: centerInfo.pin_code,
      },
      admin: centerInfo.admin,
      chairman: centerInfo.chairman,
      phone: centerInfo.phone,
      center_email: centerInfo.centerMail,
    };
    addCenter(data)
      .then(res => {
        if (res) {
          centerInfo.centerName = '';
          centerInfo.address_line1 = '';
          centerInfo.address_line2 = '';
          centerInfo.city = '';
          centerInfo.state = '';
          centerInfo.pin_code = '';
          centerInfo.admin = '';
          centerInfo.chairman = '';
          centerInfo.centerMail = '';
          onModalClose();
        } else {
          console.log('Error occurred');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Navigation />
      <Flex direction="column" px={['8', '16', '20', '32']}>
        <Flex justifyContent={'space-between'} alignItems="center">
          {user && user.role === 'inspector' ? (
            <Button onClick={onModalOpen} bg="#322D39">
              Add new Center
            </Button>
          ) : (
            ''
          )}
          <Box mb={4} ml="auto" borderRadius="full" w="30%" mt={3}>
            <InputGroup boxShadow="rgba(0, 0, 0, 0.16)" bg="#eae8ed" w="100%">
              <Input type="tel" placeholder="Search for a center" />
              <InputRightAddon
                children={<AiOutlineSearch color="#FBFFFF" />}
                bg="#322D39"
              />
            </InputGroup>
          </Box>
        </Flex>
        <Box h="500px">
          <ReactMapGL
            initialViewState={{
              longitude: viewState.longitude,
              latitude: viewState.latitude,
              zoom: viewState.zoom,
            }}
            mapboxAccessToken="pk.eyJ1IjoiZGlzaGEtYmhhcmR3YWoiLCJhIjoiY2tubmd4d3llMHl2djJucnk4eGltMWd5eCJ9.QVQays7LSuE3CG1K0wP1gw"
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <Marker
              key={nearbyCenters.main.doc.id}
              latitude={nearbyCenters.main.doc.location.lat}
              longitude={nearbyCenters.main.doc.location.long}
            >
              <IconButton
                display="inline"
                icon={<ImLocation />}
                bg="none"
                color="red"
                fontSize="3rem"
              />
            </Marker>
            {nearbyCenters.others.map(center => {
              return (
                <Marker
                  key={center.id}
                  latitude={center.location.lat}
                  longitude={center.location.long}
                >
                  <IconButton
                    display="inline"
                    icon={<ImLocation />}
                    bg="none"
                    color="black"
                    fontWeight="bold"
                    fontSize="2rem"
                  />
                </Marker>
              );
            })}
          </ReactMapGL>
        </Box>
        <Flex
          w="100%"
          flexDirection="column"
          alignItems="center"
          mt={12}
          mb={14}
        >
          <Heading fontSize="2.7rem" letterSpacing={1.2}>
            <span className="highlight">Know your Resource</span>
          </Heading>
          <Text mt={3} fontSize="1.2rem">
            Water Resource management is the duty of each one and us, so know
            your resources and value them accordingly
          </Text>
          <Box
            width="25%"
            h="3px"
            bg="brand.500"
            mt={4}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          />
        </Flex>
        <Flex direction={'column'} px="8">
          <Flex mb={3} w="100%" justifyContent={'center'} mx="12">
            <Box w="30%">
              <Heading fontSize="1.5rem">
                Water Temperature
                <IconButton
                  display="inline"
                  icon={<CiTempHigh />}
                  bg="none"
                  color="#3066BE"
                  fontSize="1.6rem"
                  ml={2}
                />
              </Heading>
              <Text mt={4} fontSize="1.2rem">
                {nearbyCenters.main.data[0]} <span>&#176;</span> C
              </Text>
            </Box>
            <Box w="30%">
              <Heading fontSize="1.5rem">
                Water Flow Rate{'   '}
                <IconButton
                  display="inline"
                  icon={<IoIosWater />}
                  bg="none"
                  color="#3066BE"
                  fontSize="1.6rem"
                  ml={2}
                />
              </Heading>
              <Text mt={4} fontSize="1.2rem">
              {nearbyCenters.main.data[3]} L/M
              </Text>
            </Box>
            <Box w="30%">
              <Heading fontSize="1.5rem">
                Volume Flow rate{'   '}
                <IconButton
                  display="inline"
                  icon={<CgOverflow />}
                  bg="none"
                  color="#3066BE"
                  fontSize="1.6rem"
                  ml={2}
                />
              </Heading>
              <Text mt={4} fontSize="1.2rem">
              {nearbyCenters.main.data[4]} L/M
              </Text>
            </Box>
          </Flex>
          <Flex mb={2} mt={8} w="100%" justifyContent={'center'} mx="12">
            <Box w="30%">
              <Heading fontSize="1.5rem">
                Ph Level
                <IconButton
                  display="inline"
                  icon={<GiLevelEndFlag />}
                  bg="none"
                  color="#3066BE"
                  fontSize="1.6rem"
                  ml={2}
                />
              </Heading>
              <Text mt={4} fontSize="1.2rem">
              {nearbyCenters.main.data[1]} 
              </Text>
            </Box>
            <Box w="30%">
              <Heading fontSize="1.5rem">
                Turbidity{'   '}
                <IconButton
                  display="inline"
                  icon={<MdOutlineDirtyLens />}
                  bg="none"
                  color="#3066BE"
                  fontSize="1.6rem"
                  ml={2}
                />
              </Heading>
              <Text mt={4} fontSize="1.2rem">
              {nearbyCenters.main.data[5]} {' '} NTU
              </Text>
            </Box>
            <Box w="30%">
              <Heading fontSize="1.5rem">
                Total dissolved solids(TDS){'   '}
                <IconButton
                  display="inline"
                  icon={<BsSpeedometer2 />}
                  bg="none"
                  color="#3066BE"
                  fontSize="1.6rem"
                  ml={2}
                />
              </Heading>
              <Text mt={4} fontSize="1.2rem">
                770 ppm
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Flex
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
          w="85%"
          border="none"
          // borderColor="#322D39"
          borderRadius="lg"
          justifyContent={'center'}
          m="auto"
          mt={16}
        >
          <Flex
            w="30%"
            bg="background.500"
            p={4}
            color="white"
            borderRadius="lg"
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection="column"
            pb="auto"
            fontWeight="600"
            fontSize="1.9rem"
            lineHeight={'1.8'}
            letterSpacing="0.3rem"
          >
            <Text>Who's the</Text>
            <Text>Supplier ?</Text>
          </Flex>
          <Box w="70%" h="100%">
            <Flex w="100%" h="100%" flexDirection={'column'}>
              <Box
                w="100%"
                h="50%"
                borderBottom="1px solid #c6c9cf"
                pl={5}
                py={6}
              >
                <Heading fontSize="1.7rem"> Center's Information</Heading>
                <Text mt={3} fontSize="1.18rem">
                  {' '}
                  <span style={{ fontWeight: 600 }}>Address: </span>
                  {`${nearbyCenters.main.doc.address.line_1} ${nearbyCenters.main.doc.address.line_2} ${nearbyCenters.main.doc.address.city_village}`}
                </Text>
                <Text mt={3} fontSize="1.18rem">
                  {' '}
                  <span style={{ fontWeight: 600 }}>Chairman:</span> Amit Yadav,
                  IAS
                </Text>
                <Text mt={3} fontSize="1.18rem">
                  {' '}
                  <span style={{ fontWeight: 600 }}>Phone: </span> 011 2334 8476{' '}
                </Text>
              </Box>
              <Flex
                w="100%"
                h="50%"
                py={6}
                pl={5}
                justifyContent="space-between"
              >
                <Box>
                  <Heading fontSize="1.7rem" mt={2}>
                    Sunil Tripathi
                  </Heading>
                  <Text mt={2} fontSize="1rem">
                    {' '}
                    Admin
                  </Text>
                </Box>
                <Flex align={'center'}>
                  <Button
                    mr={27}
                    color={'white'}
                    textAlign="center"
                    p={5}
                    fontSize="1.4rem"
                    _hover={{ color: 'white' }}
                    height="80%"
                    bg="#3A72CD"
                    onClick={onOpen}
                  >
                    Connect
                    <IconButton
                      display="inline"
                      icon={<MdOutlineConnectWithoutContact />}
                      bg="none"
                      color="white"
                      fontSize="1.8rem"
                      ml={2}
                      mr="-20px"
                      _hover={{ color: 'white' }}
                    />
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader m="auto">Send your Query</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              {!user ? (
                <FormControl>
                  <Input
                    type={'email'}
                    placeholder="Email"
                    size="lg"
                    mb={3}
                    rows="5"
                    resize={resize}
                  />
                </FormControl>
              ) : (
                ''
              )}
              <FormControl>
                <Select placeholder="Select option" size="lg">
                  <option value="option1">Excess Water</option>
                  <option value="option2">Insufficient Water</option>
                </Select>
              </FormControl>
              <FormControl>
                <Textarea
                  placeholder="Write your Query Here"
                  size="md"
                  mt={3}
                  rows="5"
                  resize={resize}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Send
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal
          size="4xl"
          isOpen={modalOpen}
          onClose={onModalClose}
          isCentered
          bg="blue"
        >
          <ModalOverlay />

          <ModalContent>
            <ModalHeader m="auto">Add a new Center</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Flex>
                <FormControl>
                  <FormLabel fontSize={18} htmlFor="centerName">
                    Center name
                  </FormLabel>
                  <Input
                    id="centerName"
                    type={'text'}
                    onChange={handleFormFields}
                    placeholder="Name"
                    size="lg"
                    mb={3}
                  />
                </FormControl>
                <FormControl mb={6} ml={'4'}>
                  <FormLabel fontSize={18} htmlFor="centerMail">
                    Center's Email Id
                  </FormLabel>
                  <Input
                    id="centerMail"
                    onChange={handleFormFields}
                    placeholder="Center's Email Id"
                  />
                </FormControl>
              </Flex>
              <FormControl mb={6}>
                <FormLabel fontSize={18} htmlFor="address_line1">
                  Address Line 1
                </FormLabel>
                <Input
                  id="address_line1"
                  onChange={handleFormFields}
                  placeholder="Address line 1"
                  //   value = {user.address.line_1}
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
                  //   value = {user.address.line2}
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
                    //   value = {user.address.city_village}
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
                    //   value = {user.state}
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
                    //   value = {user.pin_code}
                  />
                </FormControl>
                <FormControl mb={6} ml={'4'}>
                  <FormLabel fontSize={18} htmlFor="admin">
                    Admin Name
                  </FormLabel>
                  <Input id="admin" onChange={handleFormFields} />
                </FormControl>
              </Flex>
              <Flex>
                <FormControl mb={6}>
                  <FormLabel fontSize={18} htmlFor="phone">
                    Phone Number
                  </FormLabel>
                  <Input
                    type="number"
                    id="phone"
                    onChange={handleFormFields}
                    placeholder="Center's Phone number"
                    //   value = {user.pin_code}
                  />
                </FormControl>
                <FormControl mb={6} ml={'4'}>
                  <FormLabel fontSize={18} htmlFor="chairman">
                    Chairman's Name
                  </FormLabel>
                  <Input id="chairman" onChange={handleFormFields} />
                </FormControl>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button onClick={onSubmit} colorScheme="blue" mr={3}>
                Add
              </Button>
              <Button onClick={onModalClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
      <Footer />
    </>
  );
};

export default Center;

//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const [lng, setLng] = useState(-70.9);
//   const [lat, setLat] = useState(42.35);
//   const [zoom, setZoom] = useState(9);

//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: 'mapbox://styles/mapbox/dark-v10',
//       center: [lng, lat],
//       zoom: zoom,
//     });
//   });

//   useEffect(() => {
//     if (!map.current) return; // wait for map to initialize
//     map.current.on('move', () => {
//       setLng(map.current.getCenter().lng.toFixed(4));
//       setLat(map.current.getCenter().lat.toFixed(4));
//       setZoom(map.current.getZoom().toFixed(2));
//     });
//   });
