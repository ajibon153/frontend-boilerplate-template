import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { validateRequired, validateEmail } from '../../utils/form-validation';

export default function CustomModalContentExample({ onSubmit }) {
  const { register, handleSubmit, errors } = useForm();
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="email1"
        placeholder="Email #1"
        ref={register({
          validate: { validateRequired, validateEmail },
        })}
        className={clsx('border py-1.5 px-3', errors?.email1?.message && 'border-red-400')}
      />
      <div className="text-xs text-red-400">{errors?.email1?.message}</div>
      <button
        type="submit"
        className="btn btn-primary mt-4"
      >
        Submit Button
      </button>
    </form>
  );
}

CustomModalContentExample.propTypes = {
  onSubmit: PropTypes.func,
};
