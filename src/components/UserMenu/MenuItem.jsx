import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  HStack,
  MenuItem as BaseMenuItem,
} from '@chakra-ui/react';

const MenuItem = ({ to, children }) => {
  const navigate = useNavigate();

  return (
    <BaseMenuItem
      as="a"
      onClick={() => navigate(to)}
      display="block"
      padding={[4, 3]}
      width="100%"
      border="1px solid"
      borderColor="transparent"
      cursor="pointer"
      _hover={{
        backgroundColor: 'gray.50',
        borderColor: 'transparent',
      }}
      _focus={{
        borderColor: 'gray.200',
        backgroundColor: 'gray.50',
      }}
    >
      <HStack justifyContent="space-between">
        {children}
      </HStack>
    </BaseMenuItem>
  );
};

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MenuItem;
