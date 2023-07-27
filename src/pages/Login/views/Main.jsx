import { useAuth0 } from '@auth0/auth0-react';
import {
  VStack, Box, Image,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { colors } from '../../../resources/colors';

const Main = () => {
  const { loginWithRedirect } = useAuth0();
  const handleLogin = () => loginWithRedirect();
  useEffect(() => { handleLogin(); }, []);

  return (
    <VStack
      height="100vh"
      justifyContent="center"
      alignItems="center"
      data-test-id="096759f5"
      bg={colors.veniceBlue}
    >
      <Box
        data-test-id="1729dc44"
        background={colors.altoGray}
        padding={8}
        rounded={12}
        minWidth="sm"
      >
        <Image src="/assets/logo.png" />
      </Box>
    </VStack>
  );
};

export default Main;
