import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
             publicURL
            }      
          }
        }
      }
    }
  `)

  return (
    <div className="my-4 mx-2">
      <h2 className="text-center my-4">Why Join Us?</h2>
        <div className="row m-0">
        { data.allWhyJoinYaml.edges.map((edge, i) => (
            <div className="col-md-6 col-xl-3 p-2"  key={edge.node.id}>
              <ListCard
                key={edge.node.id}
                title={edge.node.Reason}
                tagline={edge.node.Explanation}
                icon={edge.node.Icon.publicURL}
              />
            </div>
          ))
        }
        </div>
    </div>
  )
}