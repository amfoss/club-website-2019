import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleBar from "../components/theme/title-bar"
import StorySections from "../components/about/storySections"

const About = () => (
  <Layout>
    <SEO title="About the Club" />
    <TitleBar title="About the Club" />
    <h2 className="mt-4 ml-4">Our Story</h2>
    <StorySections />
  </Layout>
)

export default About
