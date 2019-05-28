import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import defaultAvatar from "../../images/defaults/avatar.png"

const MemberCard = ({ username, firstName, lastName, avatar, tag, tagline }) => (
  <Link to={"/@" + username} className="member-card card">
    <img
      src={avatar ? avatar : defaultAvatar}
      alt={firstName + " " + lastName + `'s photo`}
    />
    <div className={"role-tag " + tag}>{tag}</div>
    <div>
      <h6>{firstName} {lastName}</h6>
      <sub>{tagline}</sub>
    </div>
  </Link>
)

MemberCard.propTypes = {
  username: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  avatar: PropTypes.string,
  tagline: PropTypes.string,
  tag: PropTypes.string
}

MemberCard.defaultProps = {
  username: "",
  firstName: "",
  lastName: "",
  avatar: "",
  tagline: "",
  tag: "Member"
}

export default MemberCard
