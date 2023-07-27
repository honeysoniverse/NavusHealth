import PropTypes from 'prop-types';
import { useUserStore } from '../../store/user';
import DesktopMenu from '../DesktopMenu/DesktopMenu';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NonAuthHeader from '../Header/NonAuthHeader';
import { useHideMenu } from './hooks';

const PageLayout = ({ children }) => {
  const isMenuHidden = useHideMenu();
  const { isAuthenticated } = useUserStore();

  if (isMenuHidden) return children;

  return (
    <>
      {!isAuthenticated && <NonAuthHeader />}
      {isAuthenticated && <Header />}
      {isAuthenticated && <DesktopMenu />}
      {}
      {children}
      <Footer />
    </>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
