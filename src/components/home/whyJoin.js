import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SectionCard from "../theme/section-card"
import ListCard from "../theme/list-card"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allWhyJoinYaml {
        edges {
          node {
            id
            Reason
            Explanation
            Icon {
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
    <div className="card my-4">
      <h5 className="bg-brand p-4">Why Join amFOSS?</h5>
        { data.allWhyJoinYaml.edges.map((edge, i) => (
            <ListCard
              key={edge.node.id}
              title={edge.node.Reason}
              tagline={edge.node.Explanation}
              icon={edge.node.Icon.childImageSharp.fluid.src}
            />
          ))
        }
    </div>
  )
}