import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { animateScroll as scroll } from 'react-scroll';
import MyMenuItem from './MyMenuItem';

function MenuBtn() {
  // props data for Nav buttons
  const name = 'About';
  const name1 = 'Support';
  const name2 = 'Features';
  const name3 = 'Sign In';
  const name4 = 'Sign Up';

  // Scroll to 2859px from the top
  const goSupport = () => {
    scroll.scrollTo(3200);
  };
  // Scroll to 1495px from the top
  const goFeatures = () => {
    scroll.scrollTo(1415);
  };
  return (
    <Flex>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          size="md"
          color="white"
          bg="#0077B6"
          _hover={{ bg: '#00B4D8', color: 'white' }}
          display={['flex', 'flex', 'none', 'none']}
          mr="10"
          mt="2.7%"
        />
        <MenuList>
          <MyMenuItem name={name} link="/about-us" />
          <Text onClick={goSupport}>
            <MyMenuItem name={name1} link="/" />
          </Text>
          <Text onClick={goFeatures}>
            <MyMenuItem name={name2} link="/" />
          </Text>
          <MyMenuItem name={name3} link="/sign-in" />
          <MyMenuItem name={name4} link="/sign-up" />
        </MenuList>
      </Menu>
    </Flex>
  );
}
export default MenuBtn;
