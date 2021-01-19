import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { validateRequired, validateEmail } from '../../utils/form-validation';
import Layout from '../../components/layouts/layout';

export default function ExampleFormPage() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (formVal) => {
    console.log(formVal);
  };

  return (
    <Layout title="Form Example">
      <main className="p-6">

        <h1 className="pb-6">Form Example</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="pb-5">
            <div>👇 Required</div>
            <input
              type="text"
              name="email1"
              placeholder="Email #1"
              ref={register({
                validate: { validateRequired },
              })}
              className={clsx('border py-1.5 px-3', errors?.email1?.message && 'border-red-400')}
            />
            <div className="text-xs text-red-400">{errors?.email1?.message}</div>
          </div>
          <div className="pb-5">
            <div>👇 Must valid email, but can be empty</div>
            <input
              type="text"
              name="email2"
              placeholder="Email #2"
              ref={register({
                validate: { validateEmail },
              })}
              className={clsx('border py-1.5 px-3', errors?.email2?.message && 'border-red-400')}
            />
            <div className="text-xs text-red-400">{errors?.email2?.message}</div>
          </div>
          <div className="pb-5">
            <div>👇 Required & must valid email</div>
            <input
              type="text"
              name="email3"
              placeholder="Email #3"
              ref={register({
                validate: { validateRequired, validateEmail },
              })}
              className={clsx('border py-1.5 px-3', errors?.email3?.message && 'border-red-400')}
            />
            <div className="text-xs text-red-400">{errors?.email3?.message}</div>
          </div>
          <button
            type="button"
            className="btn btn-primary bg-gray-800"
            onClick={() => console.log('This is a button, but not a submit button')}
          >
            Regular Button
          </button>
          {' '}
          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit Button
          </button>
        </form>

        <p className="py-6">👆️ Notice the importance of <span className="font-semibold">type="button"</span> on button tag</p>

      </main>
    </Layout>
  );
}
