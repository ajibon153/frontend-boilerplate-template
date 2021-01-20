import { fireEvent, waitFor } from '@testing-library/react';
import { customRender } from './_utils';
import ExampleFormPage from '../pages/example/form';

describe('Example Form Page', () => {
  it('render correctly', () => {
    const { getByText } = customRender(<ExampleFormPage />);
    const headerElm = getByText(/Form Example/);
    expect(headerElm).toBeInTheDocument();
  });

  it('validate input', async () => {
    const { getByPlaceholderText, getByText, getAllByText } = customRender(<ExampleFormPage />);
    const inputElm = getByPlaceholderText('Email #1');
    const submitButtonElm = getByText(/Submit/);
    expect(inputElm).toBeInTheDocument();
    expect(submitButtonElm).toBeInTheDocument();
    fireEvent.click(submitButtonElm);
    await waitFor(() => {
      const warningElms = getAllByText(/This field is required/);
      expect(warningElms).toBeTruthy();
    });
  });
});
