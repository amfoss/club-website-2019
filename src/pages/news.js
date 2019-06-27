import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleBar from "../components/theme/title-bar"
import NewsCard from "../components/news/news-card.js"

const News = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Articles = edges.map(edge => (
    <div key={edge.node.id} className="p-2">
      <NewsCard article={edge.node.frontmatter} />
    </div>
  ))

  return (
    <Layout>
      <SEO title="News" />
      <TitleBar title="News" />
      <div className="row m-0">
        <div className="col-md-8 col-lg-9 p-2">
          {Articles}
        </div>
      </div>
    </Layout>
  )
}

export default News

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
