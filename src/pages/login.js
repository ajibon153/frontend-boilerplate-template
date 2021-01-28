import { useRouter } from 'next/router';
import { setCookieJWT } from '../utils/auth';
import Layout from '../components/layouts/layout';

export default function LoginPage() {
  const router = useRouter();

  const login = () => {
    const dummyJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1IiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.72UoRQiXG9MY_n9aQkCbBlxWGb-SyQQHCLIdertSBbA';
    setCookieJWT(dummyJWT);
    router.push(router.query.redirect || '/');
  };

  return (
    <Layout title="Login Page">
      <main className="p-6">

        <h1>Login Page</h1>

        <div className="py-6">
          After login will redirect to: <span className="link">{router.query.redirect}</span>
        </div>

        <button type="button" className="btn btn-primary" onClick={login}>Login</button>

      </main>
    </Layout>
  );
}
