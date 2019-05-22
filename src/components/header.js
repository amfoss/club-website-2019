import PropTypes from "prop-types"
import React from "react"
import Menu from "./theme/menu"
import SocialMenu from "./theme/social-menu"

import logoIcon from "../images/logos/logo_alt_light.png"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showSidebar: false,
    }
  }

  showSidebar = () => {
    const current = this.state.showSidebar
    this.setState({ showSidebar: !current })
  }

  render() {
    return (
      <header>
        <div id="topbar">
          <i
            tabIndex="0"
            role="link"
            onClick={this.showSidebar}
            className="fas fa-bars"
          />
          <img src={logoIcon} alt="AmFOSS" />
        </div>
        <div id="sidebar" className={this.state.showSidebar ? "show" : "hide"}>
          <div>
            <div className="logo" />
            <Menu />
            <SocialMenu />
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
