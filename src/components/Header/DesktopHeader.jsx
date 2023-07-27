import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  HStack,
  Link,
  Image,
} from '@chakra-ui/react';
import { pathNames } from '../../config/pathNames';
import { colors } from '../../resources/colors';
import { images } from '../../resources/assets';

const DesktopHeader = () => (
  <Box
    paddingY={0}
    borderBottom="1px solid"
    borderColor="gray.100"
    background={colors.veniceBlue}
  >
    <Container
      maxWidth="container.2xl"
    >
      <HStack
        width="100%"
      >
        <HStack
          width="100%"
          height="auto"
          minHeight="100%"
          alignItems="stretch"
          justifyContent="space-between"
          marginTop={2}
          marginBottom={2}
        >
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
        </HStack>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {/* <UserMenu /> */}
        </Box>
      </HStack>
    </Container>
  </Box>
);

export default DesktopHeader;
