import * as React from 'react';

// dependencies
import styled from '@emotion/styled';
import { useTrail, animated } from 'react-spring';

// assets
import { Text, HeroHeading, CTA } from '../assets';
import { primary, mq } from '../utils';

const items = [
  'Hi there 👋— ',
  'my name is ',
  'Miloslav.',
  " I'm a",
  'frontend',
  'developer',
  'and designer',
  'currently based',
  'in Berlin.',
];
const config = { mass: 5, tension: 2000, friction: 200 };

function Hero() {
  const [toggle, set] = React.useState(true);

  // animation settings
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <Wrapper>
      <Content onLoad={() => set((state) => !state)}>
        {/* <H4>Miloslav Cvetkovic</H4> */}
        {trail.map(({ x, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
              // @ts-expect-error react-spring
              transform: x.interpolate(
                (value: any) => `translate3d(0,${value}px,0)`,
              ),
            }}
          >
            <HeroHeading>{items[index]}</HeroHeading>
          </animated.div>
        ))}
        <Text>
          I am passionate about solving interesting problems and shaping ideas
          into products.
        </Text>
        <CTA href="mailto:contact@miloslavc.com">Get in Touch</CTA>
      </Content>
    </Wrapper>
  );
}

export default Hero;

const Wrapper = styled.section`
  max-width: 70rem;
  padding: 10vh 2rem 2rem;
  margin: 0 auto;
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: start;
  grid-template-columns: 1fr;

  .trails-text {
    display: inline-block;
    padding-right: 1em;
    &:nth-of-type(3) {
      h1 {
        color: ${primary};
      }
    }
  }
`;

const Content = styled.div`
  width: 100%;

  ${mq[1]} {
    width: 65%;
  }
  p {
    margin-top: 2rem;
  }
`;
