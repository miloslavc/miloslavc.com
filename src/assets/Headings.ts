import styled from '@emotion/styled';
import { mq, gray, white, black, primary } from '../utils';

export const HeroHeading = styled.h1`
  display: inline-block;
  color: ${black};
  line-height: 1.2;
  font-size: 2.5em;
  ${mq[0]} {
    font-size: 3em;
  }
  font-weight: 800;
`;
export const H1 = styled.h1`
  margin: 0.2em 0 0.5em;
  color: ${black};
  font-size: 2.2em;
  font-weight: 800;
`;

export const H2 = styled.h2`
  margin: 0.2em 0;
  color: ${black};
  font-size: 1.5em;
  font-weight: 800;
`;

export const H3 = styled.h3`
  text-transform: uppercase;
  margin: 1em 0;
  color: ${black};
  font-size: 1.125em;
`;
export const H4 = styled.h4`
  text-transform: uppercase;
  color: ${gray};
  font-size: 0.8em;
  margin-bottom: 0;
`;

export const P = styled.p`
  margin: 0;
  line-height: 1.25;
  font-size: 0.9em;
  margin: 1rem 0;
  font-weight: 600;
  color: ${black};
`;

export const TextPar = styled.p`
  font-size: 1.125em;
  font-weight: 600;
  line-height: 1.25;
  color: ${({ color }) => color};
`;

export const Span = styled.span`
  color: ${({ color }) => color};
`;

export const Text = styled.p`
  font-size: 1.125em;
  font-weight: 500;
  line-height: 1.35;
  color: ${gray};
`;
export const Key = styled.strong`
  color: ${black};
`;
export const FooterIcon = styled.a`
  color: ${white};
  &:hover {
    color: ${primary};
  }
`;
