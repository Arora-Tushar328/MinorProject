import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    100: '#322D39',
    500: '#3066BE',
    600: '#090C9B',
    300: '#3A72CD'
  },
  hover: {
    600: '#00B4D8',
  },
  background: {
    500: '#3A72CD',
  },
  blue: {
    100: '#7CAEF8',
    200: '#4E8FF1',
    300: '#2272EB',
    400: '#005CE6',
  },
};

const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        fontFamily: 'Poppins',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        _focus: { boxShadow: 'none' },
      },
      variants: {
        base: {
          bg: '#3A72CD',
          color: '#FBFFFF',
        },
      },
      defaultProps: {
        variant: 'base',
      },
    },
    Tooltip: {
      baseStyle: {
        bg: 'brand.600',
        fontSize: 'xs',
      },
    },
  },
});

export default theme;
