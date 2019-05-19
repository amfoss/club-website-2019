import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data: { membersYaml } }) {
  return (
    <Layout>
      <SEO title={membersYaml.firstName + " " + membersYaml.lastName} />
      <div className="blog-post-container">
        <h1>
          {membersYaml.firstName} {membersYaml.lastName}
        </h1>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($username: String!) {
    membersYaml(username: { eq: $username }) {
      firstName
      lastName
      username
    }
  }
`
