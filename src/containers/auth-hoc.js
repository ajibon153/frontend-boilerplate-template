/* eslint-disable react/prop-types */
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Base from '../components/layouts/base';

const DEFAULT_OPTION = { addRedirectQuery: true };

const withAuth = (Component, { addRedirectQuery } = DEFAULT_OPTION) => (props) => {
  const { replace, route } = useRouter();

  const { auth } = props;
  const isAuthenticated = Boolean(auth.id);

  useEffect(() => {
    if (!isAuthenticated) {
      replace(addRedirectQuery
        ? `/login?redirect=${encodeURIComponent(route)}`
        : '/login');
    }
  }, []);

  return isAuthenticated
    ? <Component {...props} />
    : (
      <Base>
        <main className="h-screen flex items-center justify-center">
          <div>Redirecting...</div>
        </main>
      </Base>
    );
};

export default withAuth;
