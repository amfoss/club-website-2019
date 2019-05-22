import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allGSoCYaml {
          totalCount
          edges {
            node {
              id
              Member
              Year
              Org
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <h1>Google Summer of Code</h1>
        {data.allGSoCYaml.edges.map(edge => (
          <div key={edge.node.id}>{edge.node.Member}</div>
        ))}
      </div>
    )}
  />
)
