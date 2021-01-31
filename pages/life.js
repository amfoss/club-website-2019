import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TitleBar from '../components/theme/titleBar';
import ClubLife from '../components/clubLife/clubLife';

const Life = () => (
  <Layout>
    <SEO
      title="Life in the Club"
      description="A look into an amFOSS member's daily life in the club"
    />
    <TitleBar title="Life in the Club" />
    <ClubLife />
  </Layout>
);

export default Life;
