import PropTypes from 'prop-types';
import { Box, useTheme, useStyleConfig } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const AnimatedBox = ({
  id,
  children,
  animation,
  variant,
  ...props
}) => {
  const style = useStyleConfig('AnimatedBox', { variant });
  const { shadows } = useTheme();

  return (
    <MotionBox
      data-test-id={`b598784a-${id}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, boxShadow: shadows.md }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.01, boxShadow: shadows.lg }}
      {...animation}
      __css={style}
      {...props}
    >
      {children}
    </MotionBox>
  );
};

AnimatedBox.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(Array).isRequired,
  variant: PropTypes.string,
  animation: PropTypes.instanceOf(Object),
};

AnimatedBox.defaultProps = {
  variant: undefined,
  animation: {},
};

export default AnimatedBox;
