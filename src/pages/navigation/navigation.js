import React from 'react';
import {
  Box,
  Text,
  Stack,
  Flex,
  Button,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import NavButtons from './NavButtons';
import { GrGoogle } from 'react-icons/gr';
import MenuBtn from './MenuBtn';
import { Link } from 'react-router-dom';
import TopBorder from '../../components/TopBorder';
import { useAuth } from '../../utils/context/AuthContext';
import SignInModal from '../../components/signInModal';
import Logo from '../../assets/main-logo.png';

function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, getUser, org } = useAuth();

  // props data for Nav buttons
  const name2 = 'Center';
  const name3 = 'Organisation';
  const name4 = 'Dashboard';

  return (
    <Flex flexDirection="column">
      <Stack>
        <Box
          display="flex"
          align-items="center"
          justifyContent="space-between"
          w="100%"
          pos="fixed"
          zIndex={2}
          bg="white"
        >
          <Box mt="3" mb="2" w="60%">
            <Link to="/">
              {/* <Image
                onClick={() => {
                  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
                }}
                ml={{ base: '15%', md: '17%' }}
                mt='-5px'
                src={Logo}
                h={['4rem', '5rem']}
                w={['10rem', '12rem']}
                alt="Logo"
              /> */}
              <Text
                fontSize="3xl"
                color="#0099ff"
                cursor="pointer"
                fontWeight="bold"
                fontFamily="cursive"
                ml={{ base: '8', md: '10' }}
                pl="11%"
                onClick={() => {
                  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
                }}
              >
                AQUATRUST
              </Text>
            </Link>
          </Box>
          <Box mt="3.5" mb="2">
            <Stack
              mr="120"
              spacing={2}
              direction="row"
              align="center"
              display={['none', 'none', 'flex', 'flex']}
            >
              <Stack spacing={2} direction="row" mr="10">
                <NavButtons name={name2} color="#0077B6" link="/center" />
                <NavButtons
                  name={name3}
                  color="#0077B6"
                  link="/organisations"
                />
                {user || org ? (
                  <NavButtons name={name4} color="#0077B6" link="/dashboard" />
                ) : (
                  ''
                )}
              </Stack>
              <Stack spacing={1} direction="row">
                {!user ? (
                  <Button
                    // onClick={() => getUser()}
                    // isLoading={isFetching || isLoading}
                    styles={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onClick={onOpen}
                  >
                    <GrGoogle style={{ marginRight: '10px' }} />
                    Login
                  </Button>
                ) : (
                  <Button>Logout</Button>
                )}
                <SignInModal
                  onOpen={onOpen}
                  isOpen={isOpen}
                  onClose={onClose}
                />
              </Stack>
            </Stack>
            <MenuBtn />
          </Box>
        </Box>
      </Stack>
      <TopBorder borderH="4.5rem" />
    </Flex>
  );
}

export default Navigation;
