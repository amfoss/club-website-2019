import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import defaultAvatar from "../../images/defaults/avatar.png"

const ListCard = ({ username, firstName, lastName, avatar, tagline, title, icon }) => (
   username ?
      (<Link to={"/@" + username} className="card">
        <div className="d-flex">
          <div className="p-0">
            <img
              src={avatar ? avatar : defaultAvatar}
              alt={firstName + " " + lastName + `'s photo`}
            />
          </div>
          <div className="item-details">
            <div>
              <h6> {firstName} {lastName} </h6>
              <div className="list-tagline">{tagline}</div>
            </div>
          </div>
        </div>
      </Link>) :
      (<div className="card px-4 pt-4 pb-2 h-100 text-center my-2">
          <div className="mt-2">
            <img
              src={icon ? icon : null}
              alt={title}
              style={{width: "15vmax", maxWidth: "100%", minWidth: "180px"}}
            />
          </div>
          <h5 className="mt-4">{title}</h5>
          <div className="list-tagline">{tagline}</div>
      </div>)
)

ListCard.propTypes = {
  username: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  avatar: PropTypes.string,
  tagline: PropTypes.string,
}

ListCard.defaultProps = {
  username: "",
  firstName: "",
  lastName: "",
  avatar: "",
  tagline: "",
}

export default ListCard
