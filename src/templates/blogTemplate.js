import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data: { markdownRemark } }) {
  return (
    <Layout>
      <SEO title={markdownRemark.frontmatter.slug} />
      <div className="blog">
        <h1>
          {markdownRemark.frontmatter.title}
        </h1>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query{
    markdownRemark{
      frontmatter{
        author
        slug
        title
      }
    }
  }
`