import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import avatar from "../images/defaults/avatar.png"
import TitleBar from "../components/theme/title-bar"

export default function Template({ data: { markdownRemark } }) {
  return (
    <Layout>
      <div>
        <SEO title={markdownRemark.frontmatter.title} />
        <TitleBar title={markdownRemark.frontmatter.title} />
        <div className="blog-author">
          <h6>@{markdownRemark.frontmatter.author}</h6>
        </div>
        <div className="row m-2 p-2">
          <div className="col-md-8">
            <img
              className="w-100"
              src={
                markdownRemark.frontmatter.cover
                  ? markdownRemark.frontmatter.cover.publicURL
                  : avatar
              }
              alt={markdownRemark.frontmatter.slug + `'s image`}
            />
            <div className="blog-text"  dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
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
      html
    }
  }
`
