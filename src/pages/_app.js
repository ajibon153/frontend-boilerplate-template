import App from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { getDecodedJWT } from '../utils/auth';
import { publicRuntimeConfig } from '../config';
import { disableBrowserConsoleLog } from '../utils/console';
import Core from '../containers/_core';
import '../styles/index.css';

const { NEXT_PUBLIC_ENABLE_CONSOLE_LOG } = publicRuntimeConfig;

export default class MyApp extends App {
  static async getInitialProps(context) {
    const initialProps = await App.getInitialProps(context);
    const auth = getDecodedJWT(typeof window === 'undefined' && context.ctx.req);
    return { ...initialProps, auth };
  }

  render() {
    if (NEXT_PUBLIC_ENABLE_CONSOLE_LOG === 'false') disableBrowserConsoleLog();
    const { Component, pageProps, auth } = this.props;
    return (
      <Core auth={auth}>
        <NextNProgress stopDelayMs={100} />
        <Component auth={auth} {...pageProps} />
      </Core>
    );
  }
}
