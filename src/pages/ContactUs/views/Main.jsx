import {
  VStack, Text, Spinner,
} from '@chakra-ui/react';
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper';
import { useFetchUser } from '../hooks';

const Main = () => {
  const { isLoading } = useFetchUser();

  return (
    <ContentWrapper>
      <VStack alignItems="center" marginTop={10}>
        {isLoading && <Spinner />}
        {!isLoading && <Text>Contact Us</Text>}
      </VStack>
    </ContentWrapper>
  );
};

export default Main;
