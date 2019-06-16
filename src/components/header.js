import PropTypes from "prop-types"
import React from "react"
import Menu from "./theme/menu"
import SocialMenu from "./theme/social-menu"
import { StaticQuery, Link } from "gatsby"
import classnames from "classnames"

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
          <Link to="/">
            <StaticQuery
              query={graphql`
                query {
                 allFile(filter: { name: { eq: "logo_alt_light"}, extension: { eq: "png"}})
                  {
                    nodes
                    {
                      childImageSharp
                      {
                        fluid
                        {
                          src
                        }
                      }
                    }
                  }
                }
              `}
              render={data => (
                <img src={data.allFile.nodes[0].childImageSharp.fluid.src} alt="AmFOSS" />
              )}
            />
          </Link>
          <i
            tabIndex="0"
            role="link"
            onClick={this.showSidebar}
            className={classnames(
              `fas`,
              this.state.showSidebar ? `fa-times` : `fa-bars`
            )}
          />
        </div>
        <div id="sidebar" className={this.state.showSidebar ? "show" : "hide"}>
          <div>
            <Link to="/">
              <div className="logo" />
            </Link>
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
