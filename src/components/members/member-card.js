import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import avatar from "../../images/defaults/avatar.png"

const MemberCard = ({ member }) => (
  <Link to={"/@" + member.username} className="member-card">
    <img
      src={member.avatar ? member.avatar.childImageSharp.resize.src : avatar}
      alt={member.firstName + " " + member.lastname + `'s photo`}
    />
    <h3>
      {member.firstName} {member.lastName}
    </h3>
    <sub>{member.tagline}</sub>
  </Link>
)

MemberCard.propTypes = {
  member: PropTypes.any,
}

MemberCard.defaultProps = {
  member: null,
}

export default MemberCard
