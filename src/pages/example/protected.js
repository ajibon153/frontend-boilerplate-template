import PropTypes from 'prop-types';
import Layout from '../../components/layouts/layout';
import ProtectedRoute from '../../containers/protected-route';

export default function ExampleProtectedPage({ auth }) {
  return (
    <ProtectedRoute>
      <Layout title="Protected Page Example">
        <main className="p-6">

          <h1>Protected Page Example</h1>

          <div className="pt-6 pb-2">Auth object:</div>
          <pre className="border p-3 bg-gray-100 rounded text-xs">
            {JSON.stringify(auth, null, 2)}
          </pre>

        </main>
      </Layout>
    </ProtectedRoute>
  );
}

ExampleProtectedPage.propTypes = {
  auth: PropTypes.object.isRequired,
};
