import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const MenuItem = ({ name, link, icon }) => (
  <Link to={link} className="menu-item">
    {icon !== "" ? <img src={icon} alt={name} /> : null}
    {name}
  </Link>
)

MenuItem.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.string,
}

MenuItem.defaultProps = {
  name: ``,
  link: `#`,
  icon: ``,
}

export default MenuItem
