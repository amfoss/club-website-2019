import React from "react"
import { StaticQuery, graphql } from "gatsby"
import MemberList from "./member-list"

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
      <div className="p-2 my-4">
        <h5 className="ml-2 mb-4">Google Summer of Code 2019</h5>
        <MemberList members={data.allGSoCYaml.edges} />
      </div>
    )}
  />
)
