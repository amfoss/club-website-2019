import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 - Page not Found" />
    <div className="full-page-cover">
      <h1>404</h1>
      <h2>This page was removed, renamed, or doesn't exist.</h2>
    </div>
  </Layout>
)

export default NotFoundPage
