import { Link } from 'gatsby';
import * as React from 'react';
import styled from '@emotion/styled';

// assets
import CV from '../../assets/CV_2021.pdf';

import { primary, white, black, mq } from '../../utils';
import { PrimaryIntButtonNav, PrimaryButtonNav } from '../../assets';

const Header = () => (
  <HeaderStyled>
    <nav>
      <PrimaryIntButtonNav className="logo" to="/">
        m-c.
      </PrimaryIntButtonNav>
      <PrimaryIntButtonNav to="/about">About</PrimaryIntButtonNav>
      <PrimaryButtonNav href={CV} download="Miloslav_Cvetkovic">
        Resume
      </PrimaryButtonNav>
      <PrimaryButtonNav
        href="mailto:contact@miloslavc.com"
        rel="noopener noreferrer"
      >
        Contact
      </PrimaryButtonNav>
    </nav>
  </HeaderStyled>
);

export default Header;

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background: ${white};
  height: 8vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  z-index: 99;
  .logo {
    margin-right: auto;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${primary};
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 90%;
    margin: 0 auto;
    a {
      font-size: 1em;
      font-weight: bold;
      color: ${black};
      margin-right: 1em;
      display: inline-flex;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;
