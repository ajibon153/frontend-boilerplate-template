import PropTypes from 'prop-types';
import Head from 'next/head';
import Meta, { SITE_NAME } from './meta';

export default function Base({ children, title, fullTitle }) {
  const finalTitle = fullTitle || (title ? `${title} · ${SITE_NAME}` : SITE_NAME);
  return (
    <>
      <Meta />

      <Head>
        <meta property="og:title" content={finalTitle} />
        <title>{finalTitle}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" integrity="sha512-c42qTSw/wPZ3/5LBzD+Bw5f7bSF2oxou6wEb+I/lqeaKV5FDIfMvvRp772y4jcJLKuGUOpbJMdg/BTl50fJYAw==" crossOrigin="anonymous" />
      </Head>

      {children}
    </>
  );
}

Base.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  fullTitle: PropTypes.string,
};
