import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import SEO from '../components/seo';

// assets
import { P, H4, TextPar, Span, PrimaryButtonNav } from '../assets';
import { primary, mq, black, gray } from '../utils';

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
      edges: {
        node: {
          duration: string;
          role: string;
          id: string;
          name: string;
          location: string | null;
        };
      };
    };
  };
}

function About({ data }: Props) {
  const { about, experience } = data;
  return (
    <Layout>
      <SEO title="About me" />
      <Wrapper>
        <Heading>
          <H4>
            Hello
            <span role="img" aria-label="Victory Hand">
              ✌
            </span>
          </H4>
          <h1>
            My name is <Span color={primary}>{about.title}. </Span>
          </h1>
          <h1>{about.heading}</h1>
        </Heading>
        <Content>
          <ContentText>
            <TextPar color={black}>{about.desc.desc}</TextPar>
            <TextPar color={black}>
              If you have a project in mind and you are in need of my skills,
              <PrimaryButtonNav
                href={`mailto:${about.email}`}
                target="_self"
                rel="noopener noreferrer"
                className="btn"
              >
                let&apos;s talk.
              </PrimaryButtonNav>
            </TextPar>
          </ContentText>
          <Experience>
            <H4>Experience</H4>
            {experience.edges.map(({ node }) => (
              <div key={node.id}>
                <P color={black}>{`${node.duration} | ${node.role}`}</P>
                <P color={gray}>
                  {`${node.name}`}
                  {node.location && <span>{` - ${node.location}`}</span>}
                </P>
              </div>
            ))}
          </Experience>
        </Content>
      </Wrapper>
    </Layout>
  );
}

export default About;

const Wrapper = styled.section`
  max-width: 70em;
  min-height: 95vh;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: 3em;
  grid-template-rows: 1fr auto;
  padding: 4rem 2rem;

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
    grid-gap: 5em;
  }
  ${mq[2]} {
    grid-gap: 8em;
  }
`;

const Heading = styled.div`
  width: 100%;
  padding-top: 4rem;
  ${mq[0]} {
    padding-top: 0;
  }
  h1 {
    margin-bottom: 0.5rem;
    font-size: 2.5em;
    color: ${black};
  }
`;

const ContentText = styled.div`
  .btn {
    margin-left: 0.2em;

    &--hover {
      &:hover {
        color: ${primary};
      }
    }
  }
`;
const Experience = styled.div``;
