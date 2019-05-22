import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql } from "gatsby"

import ProjectCard from "../components/projects/project-card.js"
import TitleBar from "../components/titleBar"

const Project = ({
  data: {
    allProjectsYaml: { edges },
  },
}) => {
  const Projects = edges.map(edge => (
    <div key={edge.node.id} className="col-md-4 m-4">
      <ProjectCard project={edge.node} />
    </div>
  ))

  return (
    <Layout>
      <SEO title="Project" />
      <TitleBar title="Projects" />
      <div className="row m-0">{Projects}</div>
    </Layout>
  )
}
export default Project

export const pageQuery = graphql`
  query {
    allProjectsYaml {
      edges {
        node {
          id
          title
          contributers
          slug
          cover {
            childImageSharp {
              resize(width: 150) {
                src
              }
            }
          }
        }
      }
    }
  }
`
