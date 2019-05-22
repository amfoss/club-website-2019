import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data: { projectsYaml } }) {
  return (
    <Layout>
      <SEO title={projectsYaml.title} />
      <div className="project">
        <h1>{projectsYaml.title}</h1>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    projectsYaml {
      title
      contributers
    }
  }
`
