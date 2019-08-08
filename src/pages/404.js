import React from "react"
import styled from "@emotion/styled"

//components
import Layout from "../components/layout"
import SEO from "../components/seo"

//assets
import { white } from "../utils"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper>
      <h1>
        Ooops! You just hit a route that doesn&#39;t exist...{" "}
        <span role="img" aria-label="Face">
          🙄
        </span>
        .
      </h1>
    </Wrapper>
  </Layout>
)

export default NotFoundPage

const Wrapper = styled.section`
  max-width: 90%;
  min-height: 90vh;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  align-items: center;
  h1 {
    color: ${white};
  }
`
