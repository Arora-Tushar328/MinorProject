import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function NavButtons(props) {
  return (
    <Link
      to={props.link}
      onClick={() => {
        window.scroll({ top: 0, behavior: 'smooth' });
      }}
    >
      <Button
        pt="5.4"
        pr="4"
        pl="4"
        pb="5.4"
        color={props.color}
        size={{ base: '8px', md: 'md' }}
        bg={props.bg}
        cursor="pointer"
        _hover={{ bg: '#3A72CD', color: 'white' }}
        variant="ghost"
        onClick={() => {
          window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        }}
      >
        {props.name}
      </Button>
    </Link>
  );
}
export default NavButtons;
