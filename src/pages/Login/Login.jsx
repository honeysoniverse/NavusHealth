import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import { pathNames } from '../../config/pathNames';

const Main = lazy(() => import('./views/Main'));
const NotFound = lazy(() => import('../NotFound/views/Main'));
const LoginCallback = lazy(() => import('./views/LoginCallback'));
/**
 * @TODO Suspense fallback still to decide
 */
const Login = () => (
  <Suspense fallback="">
    <Routes>
      <Route
        path=""
        element={<ProtectedRoute isProtected={false} component={Main} />}
      />
      <Route
        path="/callback"
        element={<ProtectedRoute isProtected={false} component={LoginCallback} />}
      />
      <Route
        path={pathNames.wildcard}
        element={<ProtectedRoute isProtected={false} component={NotFound} />}
      />
    </Routes>
  </Suspense>
);

export default Login;
