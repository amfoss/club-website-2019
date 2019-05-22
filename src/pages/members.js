import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MemberCard from "../components/members/member-card.js"

const Members = ({
  data: {
    allMembersYaml: { edges },
  },
}) => {
  const Members = edges.map(edge => (
    <div key={edge.node.id} className="col-md-4 m-4">
      <MemberCard member={edge.node} />
    </div>
  ))

  return (
    <Layout>
      <SEO title="Members" />
      <h1>Members</h1>
      <div className="row m-0">{Members}</div>
    </Layout>
  )
}

export default Members

export const pageQuery = graphql`
  query {
    allMembersYaml(sort: { fields: firstName, order: ASC }) {
      edges {
        node {
          id
          firstName
          lastName
          tagline
          username
          avatar {
            childImageSharp {
              resize(width: 150) {
                src
              }
            }
          }
        }
      }
    }
  }
`
