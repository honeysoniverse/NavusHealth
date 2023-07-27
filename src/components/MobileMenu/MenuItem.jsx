import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  Icon,
  HStack,
  VStack,
  Link,
  Text,
} from '@chakra-ui/react';
import { useActiveMenuProperties } from './hooks';
import SubMenuItem from './SubMenuItem';
import { colors } from '../../resources/colors';

const MenuItem = ({
  path,
  label,
  icon,
  submenu,
  onToggle,
}) => {
  const { isGroupActive, isItemActive } = useActiveMenuProperties(path);

  return (
    <VStack
      alignItems="stretch"
      spacing={0}
      position="relative"
      backgroundColor={isGroupActive ? colors.altoGray : colors.alabasterGray}
      _after={{
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: '4px',
        backgroundColor: isGroupActive ? colors.malibuBlue : 'transparent',
      }}
    >
      <Link
        as={NavLink}
        onClick={onToggle}
        to={path}
        backgroundColor={isItemActive && colors.heather}
        padding={[3, 4]}
        width="100%"
        _hover={{
          backgroundColor: isItemActive ? colors.malibuBlue : colors.heather,
        }}
      >
        <HStack spacing="24px">
          <Icon as={icon} color={isItemActive ? colors.alabasterGray : colors.codGray} />
          <Text color={isItemActive ? colors.alabasterGray : colors.codGray}>{label}</Text>
        </HStack>
      </Link>
      {submenu && isGroupActive && (
        <VStack alignItems="stretch" spacing={0}>
          {submenu.map((item) => (
            <SubMenuItem {...item} onToggle={onToggle} />
          ))}
        </VStack>
      )}
    </VStack>
  );
};

MenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  submenu: PropTypes.instanceOf(Array),
  onToggle: PropTypes.func.isRequired,
};

MenuItem.defaultProps = {
  submenu: undefined,
};

export default MenuItem;
