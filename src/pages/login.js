import { useRouter } from 'next/router';
import Layout from '../components/layouts/layout';

export default function LoginPage() {
  const router = useRouter();

  return (
    <Layout title="Login Page">
      <main className="p-6">

        <h1>Login Page</h1>

        <div className="pt-6">
          After login will redirect to: <span className="link">{router.query.redirect}</span>
        </div>

      </main>
    </Layout>
  );
}
