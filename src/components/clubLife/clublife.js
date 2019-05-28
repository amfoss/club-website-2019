import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SectionCard from "../theme/section-card"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allClubLifeYaml {
        nodes {
          id
          Title
          Content
          Slider
          {
            Image
            {
              childImageSharp
              {
                fluid
                {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allClubLifeYaml.nodes.map((node, i) => (
    <SectionCard
      key={node.id}
      index={i}
      section={node}
      title={node.Title}
      content={node.Content}
      slider={node.Slider}
    />
  ))
}
