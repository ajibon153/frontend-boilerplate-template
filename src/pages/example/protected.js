import PropTypes from 'prop-types';
import { removeCookieJWT } from '../../utils/auth';
import withAuth from '../../containers/auth-hoc';
import Layout from '../../components/layouts/layout';

function ExampleProtectedPage({ auth }) {
  console.log('This code will be executed if only user is authenticated');

  const logout = () => {
    removeCookieJWT();
    window.location = '/';
  };

  return (
    <Layout title="Protected Page Example">
      <main className="p-6">

        <h1>Protected Page Example</h1>

        <div className="pt-6 pb-2">Auth object:</div>
        <pre className="border p-3 bg-gray-100 rounded text-xs">
          {JSON.stringify(auth, null, 2)}
        </pre>

        <button type="button" className="btn btn-primary mt-6" onClick={logout}>Logout</button>

      </main>
    </Layout>
  );
}

ExampleProtectedPage.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default withAuth(ExampleProtectedPage);
// export default withAuth(ExampleProtectedPage, { addRedirectQuery: false });
