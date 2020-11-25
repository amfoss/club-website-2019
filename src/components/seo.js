import Head from 'next/head';
import config from '../../config.yml';

export default function SEO({ description, title }) {
  const siteTitle = 'FOSS@Amrita (amFOSS) - Code | Share | Grow';
  const author = 'amfoss';
  const siteUrl = 'https://amfoss.in/';

  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title | siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:author" content={author} />
      <meta property="og:siteUrl" content={siteUrl} />
    </Head>
  );
}
