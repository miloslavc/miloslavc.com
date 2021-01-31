import * as React from 'react';

// gatsby assets
import Layout from '../components/layout';
import SEO from '../components/seo';

// components
import Hero from '../components/hero';
import Process from '../components/process';
import Featured from '../components/featured';
import Testimonial from '../components/testimonial';

function IndexPage() {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleScroll = () =>
    ref.current &&
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

  return (
    <Layout>
      <SEO title="Home" />
      <Hero handleScroll={handleScroll} />
      {/*// @ts-ignore */}
      <Featured ref={ref} />
      <hr />
      <Process />
      <hr />
      <Testimonial />
    </Layout>
  );
}

export default IndexPage;
