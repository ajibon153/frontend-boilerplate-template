import { useQuery } from 'react-query';
import { getProductById, getProducts } from '../../api/product';
import Layout from '../../components/layouts/layout';

export default function ExampleReactQueryPage() {
  const queryProducts = useQuery('products', getProducts);
  const queryProductById = useQuery(['product', { id: 4 }], getProductById);

  return (
    <Layout title="React-Query Example">
      <main className="p-6">

        <h1>React-Query Example</h1>

        <pre className="border p-3 max-h-72 overflow-auto bg-gray-100 rounded mt-6 text-xs">
          {JSON.stringify({
            status: queryProducts.status,
            isFetching: queryProducts.isFetching,
            data: queryProducts.data,
          }, null, 2)}
        </pre>

        <pre className="border p-3 max-h-72 overflow-auto bg-gray-100 rounded mt-2 text-xs">
          {JSON.stringify({
            status: queryProductById.status,
            isFetching: queryProductById.isFetching,
            data: queryProductById.data,
          }, null, 2)}
        </pre>

      </main>
    </Layout>
  );
}
