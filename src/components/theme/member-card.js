import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const MemberCard = ({ username, firstName, lastName, avatar, tag, tagline, githubUsername }) => (
  <Link to={"/@" + username} className="member-card card">
    <img
      src={githubUsername ?  `https://avatars.githubusercontent.com/${githubUsername}`: avatar}
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
  tag: PropTypes.string,
  githubUsername: PropTypes.string
}

MemberCard.defaultProps = {
  username: "",
  firstName: "",
  lastName: "",
  avatar: "",
  tagline: "",
  tag: "Member",
  githubUsername: ""
}

export default MemberCard
