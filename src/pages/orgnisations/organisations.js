import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  Select,
  ModalFooter,
  Slider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  FormLabel,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import HeroSection from '../../components/heroSection';
import OrgCards from '../../components/orgCards';
import { useOrg } from '../../utils/context/OrgContext';
import Footer from '../footer/footer';
import Navigation from '../navigation/navigation';

// const allOrgs = [
//   {
//     name: 'Reliance',
//     address: 'Central delhi, 110001, New Delhi,India',
//     desc: 'We offer the fresh and no polluted water at a minimal rate. Our organisation works 24 hour to provide you fresh water ',
//     price: 'Rs.4 per litre',
//     img: 'https://picsum.photos/100',
//     listing:[]
//   },
// {
//   name: 'Tata',
//   address: 'Central delhi, 110001, New Delhi,India',
//   desc: 'We offer the fresh and no polluted water at a minimal rate. Our organisation works 24 hour to provide you fresh water ',
//   price: 'Rs.4 per litre',
//   img: 'https://picsum.photos/100',
// },
// {
//   name: 'Emirates group',
//   address: 'Central delhi, 110001, New Delhi,India',
//   desc: 'We offer the fresh and no polluted water at a minimal rate. Our organisation works 24 hour to provide you fresh water ',
//   price: 'Rs.4 per litre',
//   img: 'https://picsum.photos/100',
// },
// {
//   name: 'Kingfisher',
//   address: 'Central delhi, 110001, New Delhi,India',
//   desc: 'We offer the fresh and no polluted water at a minimal rate. Our organisation works 24 hour to provide you fresh water ',
//   price: 'Rs.4 per litre',
//   img: 'https://picsum.photos/100',
// },
// {
//   name: 'Reliance',
//   address: 'Central delhi, 110001, New Delhi,India',
//   desc: 'We offer the fresh and no polluted water at a minimal rate. Our organisation works 24 hour to provide you fresh water ',
//   price: 'Rs.4 per litre',
//   img: 'https://picsum.photos/100',
// },
// {
//   name: 'Reliance',
//   address: 'Central delhi, 110001, New Delhi,India',
//   desc: 'We offer the fresh and no polluted water at a minimal rate. Our organisation works 24 hour to provide you fresh water ',
//   price: 'Rs.4 per litre',
//   img: 'https://picsum.photos/100',
// },
// {
//   name: 'Reliance',
//   address: 'Central delhi, 110001, New Delhi,India',
//   desc: 'We offer the fresh and no polluted water at a minimal rate. Our organisation works 24 hour to provide you fresh water ',
//   price: 'Rs.4 per litre',
//   img: 'https://picsum.photos/100',
//   email: 'abc@gmail.com
// },
//];

import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react'

const Organisations = () => {
  const { allOrgs, getAllOrgs } = useOrg();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [phvalue, setPhValue] = React.useState(5);
  const [tdsvalue, setTDSValue] = React.useState(5);

  console.log(phvalue, tdsvalue);
  console.log(allOrgs);

  useEffect(() => {
    getAllOrgs();
  }, []);
  
  const [pHValue, setPHValue] = useState([0, 14]);
  const handlePHValue = (e) => {
    setPHValue(e)
  }
  const onClickAdd = async () => {
    const data = getAllOrgs(pHValue.join(","))
    console.log(data)
  };

  return (
    <>
      <Navigation />
      <Flex
        mx={['8', '12', '20', '36', '52']}
        my={['4', '4', '4', '2', '6']}
        justifyContent="space-between"
        flexDirection={['column', 'column', 'column']}
      >
        <HeroSection />
        <Flex mt={['4', '4', '4', '2', '8']} direction="column">
          <Heading
            fontWeight="600"
            fontSize="25px"
            letterSpacing="0.3rem"
            lineHeight="60px"
          >
            Explore{' '}
          </Heading>
          <Flex>
            <Box
              bg="background.500"
              width={'150px'}
              height="5px"
              mt={['2', '2', '2', '4', '6']}
            />
            <Button onClick={onOpen}>Filter</Button>
          </Flex>
        </Flex>
        {allOrgs.length > 0 ? (
          <SimpleGrid
            columns={[1, null, 3]}
            spacingX="60px"
            spacingY="60px"
            mt={['2', '2', '4', '6', '8']}
          >
            {allOrgs.map((org, index) => (
              <OrgCards key={index} orginsation={org} />
            ))}
          </SimpleGrid>
        ) : (
          <Text>Sorry no organization is available at the moment</Text>
        )}
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader m="auto">Filter Orgs</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel id="price">pH level</FormLabel>
              <RangeSlider aria-label={['min', 'max']} defaultValue={pHValue} min={0} max={14} step={0.1} value={pHValue} onChange={handlePHValue}>
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClickAdd} colorScheme="blue" mr={3}>
              Find
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Footer />
    </>
  );
};

export default Organisations;
