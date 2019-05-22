import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MemberCard from "../components/members/member-card.js"
import TitleBar from "../components/titleBar"

const Members = ({
  data: {
    allMembersYaml: { edges },
  },
}) => {
  const Members = edges.map(edge => (
    <div key={edge.node.id} className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
      <MemberCard member={edge.node} />
    </div>
  ))

  return (
    <Layout>
      <SEO title="Members" />
      <TitleBar title="Members" />
      <div className="row m-0 p-4">{Members}</div>
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
              resize(width: 300) {
                src
              }
            }
          }
        }
      }
    }
  }
`
