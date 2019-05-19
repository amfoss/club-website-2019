import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .map(edge => <div key={edge.node.id}>{edge.node.frontmatter.title}</div>)

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <div>{Posts}</div>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            author
            tags
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`
