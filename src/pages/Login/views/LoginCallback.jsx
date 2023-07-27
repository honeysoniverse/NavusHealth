/* eslint-disable brace-style */
/* eslint-disable no-unused-expressions */

import {
  VStack, Box, Spinner, Text, HStack,
} from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Redirect from '../../../components/Redirect/Redirect';
import { pathNames } from '../../../config/pathNames';
import useToast from '../../../hooks/useToast';
import { AUTH0_CODE_PARAM_NAME } from '../../../services/oauth/constants';
import { useUserStore } from '../../../store/user';
import messages from '../messages';
import { useAppStateStore } from '../../../store/appState';
import useUserApi from '../../../services/navPass/user';

const LoginCallback = () => {
  const { logout } = useAuth0();
  const [searchParams] = useSearchParams();
  const authCode = searchParams.get(AUTH0_CODE_PARAM_NAME);
  const {
    setIsAuthenticated,
    handleLogout,
    setIsEmailVerified,
  } = useUserStore();
  const { redirectFromAuth } = useAppStateStore();
  const toast = useToast();
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  const { getUser } = useUserApi();

  useQuery('getUser Query', () => getUser(), {
    onSuccess: async (data) => {
      setUser(data.data);
      setIsAuthenticated(true);
      data.data.email_verified && setIsEmailVerified(true);
      if (redirectFromAuth) {
        navigate(redirectFromAuth);
      }
      else {
        navigate(pathNames.myprofile);
      }
    },
    onError: (err) => {
      handleLogout();
      logout();
      toast({
        title: messages.errorLoginHeading,
        description: messages.errorLoginDescription,
      }, err);
    },
    enabled: !!authCode,
    cacheTime: 0,
  });

  if (!authCode) {
    return <Redirect to={pathNames.login} />;
  }

  return (
    <VStack
      height="100vh"
      justifyContent="center"
      alignItems="center"
      data-test-id="096759f5"
    >
      <Box
        data-test-id="1729dc44"
        background="gray.50"
        padding={8}
        rounded={12}
        minWidth="sm"
      >
        <HStack display="flex" justifyContent="center" alignItems="center">
          <Text fontWeight="600">Please Wait</Text>
          <Spinner />
        </HStack>
      </Box>
    </VStack>
  );
};

export default LoginCallback;
