import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import avatar from "../images/defaults/avatar.png"
import crowdIcon from "../images/icons/crowd.png"
import portfolioIcon from "../images/icons/portfolio.png"
import bulbIcon from "../images/icons/bulb.png"

export default class ProjectTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      switchTab: null,
    }
  }

  handleDescriptionClick() {
    this.setState({
      switchTab: "descriptionTab",
    })
  }

  handleGalleryClick() {
    this.setState({
      switchTab: "galleryTab",
    })
  }

  handleMembersClick() {
    this.setState({
      switchTab: "membersTab",
    })
  }

  renderTab() {
    if (this.state.switchTab === "galleryTab") {
      return (
        <section className="my-4 container">
          <div className="gallery">
            <img
              src={
                this.props.data.projectsYaml.cover
                  ? this.props.data.projectsYaml.cover.childImageSharp.resize
                      .src
                  : avatar
              }
              alt={this.props.data.projectsYaml.slug + `'s image`}
            />
          </div>
        </section>
      )
    }
    if (this.state.switchTab === "membersTab") {
      return (
        <section className="my-4 container col-md-4">
          <div className="post-card">
            <h5>{this.props.data.projectsYaml.members}</h5>
          </div>
        </section>
      )
    } else {
      return (
        <section className="my-4 container">
          <div className="card p-4"  dangerouslySetInnerHTML={{ __html: this.props.data.projectsYaml.description}} />
        </section>
      )
    }
  }

  render() {
    return (
      <Layout>
        <SEO title={this.props.data.projectsYaml.title} />
        <div className="project">
          <section id="cover">
            <div className="container">
              <div className="row m-0 bg-white section-card">
                <div className="col-md-4">
                  <img
                    src={
                      this.props.data.projectsYaml.cover
                        ? this.props.data.projectsYaml.cover.childImageSharp
                            .resize.src
                        : avatar
                    }
                    alt={this.props.data.projectsYaml.slug + `'s image`}
                  />
                </div>
                <div className="col-md-8">
                  <h1>{this.props.data.projectsYaml.title}</h1>
                  <p>{this.props.data.projectsYaml.tagline}</p>
                </div>
              </div>
            </div>
          </section>
          <div id="section-switcher">
            <div
              id="description-tab-button"
              onClick={this.handleDescriptionClick.bind(this)}
            >
              <img src={bulbIcon} alt="description" />
              <span>Description</span>
            </div>
            <div
              id="gallery-tab-button"
              onClick={this.handleGalleryClick.bind(this)}
            >
              <img src={portfolioIcon} alt="gallery" />
              <span>Gallery</span>
            </div>
            <div
              id="members-tab-button"
              onClick={this.handleMembersClick.bind(this)}
            >
              <img src={crowdIcon} alt="members" />
              <span>Members</span>
            </div>
          </div>
          {this.renderTab()}
        </div>
      </Layout>
    )
  }
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
        childImageSharp {
          resize(width: 350) {
            src
          }
        }
      }
    }
  }
`
