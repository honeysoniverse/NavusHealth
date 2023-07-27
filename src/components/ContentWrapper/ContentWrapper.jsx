import PropTypes from 'prop-types';
import { VStack, Container, useBreakpointValue } from '@chakra-ui/react';
import { colors } from '../../resources/colors';

const ContentWrapper = ({
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  width,
  maxWidth,
  children,
  ...props
}) => {
  const isMdBreakpoint = useBreakpointValue({ base: false, md: true });

  return (
    <VStack
      paddingTop={isMdBreakpoint ? paddingTop : 0}
      paddingBottom={isMdBreakpoint ? paddingBottom : 0}
      paddingLeft={isMdBreakpoint ? paddingLeft : 0}
      paddingRight={isMdBreakpoint ? paddingRight : 0}
      width={width}
      flex={1}
      bg={colors.astralBlue}
      {...props}
      // border="2px solid green"
    >
      <Container maxWidth={maxWidth} padding={0} minHeight="500px">
        {children}
      </Container>
    </VStack>
  );
};

ContentWrapper.propTypes = {
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ContentWrapper.defaultProps = {
  paddingTop: 4,
  paddingBottom: 4,
  paddingLeft: 4,
  paddingRight: 4,
  width: '100%',
  maxWidth: 'container.2xl',
};

export default ContentWrapper;
