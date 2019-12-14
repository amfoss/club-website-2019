import React, {useState} from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleBar from "../components/theme/titleBar"
import NewsCard from "../components/news/newsCard"

const News = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const [query, setQuery] = useState('');
  const filter =  edges.filter(edge => {
    if(edge.node.frontmatter.title.toLowerCase().startsWith(query.toLowerCase()))
      return 1
  })
  const Articles = filter.map(edge => (
    <div key={edge.node.id} className="p-2">
      <NewsCard article={edge.node.frontmatter} />
    </div>
  ))

  return (
    <Layout>
      <SEO title="News" />
      <TitleBar title="News" />
      <div className="row m-0 p-1">
        <div className="col-md-8 col-lg-9 p-2 order-2 order-md-1">
          <div className="row mx-2 my-4">{Articles}</div>
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
