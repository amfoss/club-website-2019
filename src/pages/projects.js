import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Box } from "@rebass/grid"
import { graphql } from "gatsby"

import ProjectCard from "../components/projects/project-card.js"


const Project = ({
  data:{
    allProjectsYaml: {edges},
  },
}) => {
  const Projects = edges.map(edge => (
    <Box key={edge.node.id} m={4} width={[1 / 3, 1 / 4, 1 / 5]}>
      <ProjectCard project={edge.node} />
    </Box>
  ))

  return (
    <Layout>
      <SEO title="Project" />
      <h1>Projects</h1>
      <div>{Projects}</div>
    </Layout>
  )
}
export default Project

export const pageQuery = graphql`
  query {
    allProjectsYaml{
      edges{
        node{
          id
          title
          contributers
          slug
          cover{
            childImageSharp{
              resize(width: 150){
                src
              }
            }
          }
        }
      }
    }
  }
`
