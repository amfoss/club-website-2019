import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleBar from "../components/theme/title-bar"

import GSoC from "../components/achievements/gsoc"
import Internship from "../components/achievements/internships"
import Talks from "../components/achievements/talks"
import SummerSchool from "../components/achievements/summerSchool"

const Achievements = () => (
  <Layout>
    <SEO title="Achievements" />
    <TitleBar title="Achievements" />
    <div className="row m-0">
      <div className="col-md-6 col-lg-4 p-2">
        <GSoC />
      </div>
      <div className="col-md-6 col-lg-4 p-2">
        <Internship />
      </div>
      <div className="col-md-6 col-lg-4 p-2">
        <SummerSchool />
        <Talks />
      </div>
    </div>
  </Layout>
)

export default Achievements
