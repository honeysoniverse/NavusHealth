import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import { pathNames } from '../../config/pathNames';

const Main = lazy(() => import('./views/Main'));
const NotFound = lazy(() => import('../NotFound/views/Main'));
const ThankYou = lazy(() => import('./views/ThankYou'));
const GeneratingQRCodeLoader = lazy(() => import('./components/loaders/GeneratingQRCodeLoader'));


/**
 * @TODO Suspense fallback still to decide
 */
const Register = () => (
  <Suspense fallback="">
    <Routes>
      <Route
        path="/:clientId/:eventId"
        element={<ProtectedRoute component={Main} isProtected={false} />}
      />
      <Route
        path="/thankyou"
        element={<ProtectedRoute component={ThankYou} isProtected={false} />}
      />
      <Route
        path="/myprofile"
        element={<ProtectedRoute component={Main} isProtected={false} />}
      />
      <Route
        path="/submitting"
        element={<ProtectedRoute component={GeneratingQRCodeLoader} isProtected={false} />}
      />
      <Route
        path={pathNames.wildcard}
        element={<ProtectedRoute component={NotFound} isProtected={false} />}
      />
    </Routes>
  </Suspense>
);

export default Register;
