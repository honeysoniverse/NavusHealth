/* eslint-disable max-len */
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { FaBars } from 'react-icons/fa';
import {
  Box,
  HStack,
  Button,
  Link,
  Image,
  Icon,
} from '@chakra-ui/react';
// import UserMenu from '../UserMenu/UserMenu';
import { FaUserCircle } from 'react-icons/fa';
import { pathNames } from '../../config/pathNames';
import { colors } from '../../resources/colors';
import { images } from '../../resources/assets';
import { useUserStore } from '../../store/user';

const MobileHeader = ({ onToggle }) => {
  const { user } = useUserStore();
  return (
    <Box
      borderBottom="1px solid"
      borderColor="gray.100"
      background={colors.veniceBlue}
      paddingTop={2}
      paddingBottom={2}
    >
      <HStack
        justifyContent="space-between"
        alignItems="center"
      >
        <Button
          width="16"
          onClick={onToggle}
          variant="ghost"
          data-test-id="382c4323"
        >
          {user.profilePictureFilePath ? <img src={user.profilePictureFilePath} alt="" style={{ width: 'auto', borderRadius: '50%' }} />
            : <Icon as={FaUserCircle} color={colors.white} width="2em" />}
        </Button>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Link
            to={pathNames.myprofile}
            as={RouterLink}
            aria-label="myprofile"
          >
            <Image src={images.navusLogoWhite} height="48px" />
          </Link>
        </Box>
        <Box
          width="16"
          display="flex"
          justifyContent="center"
          alignItems="center"
        />
      </HStack>
    </Box>
  );
};

MobileHeader.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default MobileHeader;
