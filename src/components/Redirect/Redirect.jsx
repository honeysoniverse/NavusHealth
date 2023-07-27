import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { pathNames } from '../../config/pathNames';
import { useUserStore } from '../../store/user';

const Redirect = ({ to }) => {
  const { isAuthenticated, isEmailVerified } = useUserStore();

  if (isAuthenticated && isEmailVerified) {
    return <Navigate to={to || pathNames.myprofile} />;
  }

  if (isAuthenticated && !isEmailVerified) {
    return <Navigate to={to || pathNames.checkmail} />;
  }

  return <Navigate to={to || pathNames.login} />;
};

Redirect.propTypes = {
  to: PropTypes.string,
};

Redirect.defaultProps = {
  to: undefined,
};

export default Redirect;
