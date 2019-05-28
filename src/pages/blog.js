import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleBar from "../components/theme/title-bar"
import PostCard from "../components/blogs/post-card.js"

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.map(edge => (
    <div key={edge.node.id} className="col-lg-6 m-4 p-0">
      <PostCard blog={edge.node.frontmatter} />
    </div>
  ))

  return (
    <Layout>
      <SEO title="Blog" />
      <TitleBar title="Blog" />
      <div className="row m-0">{Posts}</div>
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
            categories
            date(formatString: "DD MMMM, YYYY")
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
  }
`
