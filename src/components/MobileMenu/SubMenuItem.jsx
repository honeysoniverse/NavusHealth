import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  Link,
  Text,
} from '@chakra-ui/react';
import { useActiveMenuProperties } from './hooks';

const SubMenuItem = ({
  path,
  label,
  onToggle,
  testId,
}) => {
  const { isItemActive } = useActiveMenuProperties(path);

  return (
    <Link
      data-test-id={`7b16416b-${testId}`}
      key={path}
      as={NavLink}
      onClick={onToggle}
      to={path}
      paddingRight={6}
      paddingLeft={14}
      paddingY={3}
      backgroundColor={isItemActive && 'gray.200'}
      _hover={{
        backgroundColor: isItemActive ? 'gray.200' : 'gray.100',
      }}
    >
      <Text data-test-id={`f2e3d343-${testId}`}>
        {label}
      </Text>
    </Link>
  );
};

SubMenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
};

export default SubMenuItem;
