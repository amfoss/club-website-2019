import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import avatar from "../images/defaults/avatar.png"

export default function Template({ data: { markdownRemark } }) {
  return (
    <Layout>
      <div>
        <SEO title={markdownRemark.frontmatter.title} />
        <div className="blog-title">
          <h1>{markdownRemark.frontmatter.title}</h1>
        </div>
        <div className="blog-author">
          <h3>@{markdownRemark.frontmatter.author}</h3>
        </div>
        <div className="blog-description">
          <img
            className="blog-image"
            src={
              markdownRemark.frontmatter.cover
                ? markdownRemark.frontmatter.cover.publicURL
                : avatar
            }
            alt={markdownRemark.frontmatter.slug + `'s image`}
          />
          <div className="blog-text">
            {markdownRemark.frontmatter.description}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark {
      frontmatter {
        author
        slug
        title
        date
        categories
        tags
        description
        cover {
          publicURL
        }
      }
    }
  }
`
