import { useState, useCallback, useEffect, useMemo } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import {
  Avatar,
  Divider,
  Flex,
  Heading,
  IconButton,
  Text,
  Image,
  Tooltip,
  Box,
  Kbd,
} from '@chakra-ui/react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { navItems } from './config';
import NavItems from './navItems';
import { MdOutlineLogout } from 'react-icons/md';
import { useAuth } from '../../utils/context/AuthContext';
import LogoWhite from '../../assets/mainLogoWhite.svg';
import LogoIcon from '../../assets/favicon.svg';

const Sidebar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const handleDrawer = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  useEffect(() => {
    const onEscape = e => {
      if (e.which === 27) handleDrawer();
    };

    document.addEventListener('keydown', onEscape);
    return () => {
      document.removeEventListener('keydown', onEscape);
    };
  }, []);

  return (
    <Flex
      h="100vh"
      w={!isOpen ? '75px' : '370px'}
      transition="width 300ms"
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
      flexDir="column"
      justifyContent="space-between"
      bg="#1b1c1e"
      fontWeight={'600'}
      color="white"
      py={'7'}
      overflow="hidden"
    >
      <Flex
        flexDir="column"
        alignItems={!isOpen ? 'center' : 'flex-start'}
        as="nav"
        grow="1"
      >
        <Flex w="100%" px={!isOpen ? '2' : '5'}>
          <Link to="/" >
            {/* <Image
              w="80%"
              maxH="60px"
              mx={!isOpen && 'auto'}
              src={isOpen ? LogoWhite : LogoIcon}
              alt="Logo"
              loading="eager"
            /> */}
            <Text fontSize='4xl'>AQUATRUST</Text>
          </Link>
        </Flex>
        <Tooltip
          label={
            <span>
              Press&ensp;
              <Kbd color="#1b1c1e" fontWeight={'600'}>
                Esc
              </Kbd>
              &ensp;to toggle
            </span>
          }
          placement={isOpen ? 'bottom' : 'right'}
          bg="#1B1C1E"
        >
          <IconButton
            aria-label="Toggle sidebar"
            position="absolute"
            top="78px"
            right="0"
            transform="translateX(50%)"
            borderRadius="full"
            bg="#c3d0f9"
            color="#1B1C1E"
            fontWeight={'400'}
            boxShadow="0 4px 12px 0 rgba(0,0,0,0.1)"
            size="sm"
            fontSize="20px"
            icon={!isOpen ? <IoIosArrowForward /> : <IoIosArrowBack />}
            zIndex="1"
            onClick={handleDrawer}
          />
        </Tooltip>
        <Flex mt="9" w="100%" direction={'column'} justifyContent='center'>
          {navItems.map(item => {
            return (
              <NavItems
                key={item.id}
                isNavOpen={isOpen}
                icon={item.icon}
                title={item.name}
                active={`/dashboard${item.link}` === location.pathname}
                onClick={() => navigate(`/dashboard${item.link}`)}
              />
            );
          })}
        </Flex>
        <NavItems
          isNavOpen={isOpen}
          icon={MdOutlineLogout}
          title="Logout"
          headProps={{ mt: 'auto' }}
          //   onClick={async () => {
          //     logoutUser();
          //   }}
        />
      </Flex>
      <Flex
        pt="1"
        px={!isOpen ? '2' : '5'}
        flexDir="column"
        alignItems={!isOpen ? 'center' : 'flex-start'}
      >
        <Divider display={!isOpen ? 'none' : 'flex'} />
        <Flex mt={4} align="center">
          <Box w="35px">
            <Avatar size="full" src={user ? user.image : ''} />
          </Box>
          <Flex flexDir="column" ml="4" display={!isOpen ? 'none' : 'flex'}>
            <Heading as="h2" fontSize="18px">
              {user ? user.name : 'Guest'}
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Sidebar;
