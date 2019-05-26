import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GSoC from "../components/achievements/gsoc"
import TitleBar from "../components/theme/title-bar"

const Achievements = () => (
  <Layout>
    <SEO title="Achievements" />
    <TitleBar title="Achievements" />
    <div className="p-2">
      <GSoC />
    </div>
  </Layout>
)

export default Achievements
