import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Flex, Box } from "@rebass/grid"

import MemberCard from "../components/members/member-card.js"

const Members = ({
  data: {
    allMembersYaml: { edges },
  },
}) => {
  const Members = edges.map(edge => (
    <Box key={edge.node.id} m={2} width={[1 / 3, 1 / 4, 1 / 5]}>
      <MemberCard member={edge.node} />
    </Box>
  ))

  return (
    <Layout>
      <SEO title="Members" />
      <h1>Members</h1>
      <Flex>{Members}</Flex>
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
