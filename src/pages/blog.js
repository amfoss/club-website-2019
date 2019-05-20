import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BlogCard from "../components/blogs/blog-card.js"
import { Box } from "@rebass/grid"

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Blogs = edges.map(edge => (
    <Box key={edge.node.id} m={4} width={[1 / 3, 1 / 4, 1 / 5]}>
      <BlogCard blog={edge.node.frontmatter} />
    </Box>
  ))

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <div>{Blogs}</div>
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
            coverpic
          }
        }
      }
    }
  }
`
