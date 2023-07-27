import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Icon,
  Box,
  Button,
  Slide,
  Portal,
  VStack,
  HStack,
  Text,
  useStyleConfig,
} from '@chakra-ui/react';
import { FaSignOutAlt, FaTimes } from 'react-icons/fa';
import { getMainMenu } from '../../config/menu';
import MenuItem from './MenuItem';
import { colors } from '../../resources/colors';
import { useUserStore } from '../../store/user';
import { pathNames } from '../../config/pathNames';

const MobileMenu = ({ isOpen, onToggle }) => {
  const buttonStyles = useStyleConfig('Button', { variant: 'ghost' });
  const { handleLogout } = useUserStore();
  const { logout } = useAuth0();
  const onLogout = (e) => {
    e.preventDefault();
    logout({ returnTo: `${pathNames.home}` });
    handleLogout();
  };
  return (
    <Portal>
      <Slide in={isOpen} direction="left">
        <Box
          display="block"
          background={colors.bayBlue}
          boxShadow="2xl"
          position="fixed"
          top={0}
          right={0}
          bottom={0}
          left={0}
        >
          <Box
            borderBottom="4px"
            borderColor={colors.malibuBlue}
            padding={[4, 2]}
          >
            <Button
              onClick={onToggle}
              variant="ghost"
              aria-label="close"
            >
              <Icon
                color={colors.white}
                as={FaTimes}
              />
            </Button>
          </Box>
          <VStack
            spacing={0}
            alignItems="stretch"
          >
            {getMainMenu().map((menuItem) => (
              <MenuItem
                key={menuItem.path}
                onToggle={onToggle}
                {...menuItem}
              />
            ))}
            <Button
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
              __css={buttonStyles}
              padding={
                {
                  base: '3', md: '4', lg: '5', xl: '6',
                }
              }
              fontSize={
                {
                  base: '18', md: '21', lg: '24', xl: '28',
                }
              }
              color={colors.white}
              zIndex={1}
              onClick={onLogout}
              _hover={{
                textDecoration: 'none',
                color: colors.astralBlue,
              }}
              _focus={{
                outline: 'none',
                color: colors.astralBlue,
              }}
              sx={{
                '&.active': {
                  color: colors.azureRadianceBlue,
                },
                '&:focus::before': {
                  display: 'block',
                  borderColor: colors.malibuBlue,

                },
              }}
            >
              <HStack spacing={4}>
                <Text
                  fontSize={
                    {
                      base: '18', md: '21', lg: '24', xl: '18',
                    }
                  }
                >
                  Logout
                </Text>
                <Icon as={FaSignOutAlt} color={colors.white} />
              </HStack>
            </Button>
          </VStack>
        </Box>
      </Slide>
    </Portal>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default MobileMenu;
