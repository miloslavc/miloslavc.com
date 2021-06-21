import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { black, primary, white } from '../utils';
import { Link } from 'gatsby';

const button = css`
  color: ${black};
  position: relative;
  z-index: 10;
  transition: all 0.2s ease-in;
  padding: 0.1em;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background: ${primary};
    z-index: -2;
    transition: all 0.2s ease-in;
  }
  &:hover {
    color: ${white};

    cursor: pointer;
    &:before {
      height: 100%;
    }
  }
`;

export const SecondaryButton = styled.a`
  background: ${primary};
  color: ${white};
  padding: 0.4em 2em;
  border-radius: 50px;
  font-size: 1.125em;
  font-weight: 600;
  transition: all 0.2s ease-in;
  font-size: 1rem;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const PrimaryButton = styled.button`
  ${button}
  border: none;
  background: none;
  outline: none;
  font-size: 0.9em;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 2rem;
`;

export const PrimaryButtonNav = styled.a`
  ${button}
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.25;
`;

export const PrimaryIntButtonNav = styled(Link)`
  ${button}
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.25;
`;

export const PrimaryButtonInt = styled.span`
  ${button}
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.25;
`;

export const CTA = styled.a`
  display: inline-block;
  margin-top: 2rem;
  background: ${white};
  color: ${black};
  padding: 1rem 2rem;
  border-radius: 5rem;
  font-size: 1rem;
  font-weight: 700;
  transition: all 0.2s ease-in;
  border: 2px solid ${black};
  outline: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background: ${black};
    color: ${white};
  }
`;
