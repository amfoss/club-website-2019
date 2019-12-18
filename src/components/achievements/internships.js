import React from "react"
import { StaticQuery, graphql } from "gatsby"
import AchievementList from "./achievementList"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allInternshipsYaml {
          totalCount
          edges {
            node {
              id
              Member
              Year
              Company
            }
          }
        }
      }
    `}
    render={data => (
      <div className="p-2">
        <AchievementList title="Internships"  members={data.allInternshipsYaml.edges} tagname="Company" />
      </div>
    )}
  />
)
