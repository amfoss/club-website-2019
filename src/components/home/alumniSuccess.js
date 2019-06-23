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
    <div className="text-center bg-white" style={{ padding: "4vh 0" }}>
      <h3 className="mb-4"> Our Alumni Work at</h3>
      <div style={{ padding: "0 5vw"}} >
          {
              data.allFile.edges.map( edge => (
              <img src={edge.node.publicURL} style={{ height: "2vmax", maxHeight: "40px", minHeight: "28px", margin: "1vmax" }}  />
              ))
          }
      </div>
    </div>
  )
}