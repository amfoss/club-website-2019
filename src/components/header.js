import PropTypes from "prop-types"
import React from "react"
import Menu from "./theme/menu"
import SocialMenu from "./theme/social-menu"

const Header = () => (
  <header id="sidebar">
    <div>
      <div className="logo" />
      <Menu />
      <SocialMenu />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
