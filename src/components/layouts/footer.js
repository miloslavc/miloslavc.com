import React from 'react';
import styled from '@emotion/styled';

// assets
import { FaGithub, FaLinkedinIn, FaDribbble } from 'react-icons/fa';
import { white, black, gray, primary } from '../../utils';
import { FooterIcon, H4, Text, HeroHeading, P } from '../../assets';

function Footer() {
  return (
    <Wrapper>
      <Content>
        <H4>Get in touch</H4>
        <HeroHeading>Let’s work together</HeroHeading>
        <Text>
          If you have a website or web app idea in mind, feel free to contact
          me. I promise that I will reply as soon as possible, and schedule a
          call or a meeting.
        </Text>
        <a
          className="CTA"
          href="mailto:miloslavc90@gmail.com"
          rel="noopener noreferrer"
        >
          contact@miloslavc.com
        </a>
        <nav>
          <FooterIcon
            target="_blank"
            href="https://dribbble.com/miloslavc"
            rel="noopener noreferrer"
          >
            <FaDribbble />
          </FooterIcon>
          <FooterIcon
            target="_blank"
            href="https://github.com/miloslavc"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </FooterIcon>
          <FooterIcon
            className="LinkedIn"
            target="_blank"
            href="https://www.linkedin.com/in/miloslavc/"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </FooterIcon>
        </nav>
        <P className="copy">
          © {new Date().getFullYear()}, All rights reserved. -{' '}
          <FooterIcon
            href="http://miloslav.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Designed and Developed by Miloslav Cvetkovic
          </FooterIcon>
        </P>
      </Content>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.footer`
  min-height: 5vh;
  padding: 2rem;
  background: ${black};
`;

const Content = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 2rem;
  max-width: 50em;
  margin: 0 auto;
  text-align: center;
  span {
    margin: 0.3em;
    color: ${white};
  }
  h1,
  p {
    color: ${white};
  }
  .copy {
    color: ${gray};
  }
  nav {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
  }

  .CTA {
    background: ${primary};
    color: ${white};
    padding: 0.4em 1em;
    border-radius: 50px;
    font-size: 1.125em;
    font-weight: 700;
    transition: all 0.2s ease-in;
    &:hover {
      transform: scale(1.05);
    }
  }
`;
