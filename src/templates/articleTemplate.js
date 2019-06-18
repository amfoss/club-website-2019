import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Disqus from 'gatsby-plugin-disqus'


import avatar from "../images/defaults/avatar.png"
import TitleBar from "../components/theme/title-bar"

export default function Template({ data: { markdownRemark } }) {
  return (
    <Layout>
        <SEO
            title={markdownRemark.frontmatter.title}
            description={markdownRemark.frontmatter.description}
            author={markdownRemark.frontmatter.author}
            keywords={markdownRemark.frontmatter.tags ? markdownRemark.frontmatter.tags.join(', ') : null}
            type="article"
        />
        <TitleBar title={markdownRemark.frontmatter.title} type="h3" />
        <div className="row mx-0 my-4">
          <div className="col-md-9 order-2 order-md-1">
            <div className="card p-4 content-text-size"  dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
          </div>
          <div className="col-md-3 order-1 mb-4 order-md-2">
              <div className="card">
                <img
                  className="w-100 cover"
                  src={
                    markdownRemark.frontmatter.cover
                      ? markdownRemark.frontmatter.cover.publicURL
                      : avatar
                  }
                  alt={markdownRemark.frontmatter.slug + `'s image`}
                />
                <div className="m-4">
                  <h6>@{markdownRemark.frontmatter.author}</h6>
                  <div>
                  {
                      markdownRemark.frontmatter.categories.map((cat,id) => (
                        <div key={id} className={"tag mt-4 "+cat}>{cat}</div>
                      ))
                  }
                  </div>
                  <div>
                    <h6>Tags</h6>
                    {
                      markdownRemark.frontmatter.tags.map((cat,id) => (
                        <li key={id}>{cat}</li>
                      ))
                    }
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="p-2">
          <Disqus
            identifier={markdownRemark.frontmatter.id}
            title={markdownRemark.frontmatter.title}
          />
        </div>
    </Layout>
  )
}

export const pageQuery = graphql`
   query($id: String!) {
    markdownRemark(id: {eq: $id}) {
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
