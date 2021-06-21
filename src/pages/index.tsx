import * as React from 'react';

// gatsby assets
import Layout from '../components/layout';
import SEO from '../components/seo';

// components
import Hero from '../components/hero';
import Process from '../components/process';
import Featured from '../components/featured';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Featured />
      <Process />
    </Layout>
  );
}

export default IndexPage;
