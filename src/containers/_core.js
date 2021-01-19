import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import AuthProvider from './auth-context';
import TempDataProvider from './temp-data-context';

const queryClient = new QueryClient();

export default function Core({ children, auth }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider auth={auth}>
        <TempDataProvider>

          {children}
          <ReactQueryDevtools />

        </TempDataProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

Core.propTypes = {
  children: PropTypes.node,
  auth: PropTypes.object.isRequired,
};
