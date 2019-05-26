import PropTypes from "prop-types"
import React from "react"
import MemberCard from "../theme/member-card"

import defaultAvatar from "../../images/defaults/avatar.png"
import getProfiles from "./getProfiles"


const memberList = ({ members }) => {
  const profiles = getProfiles();

  return (
    <div className="row m-0 p-1 mb-4 hello">
      { members.map(member => {
        console.log(member.node.Member)
        let profile = profiles.find( profile => profile.node.username === member.node.Member);
        console.log(profile)
        return (
          <div key={member.node.id} className="col-sm-6 col-md-4 col-lg-3 col-xl-2 p-2">
            <MemberCard
              key={member.node.id}
              username={profile.node.username}
              firstName={profile.node.firstName}
              lastName={profile.node.lastName}
              tagline={member.node.Org}
              avatar={profile.node.avatar.childImageSharp.resize.src}
            />
          </div>)
        })
    }
  </div>)
}

export default memberList