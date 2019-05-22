import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import avatar from "../images/defaults/avatar.png"
import crowdIcon from "../images/icons/crowd.png"
import portfolioIcon from "../images/icons/portfolio.png"
import bulbIcon from "../images/icons/bulb.png"


export default function Template({ data: { projectsYaml } }) {
  return (
    <Layout>
      <SEO title={projectsYaml.title} />
      <div className="project">
        <section id="cover">
          <div className='container'>
            <div className='row m-0 bg-white section-card'>
              <div className='col-md-4'>
                <img
                  src={projectsYaml.cover ? projectsYaml.cover.childImageSharp.resize.src : avatar}
                  alt={projectsYaml.slug + `'s image`}
                />
              </div>
              <div className='col-md-8'>
                <h1>{projectsYaml.title}</h1>
                <p>{projectsYaml.tagline}</p>
              </div>
            </div>
          </div>
        </section>
        <div id='section-switcher'>
          <a id='description-tab-button'>
            <img src={bulbIcon} alt="description" />
              <span>Description</span>
          </a>
          <a id='gallery-tab-button'>
            <img src={portfolioIcon} alt="gallery" />
              <span>Gallery</span>
          </a>
          <a id='members-tab-button'>
            <img src={crowdIcon} alt="members" />
              <span>Members</span>
          </a>
        </div>
        <section className="tab" id="description-tab">
          <section className="my-4 container">
            <div className="post-card">
              <p>{projectsYaml.description}</p>
            </div>
          </section>
        </section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    projectsYaml {
      title
      members
      slug
      tagline
      description
      cover {
        childImageSharp{
          resize(width:150){
            src
          }
        }
      }
    }
  }
`
