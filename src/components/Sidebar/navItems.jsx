import { Flex, Icon, Menu, MenuButton, Text, Tooltip } from '@chakra-ui/react';

const Wrapper = ({ children, title }) => {
  if (title)
    return (
      <Tooltip label={title} placement='right'>
        {children}
      </Tooltip>
    );
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

const NavItems = ({ isNavOpen, title, icon, active, headProps, onClick }) => {
  return (
    <Wrapper title={isNavOpen ? null : title}>
      <Flex
        mb='2'
        direction='column'
        w='100%'
        alignItems={!isNavOpen ? 'center' : 'flex-start'}
        px={!isNavOpen ? '2' : '8'}
        py='2.5'
        bg={active ? '#3A3C40' : 'none'}
        _hover={{ backgroundColor: '#3A3C40' }}
        fontWeight='500'
        cursor='pointer'
        {...headProps}
        onClick={onClick}
      >
        <Menu placement='right'>
          <MenuButton>
            <Flex align='center'>
              <Icon
                as={icon}
                fontSize='22px'
                color='white'
                alignItems={!isNavOpen ? 'center' : 'flex-start'}
              />
              <Text
                ml='4'
                fontSize='20px'
                display={isNavOpen ? 'flex' : 'none'}
              >
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Menu>
      </Flex>
    </Wrapper>
  );
};

export default NavItems;
