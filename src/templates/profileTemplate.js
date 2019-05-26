import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import avatar from "../images/defaults/avatar.png"
import Layout from "../components/layout"
import SocialIcon from "../components/theme/social-icon"

export default function Template({ data: { membersYaml } }) {
  return (
    <Layout>
      <SEO title={membersYaml.firstName + " " + membersYaml.lastName} />
      <section id="cover">
        <div className='text-center'>
          <div className="name">
          <img
            src={membersYaml.avatar ? membersYaml.avatar.childImageSharp.fluid.src : avatar}
            alt={membersYaml.firstName + " " + membersYaml.lastName + `'s photo`}
            className="rounded-circle"
          />
            <h1>{membersYaml.firstName} {membersYaml.lastName}</h1>

            <h5 className='tagline'>{membersYaml.tagline}</h5>
          </div>
          {membersYaml.links ? <div className="social-links">
            <SocialIcon name="github" link={membersYaml.links.github} />
            <SocialIcon name="facebook" link={membersYaml.links.facebook} />
            <SocialIcon name="twitter" link={membersYaml.links.twitter} />
            <SocialIcon name="instagram" link={membersYaml.links.instagram} />
            <SocialIcon name="linkedin" link={membersYaml.links.linkedin} />
          </div> : null}
        </div>
      </section>
      <div className="tabs"></div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($username: String!) {
    membersYaml(username: { eq: $username }) {
      firstName
      lastName
      username
      tagline
      links{
        github
        twitter
        facebook
        codeforces
        codechef
      }
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
