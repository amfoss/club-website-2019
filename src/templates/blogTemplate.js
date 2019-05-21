import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Card} from 'react-bootstrap'

import avatar from "../images/defaults/avatar.png"

export default function Template({ data: { markdownRemark } }) {
  return (
    <Layout>
      <div>
        <SEO title={markdownRemark.frontmatter.slug} />
        <Card className="blog-title"><h1>{markdownRemark.frontmatter.title}</h1></Card>
        <Card className="blog-author"><h3>@{markdownRemark.frontmatter.author}</h3></Card>
        <Card className="blog-description">
          <Card.Img
            className="blog-image"
            src={markdownRemark.frontmatter.cover ? markdownRemark.frontmatter.cover.publicURL  : avatar}
            alt={markdownRemark.frontmatter.slug + `'s image`}
          />
          <Card.Text className="blog-text">{markdownRemark.frontmatter.description}</Card.Text>
        </Card>
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
        date
        categories
        tags
        description
        cover{
          publicURL
        }
      }
    }
  }
`