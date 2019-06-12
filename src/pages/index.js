import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeSections from "../components/home/homeSections"
import HomeLanding from "../components/home/homeLanding"
import WhyJoin from "../components/home/whyJoin"
import JoinCTA from "../components/home/joinCTA"


const IndexPage = () => (
  <Layout>
    <SEO title="India's Leading FOSS Club" />
    <HomeLanding />
    <HomeSections />
    <div className="row m-0">
      <div className="col-md-6">
        <WhyJoin />
      </div>
      <div className="col-md-6">
      </div>
      <JoinCTA />
    </div>
  </Layout>
)

export default IndexPage
