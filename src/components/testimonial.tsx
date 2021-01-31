import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// dependencies
import styled from '@emotion/styled';
import Img from 'gatsby-image';

// assets
import { H2, Text } from '../assets';
import { primary, gray } from '../utils';

type Testimonial = {
  testimonial: {
    edges: {
      node: {
        id: string;
        desc: {
          desc: string;
        };
        name: string;
        image: {
          fluid: any;
        };
      };
    }[];
  };
};

function Testimonial() {
  const { testimonial }: Testimonial = useStaticQuery(graphql`
    query TestimonialQuery {
      testimonial: allContentfulTestimonial {
        edges {
          node {
            id
            desc {
              desc
            }
            name
            image {
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const { edges } = testimonial;

  return (
    <Wrapper>
      {edges.map(({ node }) => (
        <Content key={node.id}>
          <Text>{node.desc.desc}</Text>
          <InnerWrapper>
            <Image>
              <Img fluid={node.image.fluid} />
            </Image>
            <H2>{node.name}</H2>
          </InnerWrapper>
        </Content>
      ))}
      {edges.length > 1 && edges.map(({ node }) => <Dot key={node.name} />)}
    </Wrapper>
  );
}

export default Testimonial;

const Wrapper = styled.section`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`;

const Content = styled.div`
  max-width: 40em;
  margin: 0 auto;
  align-self: center;
  text-align: center;
`;
const Image = styled.div`
  width: 3.5em;
  height: 3.5em;
  border-radius: 50%;
  border: 2px solid ${gray};
  overflow: hidden;
  margin-right: 1rem;
  div {
    width: 100%;
    height: 100%;
  }
`;
const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    margin: 0;
  }
`;

const Dot = styled.span`
  height: 0.6rem;
  width: 0.6rem;
  border-radius: 50%;
  background: ${primary};
`;
