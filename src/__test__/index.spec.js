import { customRender } from './_utils';
import HomePage from '../pages/index';

describe('Home Page', () => {
  it('render correctly', () => {
    const { getByText } = customRender(<HomePage />);
    const headerElm = getByText(/Homepage/);
    expect(headerElm).toBeInTheDocument();
  });
});
