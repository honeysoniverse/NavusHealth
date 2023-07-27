import { useToast as useChakraToast } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { AXIOS_CONNECTION_ABORTED_ERROR_CODE, AXIOS_TIMEOUT_ERROR_CODE } from '../services/constants';
import toastMessages from '../messages/toast';

export const getDefaultToastProps = () => ({
  title: toastMessages.genericErrorHeading,
  description: toastMessages.genericErrorDescription,
  isClosable: true,
  status: 'error',
  variant: 'left-accent',
  timeout: 3000,
  id: uuidv4(),
});

const useToast = () => (toastConfig, error) => {
  const chakraToast = useChakraToast();

  if (
    error?.code === AXIOS_TIMEOUT_ERROR_CODE
      || error?.code === AXIOS_CONNECTION_ABORTED_ERROR_CODE
  ) {
    return chakraToast({
      ...getDefaultToastProps(),
      title: toastMessages.requestTimeoutHeading,
      description: toastMessages.requestTimeoutDescription,
    });
  }

  return chakraToast({
    ...getDefaultToastProps(),
    ...toastConfig,
  });
};

export default useToast;
