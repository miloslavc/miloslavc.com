import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { isMobile } from 'react-device-detect';

// dependencies
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';

// assets
import { H4, H2, Text } from '../assets';
import { mq } from '../utils';

type Projects = {
  featured: {
    edges: {
      node: {
        id: string;
        slug: string;
        category: string;
        work: string;
        title: string;
        image: any;
      };
    }[];
  };
};

const Featured = () => {
  const [showData, setShowData] = React.useState(false);
  const [dataId, setDataId] = React.useState<null | string>(null);
  const { featured }: Projects = useStaticQuery(graphql`
    query FeaturedQuery {
      featured: allContentfulProjects {
        edges {
          node {
            slug
            id
            category
            work
            title
            image {
              title
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);
  const handleEnter = (id: string) => {
    setShowData(!showData);
    setDataId(id);
  };
  const handleLeave = () => {
    setShowData(false);
    setDataId(null);
  };

  const featuredProjects = featured.edges;

  return (
    <Wrapper>
      <H4>Recent Works</H4>
      <CardWrapper>
        {featuredProjects.map(({ node }) => (
          <Link
            to={`/projects/${node.slug}`}
            key={node.id}
            data-testid="featured"
          >
            <Card
              onMouseOver={() => handleEnter(node.id)}
              onMouseLeave={handleLeave}
            >
              <Image scale={dataId === node.id ? 1.03 : 1}>
                {node?.image && (
                  <GatsbyImage
                    image={node?.image?.gatsbyImageData}
                    alt={node?.image?.title}
                    key={node?.id}
                  />
                )}
              </Image>
              <CardTitle opacity={isMobile || dataId === node.id ? 1 : 0}>
                <H2>{node?.title}</H2>
                <Text>{node?.work}</Text>
              </CardTitle>
            </Card>
          </Link>
        ))}
      </CardWrapper>
    </Wrapper>
  );
};

export default Featured;

const Wrapper = styled.section`
  min-height: 100vh;
  h4 {
    margin-bottom: 2rem;
  }
  a {
    width: 100%;
  }

  ${mq[2]} {
    /* padding: 2rem 2rem 3rem; */

    a {
      &:nth-of-type(2) {
        transform: translateY(30%);
      }
    }
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 2rem;

  ${mq[2]} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 5rem;
  }
`;

const Card = styled.article`
  width: 100%;
  display: grid;
  grid-auto-rows: auto auto;
  grid-gap: 1rem;
`;

const CardTitle = styled.div<{ opacity: number }>`
  p {
    opacity: ${({ opacity }) => opacity};
    transition: all 0.2s ease-in;
    margin-bottom: 0;
  }
`;
const Image = styled.div<{ scale: number }>`
  transition: all 0.2s ease-in;
  transform: scale(${({ scale }) => scale});
`;
