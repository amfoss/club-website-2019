import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SectionCard from "../theme/section-card"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allHomeSectionsYaml {
        edges {
          node {
            id
            Title
            Content
            childrenHomeSectionsPointsYaml {
              id
              Text
              Icon {
                 publicURL
              }
            }
            childrenHomeSectionsStatsYaml
            {
              Text
              Num
            }
            childFileYaml {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allHomeSectionsYaml.edges.map((edge, i) => (
    <SectionCard
      key={edge.node.id}
      index={i}
      section={edge.node}
      title={edge.node.Title}
      content={edge.node.Content}
      image={edge.node.childFileYaml.childImageSharp.fluid.src}
      points={edge.node.childrenHomeSectionsPointsYaml}
      stats={edge.node.childrenHomeSectionsStatsYaml}
    />
  ))
}
