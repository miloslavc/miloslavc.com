import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

//dependencies
import styled from "@emotion/styled"
import Img from "gatsby-image"

//assets
import { H4, H2, Text } from "../assets"
import { mq } from "../utils"

const Featured = React.forwardRef((props, ref) => {
  const [showData, setShowData] = useState(false)
  const [dataId, setDataId] = useState(null)
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulProjects {
        edges {
          node {
            slug
            id
            category
            title
            work
            image {
              fluid(maxWidth: 1280) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const handleEnter = id => {
    setShowData(!showData)
    setDataId(id)
  }
  const handleLeave = () => {
    setShowData(false)
    setDataId(null)
  }

  const featuredProjects = data.allContentfulProjects.edges
  return (
    <Wrapper ref={ref}>
      <H4>Recent Works</H4>
      <CardWrapper>
        {featuredProjects.map(({ node }) => (
          <Link to={`/projects/${node.slug}`} key={node.id}>
            <Card
              onMouseEnter={() => handleEnter(node.id)}
              onMouseLeave={handleLeave}
            >
              <Image scale={dataId === node.id ? 1.03 : 1}>
                <Img fluid={node.image.fluid} />
              </Image>
              <CardTitle opacity={dataId === node.id ? 1 : 0}>
                <H2>{node.title}</H2>
                <Text>{node.work}</Text>
              </CardTitle>
            </Card>
          </Link>
        ))}
      </CardWrapper>
    </Wrapper>
  )
})

export default Featured

const Wrapper = styled.section`
  min-height: 100vh;
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem;
  h4 {
    margin-bottom: 2rem;
  }
  a {
    width: 100%;
  }

  ${mq[1]} {
    padding: 2rem 2rem 3rem;

    a {
      &:nth-of-type(2) {
        transform: translateY(30%);
      }
    }
  }
`
const CardWrapper = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 2rem;

  ${mq[1]} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 5rem;
  }
`

const Card = styled.article`
  width: 100%;
  display: grid;
  grid-auto-rows: auto auto;
  grid-gap: 1rem;
`

const CardTitle = styled.div`
  p {
    opacity: ${({ opacity }) => opacity};
    transition: all 0.2s ease-in;
    margin-bottom: 0;
  }
`
const Image = styled.div`
  transition: all 0.2s ease-in;
  transform: scale(${({ scale }) => scale});
`
