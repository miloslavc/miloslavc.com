import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

// assets
import { FaGithub, FaLinkedinIn, FaDribbble } from 'react-icons/fa';
import { primary, white, black, mq } from '../../utils';

const Header = () => (
  <HeaderStyled>
    <nav>
      <Link className="logo" to="/">
        m-c.
      </Link>
      <a
        className="icons"
        target="_blank"
        href="https://dribbble.com/miloslavc"
        rel="noopener noreferrer"
      >
        <FaDribbble />
      </a>
      <a
        className="icons"
        target="_blank"
        href="https://github.com/miloslavc"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        className="LinkedIn icons"
        target="_blank"
        href="https://www.linkedin.com/in/miloslavc/"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <span className="icons"> - </span>
      <Link to="/about">About</Link>
      {/* <Link to="/blog">Blog</Link> */}
      <a
        className="CTA"
        href="mailto:miloslavc90@gmail.com"
        rel="noopener noreferrer"
      >
        Let&apos;s Talk
      </a>
    </nav>
  </HeaderStyled>
);

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// };

// Header.defaultProps = {
//   siteTitle: ``,
// };

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
    font-size: 1.25em;
    font-weight: 700;
    color: ${primary};
  }
  .LinkedIn {
    margin-right: 0;
  }
  .CTA {
    background: ${primary};
    padding: 0.4rem 1rem;
    border-radius: 50px;
    color: ${white};
    &:hover {
      color: ${black};
    }
  }
  .icons {
    display: none;
    ${mq[1]} {
      display: inline-flex;
    }
  }
  span {
    padding: 0 1em;
    font-size: 1.5em;
    color: ${black};
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
      &:hover {
        color: ${primary};
      }
      img {
        max-width: 20px;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
