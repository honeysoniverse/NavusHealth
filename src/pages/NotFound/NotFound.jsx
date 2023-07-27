import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import { pathNames } from '../../config/pathNames';

const Main = lazy(() => import('./views/Main'));

/**
 * @TODO Suspense fallback still to decide
 */
const NotFound = () => (
  <Suspense fallback="">
    <Routes>
      <Route
        path=""
        element={<ProtectedRoute component={Main} />}
      />
      <Route
        path={pathNames.wildcard}
        element={<ProtectedRoute component={NotFound} />}
      />
    </Routes>
  </Suspense>
);

export default NotFound;
