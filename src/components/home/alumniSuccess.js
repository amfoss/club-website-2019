import React from 'react'
import { graphql, useStaticQuery } from "gatsby"



export default () => {
  const data = useStaticQuery(graphql`
      query {
       allFile(filter: { relativeDirectory: { in: "logos/alumni-company" }})
        {
          edges {
              node
              {
                  publicURL
              }
          }
        }
        allAlumniSummaryYaml
        {
          nodes
          {
            alumniLocation
          }
        }
      }
  `)
  return (
    <div className="text-center" style={{ marginBottom: "10vh" }}>
      <h3 className="mb-4"> Our Alumni Work at</h3>
      <div style={{ padding: "0 5vw"}} >
          {
              data.allFile.edges.map( edge => (
              <img src={edge.node.publicURL} style={{ height: "6vmax", maxHeight: "4rem" }} className="p-3" />
              ))
          }
      </div>
    </div>
  )
}