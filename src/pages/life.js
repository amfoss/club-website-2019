import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleBar from "../components/theme/title-bar"
import ClubLife from "../components/clubLife/clublife"

const Life = () => (
  <Layout>
    <SEO title="Life in the Club" />
    <TitleBar title="Life in the Club" />
    <ClubLife />
  </Layout>
)

export default Life
