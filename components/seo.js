import Head from 'next/head';
import React from 'react';

export default function SEO({ description, title, image = null, slug = null }) {
  const siteTitle = 'amFOSS (FOSS@Amrita)';
  const siteDescription =
    'A student community based in Amrita Vishwa Vidyapeetham, Amritapuri focused on contributing to FOSS and mentoring students to achieve excellence.';
  const author = 'amfoss';
  const siteUrl = slug ? slug : 'https://amfoss.in/';
  const twitterHandle = 'amfoss_in';
  const seoCardImagePath = image ? image : '/logos/amfoss_seo.png';
  const metaDescription = description || siteDescription;

  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <link rel="shortcut icon" href="/favicon.png" />
      <meta
        name="keywords"
        content="amfoss, foss@amrita, amrita foss, amritapuri foss, amrita, foss club, foss amrita, foss india, foss"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={`${title} | ${siteTitle}`} />
      <meta property="og:siteURL" content={siteUrl} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={seoCardImagePath} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:site" content={author} />
      <meta name="twitter:image" content={seoCardImagePath} />
      <meta name="twitter:title" content={`${title} | ${siteTitle}`} />
      <meta name="twitter:description" content={metaDescription} />
    </Head>
  );
}
