import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

//assets
import { P, H4, TextPar, Span, PrimaryButtonNav } from "../assets"
import { primary, mq, black, gray } from "../utils"

function About() {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      contentfulAbout(slug: { eq: "about" }) {
        desc {
          desc
        }
        email
        heading
        resume
        slug
        title
      }
      allContentfulExperience(sort: { order: ASC, fields: createdAt }) {
        edges {
          node {
            duration
            role
            id
            name
          }
        }
      }
    }
  `)

  const experienceData = data.allContentfulExperience.edges
  const aboutData = data.contentfulAbout
  console.log(experienceData)
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
            My name is <Span color={primary}>{aboutData.title}. </Span>
          </h1>
          <h1>{aboutData.heading}</h1>
        </Heading>
        <Content>
          <ContentText>
            <TextPar color={black}>{aboutData.desc.desc}</TextPar>
            <br></br>
            <TextPar color={black}>
              If you have a project in mind and you are in need of my
              <PrimaryButtonNav
                href={aboutData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn--hover"
              >
                skills
              </PrimaryButtonNav>
              ,
              <PrimaryButtonNav
                href={`mailto:${aboutData.email}`}
                target="_self"
                rel="noopener noreferrer"
                className="btn"
              >
                let's talk
              </PrimaryButtonNav>
            </TextPar>
          </ContentText>
          <Experience>
            <H4>Experience</H4>
            {data.allContentfulExperience.edges.map(({ node }) => (
              <div key={node.id}>
                <P color={black}>{`${node.duration} | ${node.role}`}</P>
                <P color={gray}>{`${node.name}`}</P>
              </div>
            ))}
          </Experience>
        </Content>
      </Wrapper>
    </Layout>
  )
}

export default About

const Wrapper = styled.section`
  max-width: 70em;
  min-height: 90vh;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: 3em;
  grid-template-rows: 1fr auto;
  padding: 2rem;

  ${mq[2]} {
    grid-gap: 6rem;
  }
`

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
`

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
`

const ContentText = styled.div`
  .btn {
    margin-left: 0.2em;

    &--hover {
      &:hover {
        color: ${primary};
      }
    }
  }
`
const Experience = styled.div``
