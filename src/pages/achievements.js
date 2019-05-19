import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GSoC from "../components/achievements/gsoc"

const Achievements = () => (
  <Layout>
    <SEO title="Achievements" />
    <h1>Achievements</h1>
    <GSoC />
  </Layout>
)

export default Achievements
