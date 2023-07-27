// eslint-disable-next-line no-unused-vars
import { useToast } from '@chakra-ui/react';

function ChakraToast() {
  const toast = useToast();
  return (
    toast({
      title: 'SMS Code sent on Number',
      description: 'Please input the code to verify your Phonenumber',
      status: 'info',
      duration: 9000,
      isClosable: true,
    })
  );
}

export default ChakraToast;
