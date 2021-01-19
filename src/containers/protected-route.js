import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from './auth-context';
import Base from '../components/layouts/base';

export default function ProtectedRoute({ children, addRedirectQuery = true }) {
  const { replace, route } = useRouter();
  const auth = useAuthContext();
  const isAuthenticated = Boolean(auth.id);

  useEffect(() => {
    if (!isAuthenticated) {
      replace(addRedirectQuery
        ? `/login?redirect=${encodeURIComponent(route)}`
        : '/login');
    }
  }, []);

  return isAuthenticated
    ? children
    : (
      <Base>
        <main className="h-screen flex items-center justify-center">
          <div>Redirecting...</div>
        </main>
      </Base>
    );
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
  addRedirectQuery: PropTypes.bool,
};
