import React from 'react';
import { Global, css } from '@emotion/react';

// layout
import Header from './layouts/header';
import Footer from './layouts/footer';
import normalize from 'normalize.css';
import './layout.css';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <Global
        styles={css`
          ${normalize}
          body {
            font-family: 'Raleway', sans-serif;
            font-weight: normal;
            word-wrap: break-word;
            font-kerning: normal;
          }
          a {
            background-color: transparent;
            -webkit-text-decoration-skip: objects;
            text-decoration: none;
          }
          a:active,
          a:hover {
            outline-width: 0;
          }
        `}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
