import * as React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import SEO from '../components/seo';

// assets
import { P, H4, Span } from '../assets/';
import { primary, mq, black, gray } from '../utils';
import Container from '../components/global/Container';

export const pageQuery = graphql`
  query AboutQuery {
    about: contentfulAbout(slug: { eq: "about" }) {
      desc {
        desc
      }
      email
      heading
      title
    }
    experience: allContentfulExperience(
      sort: { order: ASC, fields: createdAt }
    ) {
      edges {
        node {
          duration
          role
          id
          name
          location
        }
      }
    }
  }
`;

interface Experience {
  duration: string;
  role: string;
  id: string;
  name: string;
  location: string | null;
}

interface Props {
  data: {
    about: {
      desc: {
        desc: string;
      };
      title: string;
      heading: string;
      email: string;
    };
    experience: {
      edges: { node: Experience }[];
    };
  };
}

function About({ data }: Props) {
  const { about, experience } = data;
  return (
    <Layout>
      <SEO title="About me" />
      <Container>
        <Wrapper>
          <Heading>
            <H4>
              Hello
              <span role="img" aria-label="Victory Hand">
                ✌
              </span>
            </H4>
            <h1>
              My name is <Span color={primary}>{about?.title}. </Span>
            </h1>
            <h1>{about?.desc?.desc}</h1>
          </Heading>
          <Content>
            <Experience>
              <H4>Experience</H4>
              {experience.edges.map(({ node }) => (
                <div key={node.id}>
                  <P color={black}>{`${node?.duration} | ${node?.role}`}</P>
                  <P color={gray}>
                    {`${node?.name}`}
                    {node?.location && <span>{` - ${node.location}`}</span>}
                  </P>
                </div>
              ))}
            </Experience>
          </Content>
        </Wrapper>
      </Container>
    </Layout>
  );
}

export default About;

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: 2rem;
  grid-template-rows: 1fr auto;

  ${mq[1]} {
    min-height: 75vh;
  }
  ${mq[2]} {
    grid-gap: 6rem;
  }
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  align-items: start;
  justify-items: start;
  grid-gap: 2em;
  grid-auto-rows: auto;
  ${mq[1]} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 5rem;
  }
  ${mq[2]} {
    grid-gap: 8rem;
  }
`;

const Heading = styled.div`
  width: 100%;
  padding-top: 4rem;
  ${mq[2]} {
    padding-top: 0;
  }
  h1 {
    margin: 0;
    font-size: 1.5rem;
    color: ${black};
    line-height: 1.5;
    ${mq[1]} {
      font-size: 1.75rem;
    }
    ${mq[2]} {
      font-size: 2.5rem;
    }
  }
  h4 {
    margin: 0;
  }
`;

const Experience = styled.div``;
