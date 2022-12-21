import React, { useEffect, useState, useMemo } from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { BsFileEarmarkCheck, BsXSquare } from 'react-icons/bs';
import { MdOutlinePendingActions } from 'react-icons/md';
// import LineGraph from '../../components/Graph/LineGraph';
// import DoughnutGraph from '../../components/Graph/DoughnutGraph';
// import DashboardLoader from '../../components/Loaders/DashboardLoader';
import NightImage from '../../assets/night-bg.jpg';
import MorningImage from '../../assets/sun-bg.jpg';
import { useAuth } from '../../utils/context/AuthContext';
import Cards from '../../components/Stats/cards';
import { useContract } from '../../utils/context/ContractContext';

const weather = {
  night: {
    img: NightImage,
    position: 'center calc(50% - (50vh - 5vh))',
    color: '#F9FBFF',
  },
  day: {
    img: MorningImage,
    position: 'center calc(50% - (50vh - 5vh))',
    color: '#1B1C1E',
  },
};

const orgs = {
  name: 'Reliance',
  address: {
    line_1: 'Central Delhi',
    line_2: 'new Delhi India',
    city: 'New Delhi',
    state: 'New Delhi',
    country: 'India',
    pin_code: '110001',
  },
  desc: 'We offer the fresh and non-polluted water at a minimal rate. Our organisation works 24 hour to provide you fresh water ',
  price: 'Rs.4/L',
  img: 'https://picsum.photos/100',
};

const hour = new Date().getHours();

const DashboardHome = () => {
  const { user, org } = useAuth();
  const { contracts } = useContract();
  const { getMyContracts } = useContract();
  console.log(contracts);

  const dayMode = useMemo(() => {
    if (hour > 18 || hour < 6) return 'night';
    return 'day';
  }, [hour]);

  useEffect(() => {
    if (user) {
      getMyContracts(user._id);
    } else if (org) {
      getMyContracts(org.id);
    }
  }, []);

  const [stats, setStats] = useState({
    total: 60,
    pending: 20,
    approved: 20,
    rejected: 20,
  });
  return (
    <Box mx="-12" my="-8">
      <Flex
        w="full"
        h="18vh"
        backgroundImage={`url('${weather[dayMode].img}')`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundAttachment="fixed"
        backgroundPosition={weather[dayMode].position}
        color={weather[dayMode].color}
        top="0"
        left="0"
        zIndex="-1"
        px="12"
        alignItems="center"
      >
        <Text as="h2" fontSize="34px" fontWeight="500" mt="-8">
          Welcome {user ? `${user.name}` : `${org.name}`}!
        </Text>
      </Flex>
      <Box borderTopRadius="40" px="12" py="8" mt="-8" bg="#F9FBFF">
        <Flex
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
          mb="68px"
        >
          <Cards
            background="#1B1C1E"
            //number={stats.total}
            number={contracts.stats.total}
            comment="Total Contracts"
            iconColor="blue.100"
            iconUsed={<HiOutlineDocumentText fontSize="2rem" />}
          />
          <Cards
            background="#F9FBFF"
            //number={stats.pending}
            number={contracts.stats.pending}
            comment="Pending Contracts"
            iconColor="blue.200"
            iconUsed={<MdOutlinePendingActions fontSize="2rem" />}
          />
          <Cards
            background="#F9FBFF"
            // number={stats.approved}
            number={contracts.stats.accepted}
            comment="Accepted Contracts"
            iconColor="blue.300"
            iconUsed={<BsFileEarmarkCheck fontSize="2rem" />}
          />
          <Cards
            background="#F9FBFF"
            //number={stats.rejected}
            number={contracts.stats.rejected}
            comment="Rejected Contracts"
            iconColor="blue.400"
            iconUsed={<BsXSquare fontSize="2rem" />}
          />
        </Flex>
        <Flex alignItems="stretch" direction={'column'} mt="10">
          <Heading as="h1" px={2}>
            About the {user ? 'User' : 'Organization'}
          </Heading>
          <Box h="5px" w="10%" bg="black" mt={'12px'} mx={2}></Box>
          <Flex w="100%" mt="2%">
            <Flex direction={'column'} width="70%">
              <Box mt={5}>
                <Heading as="h1">
                  <mark
                    style={{
                      backgroundColor: '#C3D0F9',
                      borderRadius: '25px',
                      padding: '8px 16px 8px 16px',
                      marginLeft: '3px',
                    }}
                  >
                    {user ? `${user.name}` : `${org.name}`}
                  </mark>
                </Heading>
              </Box>
              {/* {user ? (
                <Box mt={5}></Box>
              ) : (
                <Box fontSize={'2xl'} mt={7} px={2}>
                  {orgs.desc}
                </Box>
              )} */}

              {/* remove this code after integration */}
              <Box fontSize={'2xl'} mt={7} px={2}>
                {orgs.desc}
              </Box>
              {/* ----------------------------- */}
              <Box fontSize={'2xl'} mt={5} pl={2}>
                <span style={{ fontWeight: 'bold' }}>Email :</span>
                {'  '}
                {/* {user ? `${user.email}`: `${orgs.email}`} */}
              </Box>
              <Box fontSize={'2xl'} mt={5} pl={2}>
                <span style={{ fontWeight: 'bold' }}>Address :</span>
                {'  '}
                {/* {user ? `${user.address.line_1} ${user.address.line_2}`: `${orgs.address.line_1} ${orgs.address.line_2}`} */}
                {`${orgs.address.line_1} ${orgs.address.line_2}`}
              </Box>
              <Flex pl={2}>
                <Box fontSize={'2xl'} mt={5}>
                  <span style={{ fontWeight: 'bold' }}>City :</span>
                  {'  '}
                  {/* {user ? `${user.address.city}` : `${org.address.city}`} */}
                  {`${orgs.address.city}`}
                </Box>
                <Box fontSize={'2xl'} mt={5} pl={'40%'}>
                  <span style={{ fontWeight: 'bold' }}>State :</span>
                  {'  '}
                  {/* {user ? `${user.address.state}` : `${org.address.state}`} */}
                  {orgs.address.state}
                </Box>
              </Flex>
              <Flex pl={2}>
                <Box fontSize={'2xl'} mt={5}>
                  <span style={{ fontWeight: 'bold' }}>Country :</span>
                  {'  '}
                  {/* {user ? `${user.address.country}` : `${org.address.country}`} */}
                  {orgs.address.country}
                </Box>
                <Box fontSize={'2xl'} mt={5} pl={'40.5%'}>
                  <span style={{ fontWeight: 'bold' }}>Pin Code :</span>
                  {'  '}
                  {/* {user ? `${user.address.pin_code}` : `${org.address.pin_code}`} */}
                  {orgs.address.pin_code}
                </Box>
              </Flex>
              {org ? (
                <Flex pl={2}>
                  <Box fontSize={'2xl'} mt={5}>
                    <span style={{ fontWeight: 'bold' }}>Price:</span>
                    {'  '}
                    {orgs.price}
                  </Box>
                  <Box fontSize={'2xl'} mt={5} pl={'40.5%'}>
                    <span style={{ fontWeight: 'bold' }}> Water type :</span>
                    {orgs.waterType}
                  </Box>
                </Flex>
              ) : (
                ''
              )}
            </Flex>
            <Flex width="30%" alignItems={'center'}>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt={user ? user.username : orgs.username}
                borderRadius="lg"
                width="100%"
              />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default DashboardHome;
