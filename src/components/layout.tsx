import React from 'react';

// layout
import Header from './layouts/header';
import Footer from './layouts/footer';
import './layout.css';

const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
