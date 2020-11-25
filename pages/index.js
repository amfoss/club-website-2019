import React from 'react';
import '../styles/style.sass';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HomeSections from '../components/home/homeSections';
import HomeLanding from '../components/home/homeLanding';
import WhyJoin from '../components/home/whyJoin';
import AlumniSuccess from '../components/home/alumniSuccess';
import ThanksAll from '../components/home/thanksAll';

const IndexPage = () => (
  <Layout>
    <SEO title="India's Leading FOSS Club" />
    <HomeLanding />
    <div style={{ background: '#ffe' }}>
      <HomeSections />
      <AlumniSuccess />
      <WhyJoin />
      <ThanksAll />
    </div>
  </Layout>
);

export default IndexPage;
