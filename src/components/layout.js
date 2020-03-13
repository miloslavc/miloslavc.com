import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './layouts/header';
import Footer from './layouts/footer';
import ErrorBoundries from './errorBoundries';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ErrorBoundries>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </ErrorBoundries>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
