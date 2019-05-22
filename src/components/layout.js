import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "../styles/style.sass"

const Layout = ({ children }) => (
  <div>
    <Header />
    <div id="page-container">
      <main>{children}</main>
      <Footer />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
