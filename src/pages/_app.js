import App from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { getDecodedJWT } from '../utils/auth';
import { publicRuntimeConfig } from '../config/env';
import { disableBrowserConsoleLog } from '../utils/console';
import Core from '../containers/_core';
import '../styles/index.css';

const { NEXT_PUBLIC_ENABLE_CONSOLE_LOG } = publicRuntimeConfig;

if (typeof window !== 'undefined') {
  console.info('%cApp v20210129.1122', 'color: cornflowerblue');
  if (NEXT_PUBLIC_ENABLE_CONSOLE_LOG === 'false') disableBrowserConsoleLog();
}

export default class MyApp extends App {
  static async getInitialProps(context) {
    const initialProps = await App.getInitialProps(context);
    const auth = getDecodedJWT(typeof window === 'undefined' && context.ctx.req);
    return { ...initialProps, auth };
  }

  render() {
    const { Component, pageProps, auth } = this.props;
    return (
      <Core auth={auth}>
        <NextNProgress stopDelayMs={100} />
        <Component auth={auth} {...pageProps} />
      </Core>
    );
  }
}
