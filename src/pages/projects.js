import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql } from "gatsby"

import ProjectCard from "../components/projects/projectCard"
import TitleBar from "../components/theme/titleBar"

const Project = ({
  data: {
    allProjectsYaml: { edges },
  },
}) => {
  const [query, setQuery]  = useState('');
  const filter = edges.filter(edge => {
    if (edge.node.title.toLowerCase().startsWith(query.toLowerCase()))
      return 1
  })
  const Projects = filter.map(edge => (
    <div key={edge.node.id} className="col-xl-5 col-md-10 col-sm-6 pb-4">
      <ProjectCard project={edge.node} />
    </div>
  ))

  return (
    <Layout>
      <SEO title="Projects" />
      <TitleBar title="Projects" />
      <div className="row m-0 p-1">
        <div className="col-md-8 col-lg-9 p-2 order-2 order-md-1">
          <div className="row mx-2 my-4">{Projects}</div>
        </div>
        <div className="col-md-4 col-lg-3 order-md-2 order-1 px-2 py-4">
          <div className="card p-4 position-sticky" style={{ top: "1rem" }} id="filter-card">
            <h5 className="my-3">Search & Filter</h5>
            <div className="mx-2">
              <div>Search by Name</div>
              <input
                id="search-box"
                type="text"
                className="form w-100 p-2 mt-2"
                placeholder="Search Here"
                onChange={e => setQuery(e.target.value)}
              />
              <hr />
            </div>
          </div>
        </div>
      </div>
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
          members{
            user
            role
          }
          gallery {
            childImageSharp{
              resize(width: 500) {
                src
              }
            }
          }
          slug
          description
          cover {
            childImageSharp {
              resize(width: 500) {
                src
              }
            }
          }
        }
      }
    }
  }
`
