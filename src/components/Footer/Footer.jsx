import {
  Container, Box, HStack,
} from '@chakra-ui/react';
import { colors } from '../../resources/colors';

const Footer = () => (
  <Box
    background={colors.veniceBlue}
    height="180px"
    borderTop="1px solid"
    borderColor="gray.100"
  >
    <Container
      maxWidth="container.lg.2xl"
      height="100%"
    >
      <HStack
        height="100%"
        flex={1}
        justifyContent="center"
        alignItems="center"
      />
    </Container>
  </Box>
);

export default Footer;
