import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';
import {
  VStack,
  Link,
  useBreakpointValue,
  HStack,
  Button,
  Icon,
  Text,
  useStyleConfig,
} from '@chakra-ui/react';
import { FaSignOutAlt } from 'react-icons/fa';
import { getMainMenu } from '../../config/menu';
import { colors } from '../../resources/colors';
// import { useFetchUser } from '../../pages/MyProfile/hooks';
import { useUserStore } from '../../store/user';
import { pathNames } from '../../config/pathNames';

const DesktopMenu = () => {
  const isMdBreakpoint = useBreakpointValue({ base: false, md: true });
  const { user } = useUserStore();
  // Removes the focus after a navigation change happened.
  const handleClick = (event) => event.target.blur();
  const { handleLogout } = useUserStore();
  const { logout } = useAuth0();
  const onLogout = async (e) => {
    e.preventDefault();
    logout({ returnTo: `${pathNames.home}` });
    handleLogout();
  };
  const buttonStyles = useStyleConfig('Button', { variant: 'ghost' });

  return (
    <VStack
      spacing={0}
      height="600px"
      border={`2px solid ${colors.wildSandGray}`}
      width={
        {
          base: '0px', sm: '0px', md: '120px', lg: '180px', xl: '240px',
        }
      }
      top="80px"
      left="0px"
      borderRadius="0px 12px 12px 0px"
      background={colors.white}
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      boxShadow="2xl"
      display={isMdBreakpoint ? 'flex' : 'none'}
      position="absolute"
      padding="12px"
    >
      <img src={user.profilePictureFilePath} alt="profile_pic" style={{ width: '150px', borderRadius: '50%' }} />
      <Text
        fontWeight="500"
        fontSize={
          {
            base: '14', md: '16', lg: '18', xl: '21',
          }
        }
      >
        {user.firstName ? `${user.firstName} ${user.lastName}` : ``}
      </Text>
      {getMainMenu().map((navItem) => (
        <Link
          key={navItem.path}
          to={navItem.path}
          as={NavLink}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          borderBottom={`3px solid ${colors.white}`}
          padding={
            {
              base: '2', md: '3', lg: '3', xl: '3',
            }
          }
          fontSize={
            {
              base: '12', md: '14', lg: '16', xl: '18',
            }
          }
          color={colors.gray}
          zIndex={1}
          onClick={handleClick}
          _hover={{
            textDecoration: 'none',
            color: colors.astralBlue,
            borderBottom: `3px solid ${colors.astralBlue}`,

          }}
          _focus={{
            outline: 'none',
            color: colors.astralBlue,
            borderBottom: `3px solid ${colors.astralBlue}`,
          }}
          sx={{
            '&.active': {
              color: colors.azureRadianceBlue,
              borderBottom: `3px solid ${colors.azureRadianceBlue}`,
            },
            '&:focus::before': {
              display: 'block',
              borderColor: colors.malibuBlue,
              borderBottom: `3px solid ${colors.azureRadianceBlue}`,
            },
          }}
        >
          {navItem.label}
        </Link>
      ))}
      <Button
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        __css={buttonStyles}
        padding={
          {
            base: '1', md: '2', lg: '3', xl: '4',
          }
        }
        fontSize={
          {
            base: '12', md: '14', lg: '16', xl: '18',
          }
        }
        color={colors.gray}
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
                base: '12', md: '14', lg: '16', xl: '18',
              }
            }
          >
            Logout
          </Text>
          <Icon as={FaSignOutAlt} color={colors.gray} />
        </HStack>
      </Button>
    </VStack>
  );
};

export default DesktopMenu;
