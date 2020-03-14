import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

// dependencies
import { graphql, Link } from 'gatsby';
import { useSpring, animated } from 'react-spring';

// assets
import {
  P,
  H2,
  H4,
  PrimaryButtonInt,
  TextPar,
  SecondaryButton,
} from '../assets';
import { mq, mqx, gray, black } from '../utils';

// gatsby assets
import Layout from '../components/layout';
import SEO from '../components/seo';

// animation
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 1600,
  (x - window.innerWidth / 2) / 1600,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function ProjectLayout({ data, pageContext }) {
  const { next, prev } = pageContext;
  const projectData = data.contentfulProjects;

  // animation
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 350, friction: 80 },
  }));

  return (
    <Layout>
      <SEO title={` ${projectData.seo.title}`} />
      <Wrapper>
        {projectData.hero && (
          <Parallax>
            <animated.div
              class="card"
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
              }
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              // eslint-disable-next-line react/destructuring-assignment
              style={{ transform: props.xys.interpolate(trans) }}
            >
              <ImageWrapper>
                <Img fluid={projectData.hero.fluid} />
              </ImageWrapper>
            </animated.div>
          </Parallax>
        )}
        <ProjectWrapper>
          <H2>{projectData.title}</H2>
          <TextPar color={gray}>{projectData.desc}</TextPar>
          <Details>
            <li>
              <H4>Category</H4>
              <P>{projectData.category}</P>
            </li>
            <li>
              <H4>Year</H4>
              <P>{projectData.year}</P>
            </li>
            <li>
              <H4>Work</H4>
              <P>{projectData.work}</P>
            </li>
            <li>
              <H4>Client</H4>
              <P>{projectData.client}</P>
            </li>
            <li className="stack">
              <H4>Stack</H4>
              <P>{projectData.stack.stack}</P>
            </li>
          </Details>
          <ExternalNav>
            <SecondaryButton href={projectData.live} target="_blank">
              live
            </SecondaryButton>
            <SecondaryButton href={projectData.gitHub} target="_blank">
              git
            </SecondaryButton>
          </ExternalNav>
        </ProjectWrapper>
        <ProjectGallery>
          {projectData.gallery &&
            projectData.gallery.map(item => (
              <Img key={item.id} fluid={item.fluid} />
            ))}
        </ProjectGallery>
        <Nav>
          <Link className={prev ? 'active' : 'hidden'} to={`/projects/${prev}`}>
            <PrimaryButtonInt>Previous Project</PrimaryButtonInt>
          </Link>

          <Link className={next ? 'active' : 'hidden'} to={`/projects/${next}`}>
            <PrimaryButtonInt>Next Project</PrimaryButtonInt>
          </Link>
        </Nav>
      </Wrapper>
    </Layout>
  );
}

export default ProjectLayout;

export const query = graphql`
  query($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
      category
      client
      desc
      gitHub
      live
      slug
      title
      year
      work
      gallery {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyContentfulFluid
        }
        id
      }
      hero {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      seo {
        title
      }
      stack {
        stack
      }
    }
  }
`;

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  grid-gap: 1em;
  grid-auto-rows: auto;
`;

const ProjectWrapper = styled.article`
  padding: 0 2rem 2rem;
  text-align: center;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 2rem;
  margin: 0 auto;
  max-width: 75em;
  width: 100%;
  ${mq[1]} {
    padding: 3rem 2rem 2rem;
  }
`;

const Details = styled.ul`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 1rem;
  width: 100%;
  margin: 0;
  list-style: none;
  text-align: center;
  p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: ${gray};
  }
  h4 {
    color: ${black};
  }
  li:last-of-type {
    ${mqx[0]} {
      grid-column: 1/-1;
    }
  }
`;

const ProjectGallery = styled.article`
  text-align: center;
  max-width: 75em;
  padding: 0.5rem 2rem;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  ${mq[1]} {
    padding: 0 5rem 2rem;
    grid-gap: 2rem;
  }
`;

const Nav = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  margin-bottom: 2rem;
  .hidden {
    pointer-events: none;
    visibility: hidden;
  }
`;
const Parallax = styled.div`
  margin-top: 5vh;
  max-height: 65vmin;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  ${mq[1]} {
    max-height: 75vmin;
  }
`;

const ImageWrapper = styled.div`
  margin-top: 5vh;
  width: 110%;
  position: relative;
  left: 50%;
  transform: translate(-50%, -23%);
`;

const ExternalNav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  align-items: end;
  a:last-of-type {
    align-items: start;
  }
`;
