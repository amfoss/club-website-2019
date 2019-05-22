import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeSections from "../components/home/homeSections"
import HomeLanding from "../components/home/HomeLanding"
import Script from 'react-load-script'

const IndexPage = () => (
  <Layout>
    <SEO title="India's Leading FOSS Club" />
    <Script url="https://cdnjs.cloudflare.com/ajax/libs/typeit/6.0.2/typeit.min.js" />
    <HomeLanding />
    <HomeSections />
  </Layout>
)

export default IndexPage
