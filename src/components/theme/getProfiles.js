import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allMembersYaml {
        edges {
          node {
            firstName
            lastName
            username
            avatar {
              childImageSharp {
                resize {
                  src
                }
              }
            }
            batch
          }
        }
      }
    }
  `)
  return data.allMembersYaml.edges
}
