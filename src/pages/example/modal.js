import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import useModal, { Modal } from '../../hooks/use-modal';
import { validateRequired, validateEmail } from '../../utils/form-validation';
import Layout from '../../components/layouts/layout';

export default function ExampleCustomHookPage() {
  const modal1 = useModal(); // Example 1 - Simple
  const modal2 = useModal(); // Example 2 - With close button inside, open another modal on close
  const modal3 = useModal(); // Example 3 - Modal contains form

  const {
    register, handleSubmit, errors, trigger,
  } = useForm();
  const onSubmit = (formVal) => {
    console.log(formVal);
    modal3.close();
  };

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

        <Modal {...modal1.props} onAfterClose={() => console.log('After close modal #1')}>
          <div>Modal #1</div>
        </Modal>

        <Modal {...modal2.props} onAfterClose={modal1.open}>
          <div>Modal #2</div>
          <p className="pb-4">You can also use ESC key to close modal.</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={modal2.close}
          >Close Modal
          </button>
          <div className="pt-5">*After close this modal, modal #1 will open.</div>
        </Modal>

        <Modal
          {...modal3.props}
          onRequestClose={() => {
            console.log('onRequestClose modal3');
            trigger();
          }}
        >
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              ref={register({
                validate: { validateRequired, validateEmail },
              })}
              className={clsx('border py-1.5 px-3', errors?.email?.message && 'border-red-400')}
            />
            <div className="text-xs text-red-400">{errors?.email?.message}</div>
            <button
              type="submit"
              className="btn btn-primary mt-4"
            >
              Submit Button
            </button>
          </form>
        </Modal>

      </main>
    </Layout>
  );
}
