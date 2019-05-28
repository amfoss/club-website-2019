import React from "react"
import { StaticQuery, graphql } from "gatsby"
import AchievementList from "./achievement-list"

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
          <AchievementList title="Google Summer of Code" members={data.allGSoCYaml.edges} tagname="Org" />
      </div>
    )}
  />
)
