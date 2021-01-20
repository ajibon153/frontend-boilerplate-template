/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';

const mockRouter = {
  basePath: '',
  pathname: '/',
  route: '/',
  asPath: '/',
  query: {},
  push: jest.fn(() => Promise.resolve(true)),
  replace: jest.fn(() => Promise.resolve(true)),
  reload: jest.fn(() => Promise.resolve(true)),
  prefetch: jest.fn(() => Promise.resolve()),
  back: jest.fn(() => Promise.resolve(true)),
  beforePopState: jest.fn(() => Promise.resolve(true)),
  isFallback: false,
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  locales: ['en', 'id'],
  locale: 'en',
};

export const customRender = (ui, { router, ...options } = {}) => {
  const wrapper = ({ children }) => (
    <RouterContext.Provider value={{ ...mockRouter, ...router }}>
      {children}
    </RouterContext.Provider>
  );
  return render(ui, { wrapper, ...options });
};
