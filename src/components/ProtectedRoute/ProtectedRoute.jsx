import PropTypes from 'prop-types';
import { useUserStore } from '../../store/user';
import Redirect from '../Redirect/Redirect';
/**
 in future this should validate also if the user role is allowed
 */
const ProtectedRoute = ({ isProtected, component: RouteComponent, ...props }) => {
  const { isAuthenticated } = useUserStore();

  if (isProtected && isAuthenticated) {
    return <RouteComponent {...props} />;
  }

  if (!isProtected && isAuthenticated) {
    return <RouteComponent {...props} />;
  }

  if (!isProtected && !isAuthenticated) {
    return <RouteComponent {...props} />;
  }

  return <Redirect />;
};

ProtectedRoute.propTypes = {
  isProtected: PropTypes.bool,
  component: PropTypes.elementType.isRequired,
};

ProtectedRoute.defaultProps = {
  isProtected: true,
};

export default ProtectedRoute;
