import React, { useState }  from "react"
import { StaticQuery, graphql } from "gatsby"
import AchievementList from "./achievement-list"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allTalksYaml {
          totalCount
          edges {
            node {
              id
              Member
              Event
              Year
            }
          }
        }
      }
    `}
    render={data => (
      <div className="p-2 my-4">
          <AchievementList title="Speaker (Talks)" members={data.allTalksYaml.edges} tagname="Event" />
      </div>
    )}
  />
)
