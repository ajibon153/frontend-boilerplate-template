import PropTypes from 'prop-types';
import Link from 'next/link';
import LangSwitcher from '../commons/lang-switcher';
import Base from './base';

export default function Layout({ children, title, fullTitle }) {
  return (
    <Base title={title} fullTitle={fullTitle}>

      <header>
        <h2 className="p-6 pb-5">Next.js Boilerplate (+Examples)</h2>
        <nav className="px-6 py-5 border-t border-b bg-gray-50">
          <Link href="/">
            <a className="link">Home</a>
          </Link>
          <span className="mx-4 hidden sm:inline">|</span>
          <br className="sm:hidden" />
          <span className="mr-1.5">Examples: </span>
          <Link href="/example/react-query">
            <a className="link">React-Query</a>
          </Link>
          <span className="mx-0.5"> · </span>
          <Link href="/example/i18n">
            <a className="link">i18n</a>
          </Link>
          <span className="mx-0.5"> · </span>
          <Link href="/example/form">
            <a className="link">Form</a>
          </Link>
          <span className="mx-0.5"> · </span>
          <Link href="/example/protected">
            <a className="link">Protected Route</a>
          </Link>
          <span className="mx-0.5"> · </span>
          <Link href="/example/modal">
            <a className="link">Custom Hook (Modal)</a>
          </Link>
        </nav>
      </header>

      {children}

      <div className="border-t mt-8 p-6">
        <LangSwitcher />
      </div>

    </Base>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  fullTitle: PropTypes.string,
};
