import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SectionCard from "../theme/section-card"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allStoryYaml {
        nodes {
          id
          Title
          Content
          Quote
          childFileYaml
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
  `)

  return data.allStoryYaml.nodes.map((node, i) => (
    <SectionCard
      key={node.id}
      index={i}
      section={node}
      title={node.Title}
      content={node.Content}
      image={node.childFileYaml ? node.childFileYaml.childImageSharp.fluid.src : null}
      quote={node.Quote}
    />
  ))
}
