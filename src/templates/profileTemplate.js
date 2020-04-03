import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Avatar from "../images/defaults/avatar.png"

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
                src={
                  member.profile.profilePic
                    ? `https://api.amfoss.in/${member.profile.profilePic}`
                    : member.profile.githubUsername
                    ? `https://avatars.githubusercontent.com/${member.profile.githubUsername}`
                    : Avatar
                }
                alt={member.firstName + " " + member.lastName + `'s photo`}
                id="profile-pic"
                className="rounded-circle"
              />
            </div>
            <div className="ml-4">
              <div className="name text-left">
                <div
                  className={
                    "d-inline-block text-left role-tag my-4 " + member.role
                  }
                >
                  {member.role}
                </div>
                <h1>
                  {member.firstName} {member.lastName}
                </h1>
                <h5 className="tagline">{member.profile.tagline}</h5>
              </div>
            </div>
          </>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($username: String!) {
    cms {
      user(username: $username) {
        firstName
        lastName
        username
        profile {
          profilePic
          githubUsername
          tagline
        }
      }
    }
  }
`
