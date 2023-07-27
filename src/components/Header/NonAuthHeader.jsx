import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  HStack,
  VStack,
  Image,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react';
import { pathNames } from '../../config/pathNames';
import { colors } from '../../resources/colors';
import { images } from '../../resources/assets';

const NonAuthHeader = () => {
  const isMdBreakpoint = useBreakpointValue({ base: false, md: true });

  return (
    <Box
      padding={2}
      borderBottom="1px solid"
      borderColor="gray.100"
      background={colors.veniceBlue}
    >
      <Container
        maxWidth="container.2xl"
      >
        <VStack
          width="100%"
        >
          <HStack
            width="100%"
            height="auto"
            minHeight="100%"
            alignItems="stretch"
            justifyContent="space-between"
            marginTop={isMdBreakpoint ? 2 : 0}
          >
            <HStack height="auto" minHeight="100%" alignItems="stretch">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                data-test-id="ed45c3f2"
              >
                <Link
                  to={pathNames.login}
                  as={RouterLink}
                >
                  <Image
                    src={images.navusLogoWhite}
                    data-test-id="e21d9bcd"
                    height="48px"
                  />
                </Link>
              </Box>
            </HStack>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              data-test-id="eb8a3af0"
            />
          </HStack>

        </VStack>
      </Container>
    </Box>
  );
};

export default NonAuthHeader;
