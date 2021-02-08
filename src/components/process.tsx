import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// dependencies
import styled from '@emotion/styled';

// assets
import { H4, H1, HeroHeading, Text, Key } from '../assets';
import { primary, mq } from '../utils';

type Process = {
  process: {
    edges: {
      node: {
        id: string;
        title: string;
        key: string;
        desc: {
          desc: string;
        };
      };
    }[];
  };
};

function Process() {
  const { process }: Process = useStaticQuery(graphql`
    query ProcessQuery {
      process: allContentfulProcess(sort: { order: ASC, fields: createdAt }) {
        edges {
          node {
            id
            title
            key
            desc {
              desc
            }
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <H4>How I Work</H4>
      <HeroHeading>Development Process</HeroHeading>
      <Text>
        Reach your business goals with excellent experience. <br />
        Let’s start working on your awesome project.
      </Text>
      <ContentWrapper>
        {process?.edges?.map(({ node }, index) => (
          <li key={node.id}>
            <H1>
              <span className="number">{`0${index + 1} `}</span>
              {node?.title}
            </H1>
            <Text>
              <Key>{node?.key}. </Key>
              {node?.desc?.desc}
            </Text>
          </li>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
}

export default Process;

const Wrapper = styled.section`
  min-height: 92vh;
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  align-items: center;
`;

const ContentWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  list-style: none;
  margin: 0;
  .number {
    color: ${primary};
  }

  ${mq[1]} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem 5rem;
  }
`;
