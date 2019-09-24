import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import avatar from "../images/defaults/avatar.png"
import Layout from "../components/layout"
import SocialIcon from "../components/theme/social-icon"

export default ({ data: { cms } }) => {
  const member = cms.user
  return (
    <Layout>
      <SEO title={member.firstName + " " + member.lastName} />
      <section id="cover">
        <div className="container d-md-flex justify-content-center">
            <>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src={member.profile.gravatar}
                  alt={member.firstName + " " + member.lastName + `'s photo`}
                  id="profile-pic"
                  className="rounded-circle"
                />
              </div>
              <div className="ml-4">
                <div className="name text-left">
                  <div className={"d-inline-block text-left role-tag my-4 " + member.role}>{member.role}</div>
                  <h1>{member.firstName} {member.lastName}</h1>
                  <h5 className="tagline">{member.profile.tagline}</h5>
                </div>
                {/*{member.links ? (*/}
                {/*  <div className="social-links">*/}
                {/*    <SocialIcon name="github" link={member.links.github} />*/}
                {/*    <SocialIcon name="facebook" link={member.links.facebook} />*/}
                {/*    <SocialIcon name="twitter" link={member.links.twitter} />*/}
                {/*    <SocialIcon name="instagram" link={member.links.instagram} />*/}
                {/*    <SocialIcon name="linkedin" link={member.links.linkedin} />*/}
                {/*  </div>*/}
                {/*) : null}*/}
              </div>
            </>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($username: String!){
      cms{
          user(username:$username){
              firstName
              lastName
              username
              collegeProfile{
                  admissionYear
              }
              profile{
                  tagline
                  gravatar
              }
          }
      }
  }
`
