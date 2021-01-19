import useModal from '../../hooks/use-modal';
import Layout from '../../components/layouts/layout';
import CustomModalContentExample from '../../components/sections/custom-modal-content-example';

export default function ExampleCustomHookPage() {
  const modal1 = useModal(); // Example 1 - Simple
  const modal2 = useModal(); // Example 2 - With close button inside, open another modal on close
  const modal3 = useModal(); // Example 3 - Modal contains form

  return (
    <Layout title="Custom Hook Example">
      <main className="p-6">

        <h1>Custom Hook Example (Modal)</h1>

        <section className="flex flex-col space-y-4 max-w-sm pt-7">
          <button
            type="button"
            className="btn btn-primary"
            onClick={modal1.open}
          >Example Modal #1
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={modal2.open}
          >Example Modal #2
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={modal3.open}
          >Example Modal #3
          </button>
        </section>

        <modal1.Component onAfterClose={() => console.log('After close modal #1')}>
          <div>Modal #1</div>
        </modal1.Component>

        <modal2.Component onAfterClose={modal1.open}>
          <div>Modal #2</div>
          <p className="pb-4">You can also use ESC key to close modal.</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={modal2.close}
          >Close Modal
          </button>
          <div className="pt-5">*After close this modal, modal #1 will open.</div>
        </modal2.Component>

        <modal3.Component onRequestClose={() => console.log('onRequestClose modal3')}>
          <CustomModalContentExample onSubmit={modal3.close} />
        </modal3.Component>

      </main>
    </Layout>
  );
}
