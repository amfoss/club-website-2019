import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import crowdIcon from '../images/icons/crowd.png';
import bulbIcon from '../images/icons/bulb.png';
import MemberList from '../components/projects/membersList';
import SocialIcon from '../components/theme/socialIcon';

export default class ProjectTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchTab: null,
    };
  }

  handleDescriptionClick() {
    this.setState({
      switchTab: 'descriptionTab',
    });
  }

  handleMembersClick() {
    this.setState({
      switchTab: 'membersTab',
    });
  }

  renderTab() {
    if (this.state.switchTab === 'membersTab') {
      return (
        <section className="my-4">
          <MemberList members={this.props.data.cms.project.members} />
        </section>
      );
    } else {
      return (
        <section className="my-4 container">
          <div
            className="card p-4"
            dangerouslySetInnerHTML={{
              __html: this.props.data.cms.project.detail,
            }}
          />
        </section>
      );
    }
  }

  render() {
    return (
      <Layout>
        <SEO
          title={this.props.data.cms.project.name}
          description={this.props.data.cms.project.tagline}
          slug={this.props.data.cms.project.slug}
        />
        <div className="project">
          <section id="cover">
            <div className="container">
              <div className="row m-0 bg-white section-card">
                <div className="col-md-4">
                  <img
                    src={`https://api.amfoss.in/${this.props.data.cms.project.cover}`}
                    alt={this.props.data.cms.project.slug + `'s image`}
                  />
                </div>
                <div className="col-md-8">
                  <h1>{this.props.data.cms.project.name}</h1>
                  <p>{this.props.data.cms.project.tagline}</p>
                  {this.props.data.cms.project.links ? (
                    <div className="social-links">
                      {this.props.data.cms.project.links.map((link) => (
                        <SocialIcon name={link.portal.name} link={link.link} />
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </section>
          <div id="section-switcher">
            <div
              id="description-tab-button"
              onClick={this.handleDescriptionClick.bind(this)}
              style={{ cursor: 'pointer' }}
            >
              <img src={bulbIcon} alt="description" />
              <span>Description</span>
            </div>
            <div
              id="members-tab-button"
              onClick={this.handleMembersClick.bind(this)}
              style={{ cursor: 'pointer' }}
            >
              <img src={crowdIcon} alt="members" />
              <span>Members</span>
            </div>
          </div>
          {this.renderTab()}
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query($slug: String!) {
    cms {
      project(slug: $slug) {
        name
        slug
        featured
        tagline
        cover
        detail
        links {
          link
          portal {
            name
          }
        }
        members {
          username
          firstName
          lastName
          profile {
            profilePic
            gravatar
            githubUsername
          }
        }
      }
    }
  }
`;
