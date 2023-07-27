import { useAuth0 } from '@auth0/auth0-react';
import {
  Divider,
  HStack,
  Text,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem as ChakraMenuItem,
} from '@chakra-ui/react';
import { FaSignOutAlt } from 'react-icons/fa';
import { userMenu } from '../../config/menu';
import { colors } from '../../resources/colors';
import { useUserStore } from '../../store/user';
import MenuItem from './MenuItem';

const UserMenu = () => {
  const { handleLogout } = useUserStore();
  const { logout } = useAuth0();

  const onLogout = (e) => {
    e.preventDefault();
    logout({ returnTo: `${window.location.origin}` });
    handleLogout();
  };

  return (
    <Menu isLazy>
      <MenuButton
        width={20}
        aria-label="menu"
        border="1px solid"
        borderColor="transparent"
        borderRadius="full"
        _focus={{
          borderColor: 'gray.600',
        }}
      >
        <Text textColor={colors.codGray}>Menu</Text>
      </MenuButton>
      <MenuList>
        <Divider />
        {userMenu.map(({ path, label, icon }) => (
          <MenuItem to={path} key={path}>
            <HStack spacing={4}>
              <Icon as={icon} />
              <Text color={colors.codGray}>{label}</Text>
            </HStack>
          </MenuItem>
        ))}
        <ChakraMenuItem as="button" onClick={onLogout}>
          <HStack spacing={4}>
            <Icon as={FaSignOutAlt} color={colors.width} />
            <Text>Logout</Text>
          </HStack>
        </ChakraMenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
