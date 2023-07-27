import { lazy, Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { pathNames, rootPathNames } from '../../config/pathNames';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Redirect from '../Redirect/Redirect';

const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));
const Login = lazy(() => import('../../pages/Login/Login'));
const MyProfile = lazy(() => import('../../pages/MyProfile/MyProfile'));
const MyOrders = lazy(() => import('../../pages/MyOrders/MyOrders'));
const ContactUs = lazy(() => import('../../pages/ContactUs/ContactUs'));
const Register = lazy(() => import('../../pages/Register/Register'));
const MyEvents = lazy(() => import('../../pages/MyEvents/MyEvents'));
const CheckMail = lazy(() => import('../../pages/CheckMail/CheckMail'));
const RoutesWrapper = () => (
  <Suspense fallback={<Spinner />}>
    <Routes>
      <Route
        path={rootPathNames.register}
        element={<ProtectedRoute component={Register} isProtected={false} />}
      />
      <Route
        path={rootPathNames.login}
        element={<ProtectedRoute component={Login} isProtected={false} />}
      />
      <Route
        path={rootPathNames.myprofile}
        element={<ProtectedRoute component={MyProfile} />}
      />
      <Route
        path={rootPathNames.myevents}
        element={<ProtectedRoute component={MyEvents} />}
      />
      <Route
        path={rootPathNames.myorders}
        element={<ProtectedRoute component={MyOrders} />}
      />
      <Route
        path={rootPathNames.contactus}
        element={<ProtectedRoute component={ContactUs} />}
      />
      <Route
        path={rootPathNames.checkmail}
        element={<ProtectedRoute component={CheckMail} />}
      />
      <Route
        path={pathNames.root}
        element={<ProtectedRoute component={Redirect} isProtected={false} />}
      />
      <Route
        path={pathNames.wildcard}
        element={<ProtectedRoute component={NotFound} />}
      />
    </Routes>
  </Suspense>
);

export default RoutesWrapper;
