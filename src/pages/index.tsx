import * as React from 'react';

// gatsby assets
import Layout from '../components/layout';
import SEO from '../components/seo';

// components
import Hero from '../components/hero';
import Process from '../components/process';
import Featured from '../components/featured';
// import Testimonial from '../components/testimonial';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Process />
      <Featured />
      {/* <Testimonial /> */}
    </Layout>
  );
}

export default IndexPage;
