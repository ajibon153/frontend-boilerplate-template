import Head from 'next/head';

export const AUTHOR = 'Takalab.id';
export const SITE_NAME = 'Takalab';
export const DESCRIPTION = 'The digital world is messy, complex, complicated, but your life doesn’t have to be.';
export const KEYWORDS = 'Takalab, PT Takalab Bisnis Teknologi, Business, Research, Consultation, Technology, Product & Service Design, Software Development, Lab, Product Ideation, Product Incubation';
export const THEME_COLOR = '#ffffff';

export default function Meta() {
  return (
    <Head>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      <meta name="author" content={AUTHOR} />
      <meta name="keywords" content={KEYWORDS} />
      <meta name="theme-color" content={THEME_COLOR} />
      <meta name="description" content={DESCRIPTION} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:type" content="website" />
      {/* <meta property="og:image" content="" /> */}
    </Head>
  );
}
