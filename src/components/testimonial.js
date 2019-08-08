import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//dependencies
import styled from "@emotion/styled"
import Img from "gatsby-image"

//assets
import { H2, Text } from "../assets"
import { primary, gray } from "../utils"

function Testimonial() {
  const data = useStaticQuery(graphql`
    query TestimonialQuery {
      allContentfulTestimonial {
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
  `)

  const content = data.allContentfulTestimonial.edges
  return (
    <Wrapper>
      {content.map(({ node }) => (
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
      {content.map(({ node }) => (
        <Dot key={node.name}></Dot>
      ))}
    </Wrapper>
  )
}

export default Testimonial

const Wrapper = styled.section`
  min-height: 50vh;
  display: grid;
  /* align-items: center; */
  justify-items: center;
  /* grid-template-rows: 1fr auto; */
  grid-gap: 2rem;
  padding: 0 2rem;
`

const Content = styled.div`
  max-width: 40em;
  margin: 0 auto;
  align-self: end;
  text-align: center;
`
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
`
const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    margin: 0;
  }
`

const Dot = styled.span`
  height: 0.6rem;
  width: 0.6rem;
  border-radius: 50%;
  background: ${primary};
  align-self: start;
`
