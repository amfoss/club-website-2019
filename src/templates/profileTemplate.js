import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

export default function Template({ data: { membersYaml } }) {
  return (
    <div>
      <SEO title={membersYaml.firstName + " " + membersYaml.lastName} />
      <section id="cover">
        <div className='name text-center'>
          <img src={membersYaml.avatar.childImageSharp.fluid.src} id="avatar"
               className="rounded-circle" />
            <h1>{membersYaml.firstName} {membersYaml.lastName}</h1>

            <h3 className='tagline'>{membersYaml.tagline}</h3>
        </div>
      </section>
    </div>
  )
}

export const pageQuery = graphql`
  query($username: String!) {
    membersYaml(username: { eq: $username }) {
      firstName
      lastName
      username
      tagline
      avatar{
        childImageSharp{
          fluid{
            src
          }
        }
      }
    }
  }
`
