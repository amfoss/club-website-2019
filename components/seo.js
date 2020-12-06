import Head from 'next/head';
import React from 'react';

export default function SEO({ description, title }) {
  const siteTitle = 'FOSS@Amrita (amFOSS) - Code | Share | Grow';
  const siteDescription =
    'A Student Community of Open Source Enthusiasts based in Amrita Vishwa Vidyapeetham, Amritapuri. We promote and contribute to FOSS, and mentor students for achieving excellence.';
  const author = 'amfoss';
  const siteUrl = 'https://amfoss.in/';

  const metaDescription = description || siteDescription;

  const metaData = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:siteURL`,
      content: siteUrl,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:image`,
      content: `https://amfoss.in/logos/amfoss_seo.png`,
    },
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      name: `twitter:creator`,
      content: `@${author}`,
    },
    {
      property: `twitter:image`,
      content: `https://amfoss.in/logos/amfoss_seo.png`,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];

  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <link rel="shortcut icon" href="favicon.png" />
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}
