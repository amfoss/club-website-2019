import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeSections from "../components/home/homeSections"
import HomeLanding from "../components/home/HomeLanding"

const IndexPage = () => (
  <Layout>
    <SEO title="India's Leading FOSS Club" />
    <HomeLanding />
    <HomeSections />
  </Layout>
)

export default IndexPage
