import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BlogCard from "../components/blogs/blog-card.js"

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Blogs = edges.map(edge => (
    <div key={edge.node.id} className="col-md-4 m-4">
      <BlogCard blog={edge.node.frontmatter} />
    </div>
  ))

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <div className="row m-0">{Blogs}</div>
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
            slug
            date(formatString: "DD MMMM, YYYY")
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
  }
`
