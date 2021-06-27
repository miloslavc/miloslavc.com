import React from 'react';
import styled from '@emotion/styled';
import { mq } from '../../utils';

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;

const ContainerWrapper = styled.section`
  padding: 0 2rem 2rem;
  margin: 0 auto;
  max-width: 75rem;
  ${mq[2]} {
    padding: 0 2rem 2rem;
  }
  ${mq[3]} {
    width: 100%;
  }
`;
