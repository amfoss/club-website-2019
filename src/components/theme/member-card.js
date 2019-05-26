import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import defaultAvatar from "../../images/defaults/avatar.png"

const MemberCard = ({ username, firstName, lastName, avatar, tagline }) => (
  <Link to={"/@" + username} className="member-card card">
    <img
      src={avatar ? avatar : defaultAvatar}
      alt={firstName + " " + lastName + `'s photo`}
    />
    <div>
      <h5 className="mt-3">
        {firstName} {lastName}
      </h5>
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
}

MemberCard.defaultProps = {
  username: "",
  firstName: "",
  lastName: "",
  avatar: "",
  tagline: "",
}

export default MemberCard
