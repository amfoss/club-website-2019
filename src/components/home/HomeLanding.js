import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { ext: { eq: ".mp4" } }) {
        nodes {
          publicURL
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <video autoPlay loop muted id="home-video">
        <source src={data.allFile.nodes[0].publicURL} type="video/mp4" />
      </video>
    </React.Fragment>
  )
}
