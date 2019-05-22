import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeSections from "../components/home/homeSections"

const IndexPage = () => (
  <Layout>
    <SEO title="India's Leading FOSS Club" />
    <HomeSections />
  </Layout>
)

export default IndexPage
