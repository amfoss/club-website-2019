import PropTypes from "prop-types"
import React from "react"
import ListCard from "../theme/list-card"

import getProfiles from "../theme/getProfiles"

const memberList = ({ members }) => {
  const profiles = getProfiles()

  return members.map(member => {
    let profile = profiles.find(
      profile => profile.node.username === member.node.Member
    )
    return (
      <ListCard
        key={member.node.id}
        username={profile.node.username}
        firstName={profile.node.firstName}
        lastName={profile.node.lastName}
        tagline={member.node.Org}
        avatar={profile.node.avatar.childImageSharp.resize.src}
      />
    )
  })
}

export default memberList
