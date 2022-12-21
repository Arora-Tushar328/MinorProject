import React from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Box, Text, Button, Stack, IconButton, Flex } from '@chakra-ui/react';
import viewPic from '../../pictures/icons/view.png';
import mapsize from '../../pictures/icons/view.png';
import Navigation from '../navigation/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../footer/footer';
import { useParams } from 'react-router-dom';
import { useOrg } from '../../utils/context/OrgContext';
import Organisations from '../orgnisations/organisations';
import { ImLocation } from 'react-icons/im';
// import StarRatingComponent from 'react-star-rating-component';

const reviews = [
  {
    username: 'Christopher',
    rating: 5,
    comment: 'Most reliable for the water transfer',
  },
  {
    username: 'Christlene',
    rating: 4,
    comment: 'Supplies water at promised rate and at promised volumne',
  },
];

function Rating() {
  const { currentOrg } = useOrg();
  console.log(currentOrg);

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
  const [viewState, setViewState] = React.useState({
    longitude: currentOrg.location.long,
    latitude: currentOrg.location.lat,
    zoom: 12,
  });
  return (
    <Box>
      <Navigation />
      <Box w="100%" align={'center'}>
        <Stack
          spacing={8}
          mt="1%"
          w="80%"
          mb="7%"
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack direction={'column'} w={{ base: '100%', md: '60%' }}>
            <Stack>
              <img alt="support_pic" src={currentOrg.url} />
            </Stack>
            <Stack>
              <Text
                mt={'3%'}
                fontSize="2xl"
                fontWeight="semibold"
                textAlign="left"
              >
                {currentOrg.name}
              </Text>
              <Text mb="4%" mt={'1%'} textAlign="left">
                {currentOrg.description}
              </Text>
              <box spacing={5}>
                <Text textAlign="left" mt="1.5%">
                  Address : {currentOrg.address}
                </Text>
                <Text textAlign="left" mt="1.5%">
                  Price : {currentOrg.price}
                </Text>
                <Text textAlign="left" mt="1.5%">
                  Organization Type: {currentOrg.category}
                </Text>
                <Text textAlign="left" mt="1.5%">
                    Water Type : {currentOrg.type}
                  </Text>
                <Flex justifyContent={'space-between'} mr={8}>
                  <Text textAlign="left" mt="1.5%">
                    TDS : {currentOrg.tds} ppm
                  </Text>
                </Flex>
                <Flex justifyContent={'space-between'} mr={8}>
                  <Text textAlign="left" mt="1.5%">
                    Turbidity : {currentOrg.turbidity} NTA
                  </Text>
                  <Text textAlign="left" mt="1.5%">
                    Ph Level: {currentOrg.ph}
                  </Text>
                </Flex>
                {/* <Text textAlign="left" mt="1.5%">
                  Parameters : {parameters}
                </Text> */}
                {/* <Text textAlign="left" mt="1.5%">
                   {descriptionOrg}
                </Text> */}
              </box>
            </Stack>
          </Stack>
          <Stack w="30%">
            {/* <img alt="support_pic" src={mapsize} /> */}
            <Box h="40%">
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
                  key={currentOrg.id}
                  latitude={currentOrg.location.lat}
                  longitude={currentOrg.location.long}
                >
                  <IconButton
                    display="inline"
                    icon={<ImLocation />}
                    bg="none"
                    color="red"
                    fontSize="3rem"
                  />
                </Marker>
              </ReactMapGL>
            </Box>
            <Box mt="2%">
              <Text mt="8.4%" fontWeight={'bold'} textAlign="left" w="100%">
                User's Rating
              </Text>
              {reviews && reviews.length !== 0 ? (
                reviews.map(review => (
                  <Box
                    ml="8px"
                    align="left"
                    shadow="md"
                    borderWidth="1px"
                    p={4}
                    mt="2%"
                  >
                    <Box fontSize={'2xl'} ml="8px">
                      <Text fontSize={'lg'} ml="8px" mt="8px" mb="2px">
                        User Name: {review.username}
                      </Text>
                    </Box>
                    <Box fontSize={'2xl'} ml="8px">
                      <Text fontSize={'lg'} ml="8px" mt="8px" mb="2px">
                        Rating: {review.rating}
                      </Text>
                    </Box>
                    <Stack direction={'row'} borderRadius="md">
                      <Box borderRadius="md">
                        <Text
                          fontWeight={'semibold'}
                          ml="8px"
                          mt="8px"
                          mb="2px"
                        >
                          Review :{' '}
                          <span
                            style={{ marginLeft: '2px', fontWeight: 'normal' }}
                          >
                            {' '}
                            {review.comment}
                          </span>
                        </Text>
                      </Box>
                    </Stack>
                  </Box>
                ))
              ) : (
                <Text>No reviews availables</Text>
              )}
              <Flex direction={'column'}>
                <Box></Box>
              </Flex>
            </Box>
          </Stack>
        </Stack>
        <Footer />
      </Box>
    </Box>
  );
}

export default Rating;
