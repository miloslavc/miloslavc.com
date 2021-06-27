import * as React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

// dependencies
import { graphql, Link } from 'gatsby';
import { useSpring, animated } from 'react-spring';

// assets
import { P, H4, PrimaryButtonInt } from '../../assets';
import { mq, gray, black } from '../../utils';

// gatsby assets
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Container from '../../components/global/Container';

// animation
const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 1600,
  (x - window.innerWidth / 2) / 1600,
  1,
];

const trans = (x: number, y: number, s: number): string =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

type Project = {
  data: {
    contentfulProjects: {
      hero: any;
      seo: {
        title: string;
      };
      slug: string;
      title: string;
      desc: string;
      category: string;
      year: string;
      work: string;
      client: string;
      live: string;
      gitHub: string;
      stack: { stack: string };
      gallery: any;
    };
    allContentfulProjects: any;
  };
};

function ProjectLayout({ data }: Project) {
  const projectData = data.contentfulProjects;
  const index = data.allContentfulProjects.edges.findIndex(
    (item: any) => item.node.slug === data.contentfulProjects.slug,
  );

  const prev =
    index === 0 ? null : data.allContentfulProjects.edges[index - 1].node.slug;

  const next =
    index === data.allContentfulProjects.edges.length - 1
      ? null
      : data.allContentfulProjects.edges[index + 1].node.slug;

  // animation
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 350, friction: 80 },
  }));

  return (
    <Layout>
      <SEO title={` ${projectData?.seo?.title}`} />
      <>
        {projectData?.hero && (
          <Parallax>
            <animated.div
              className="card"
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y) })
              }
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{ transform: props.xys.to(trans) }}
            >
              <ImageWrapper>
                <GatsbyImage
                  image={projectData?.hero?.gatsbyImageData}
                  alt={projectData?.hero?.title}
                />
              </ImageWrapper>
            </animated.div>
          </Parallax>
        )}
        <Container>
          <ProjectWrapper>
            <Header>
              <Desc>{projectData?.desc}</Desc>
              <Title>{projectData?.title}</Title>
            </Header>
            <Details>
              <li>
                <H4>Category</H4>
                <P>{projectData?.category}</P>
              </li>
              <li>
                <H4>Year</H4>
                <P>{projectData?.year}</P>
              </li>
              <li>
                <H4>Work</H4>
                <P>{projectData?.work}</P>
              </li>
              <li>
                <H4>Client</H4>
                <P>{projectData?.client}</P>
              </li>
              <li>
                <H4>Stack</H4>
                <P>{projectData?.stack?.stack}</P>
              </li>
              {(projectData?.gitHub || projectData?.live) && (
                <li>
                  <H4>Links</H4>
                  <ExternalNav>
                    {projectData?.live && (
                      <a href={projectData?.live} target="_blank">
                        Live
                      </a>
                    )}
                    {projectData?.gitHub && (
                      <a href={projectData?.gitHub} target="_blank">
                        GitHub
                      </a>
                    )}
                  </ExternalNav>
                </li>
              )}
            </Details>
          </ProjectWrapper>
          <ProjectGallery>
            {projectData?.gallery?.map(
              (item: {
                gatsbyImageData: IGatsbyImageData;
                id: React.Key | null | undefined;
                title: string;
              }) => (
                <GatsbyImage
                  image={item?.gatsbyImageData}
                  key={item.id}
                  alt={item?.title}
                />
              ),
            )}
          </ProjectGallery>
          <Nav>
            <Link
              className={prev ? 'active' : 'hidden'}
              to={`/projects/${prev}`}
            >
              <PrimaryButtonInt>Previous Project</PrimaryButtonInt>
            </Link>

            <Link
              className={next ? 'active' : 'hidden'}
              to={`/projects/${next}`}
            >
              <PrimaryButtonInt>Next Project</PrimaryButtonInt>
            </Link>
          </Nav>
        </Container>
      </>
    </Layout>
  );
}

export default ProjectLayout;

export const query = graphql`
  query ($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
      slug
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
        title
        gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP])
        id
      }
      hero {
        title
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, formats: [AUTO, WEBP])
      }
      seo {
        title
      }
      stack {
        stack
      }
    }
    allContentfulProjects(sort: { fields: title, order: ASC }) {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

const ProjectWrapper = styled.article`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 2rem;
`;

const Details = styled.ul`
  grid-column: 1/-1;
  display: grid;
  grid-gap: 1rem;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  p,
  a {
    font-size: 0.875rem;
    margin: 0;
    margin-top: 0.5rem;
    color: ${gray};
    font-weight: 400;
    ${mq[1]} {
      font-size: 1rem;
    }
  }
  h4 {
    font-size: 0.875rem;
    color: ${black};
    margin: 0;
    ${mq[1]} {
      font-size: 1.125rem;
    }
  }
`;

const ProjectGallery = styled.article`
  text-align: center;
  margin: 2rem auto;
  display: grid;
  grid-gap: 1.5rem;
  ${mq[2]} {
    width: 100%;
    grid-gap: 2rem;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .hidden {
    pointer-events: none;
    visibility: hidden;
  }
`;

const Parallax = styled.div`
  margin-top: 5vh;
  max-height: 55vmin;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  ${mq[2]} {
    max-height: 55vmin;
  }
  ${mq[3]} {
    max-height: 55vmin;
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
  a {
    text-decoration: underline;
    display: inline-block;
    &:hover {
      color: ${black};
    }
  }
  a:first-of-type {
    margin-right: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  transform: translateY(-35%);
  margin: 0;
  text-align: right;
  font-weight: 700;
  order: -1;
  ${mq[1]} {
    font-size: 4.5rem;
  }
  ${mq[2]} {
    order: 2;
    margin-left: 3rem;
    font-size: 6.5rem;
    transform: translateY(-25%);
  }
`;

const Desc = styled.h4`
  font-size: 1rem;
  margin: 0;
  font-weight: normal;
  text-align: right;
  color: ${gray};
  ${mq[2]} {
    text-align: left;
    font-size: 1.125rem;
  }
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  ${mq[2]} {
    align-items: center;
    justify-content: space-between;
    justify-content: space-between;
    flex-direction: row;
  }
`;
