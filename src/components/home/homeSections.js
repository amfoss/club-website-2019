import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import HomeSection from "./homeSection"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allHomeSectionsYaml
      {
        edges {
           node{
            id
            Title
            Content
            childrenHomeSectionsPointsYaml
            {
              id
              Text
              Icon
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
    }
  `)

  return (
    data.allHomeSectionsYaml.edges.map((edge,i) =>  <HomeSection key={edge.node.id} index={i} section={edge.node} /> )
  )
}
