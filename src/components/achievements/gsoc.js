import React from "react"
import { StaticQuery, graphql } from "gatsby"
import MemberList from "../theme/member-list"

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
        <div className="p-2">
            <h3 className="ml-2 mb-0">Google Summer of Code</h3>
            <MemberList members={data.allGSoCYaml.edges} />
        </div>
    )}
  />
)
