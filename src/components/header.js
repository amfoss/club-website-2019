import PropTypes from "prop-types"
import React from "react"
import Menu from "./theme/menu"
import SocialMenu from "./theme/social-menu"
import { Link } from "gatsby"

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
          <Link to="/"><img src={logoIcon} alt="AmFOSS" /></Link>
        </div>
        <div id="sidebar" className={this.state.showSidebar ? "show" : "hide"}>
          <div>
            <Link to="/"><div className="logo" /></Link>
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
