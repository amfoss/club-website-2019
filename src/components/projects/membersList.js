import React from "react"
import getProfiles from "../theme/getProfiles"
import MemberCard from "../theme/member-card"

const MemberList = ({ projectmembers }) => {
  return (
    <div className="row m-0 p-1 mb-4">
      {projectmembers.members.map(member =>{
        const profiles = getProfiles()
        let profile = profiles.find(
          profile => profile.node.username === member
        )
        return profile ?
          <div
            key={member}
            className="col-md-4 col-lg-3 col-xl-2 col-6 p-2"
          >
            <MemberCard
              username={profile.node.username}
              firstName={profile.node.firstName}
              lastName={profile.node.lastName}
              tag={profile.node.role}
              avatar={
                profile.node.avatar
                  ? profile.node.avatar.childImageSharp.resize.src
                  : null
              }
            />
          </div>: null
      })}
    </div>
  )
}
export default MemberList