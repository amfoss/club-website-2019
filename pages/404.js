import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TitleBar from '../components/theme/titleBar';
import img404 from '../public/illus/404_stuart.png';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 - Page not Found" />
    <TitleBar title="This page does not exist" />
    <img src={img404} class="img-fluid mx-auto d-block m-4 p-4" alt="404" />
  </Layout>
);

export default NotFoundPage;
