import * as React from 'react';
import styled from '@emotion/styled';

// assets
import { CTA } from '../assets';
import { mq } from '../utils';

function Hero() {
  return (
    <Wrapper>
      <Content>
        <h1>
          Hi 👋 — my name is Miloslav, a frontend developer currently based in
          Berlin. I am passionate about solving interesting problems and shaping
          ideas into products.
        </h1>
        <CTA href="mailto:contact@miloslavc.com">Get in Touch</CTA>
      </Content>
    </Wrapper>
  );
}

export default Hero;

const Wrapper = styled.section`
  max-width: 70rem;
  padding: 5vh 2rem 2rem;
  margin: 0 auto;
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: start;
  ${mq[1]} {
    padding: 10vh 2rem 2rem;
  }
`;

const Content = styled.div`
  width: 100%;

  h1 {
    font-size: 2rem;
    line-height: 1.5;

    ${mq[1]} {
      font-size: 2.5rem;
    }

    ${mq[2]} {
      font-size: 3rem;
    }
  }
`;
