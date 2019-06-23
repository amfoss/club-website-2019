import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MemberCard from "../components/theme/member-card.js"
import TitleBar from "../components/theme/title-bar"

export default class Members extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: "",
      filterRole: "active",
    }
  }

  goTop = () => {
    window.scrollTo(0, 0);
  }

  handleSearch(event) {
    this.goTop()
    this.setState({
      searchTerm: event.target.value,
    })
  }
  memberFilter(event){
    this.goTop()
    this.setState({
      filterRole: event.target.value,
    })
  }

  render() {
    let filteredMembers = this.props.data.allMembersYaml.edges.filter(edge => {
      let qflag = 1
      let query = this.state.searchTerm.toLowerCase()
      let rflag = 1
      let role = this.state.filterRole
      if (query !== "") {
        qflag = 0
        // Search matches username
        if (edge.node.username.toLowerCase().startsWith(query))
          qflag = 1
        // Search matches username
        if (edge.node.firstName) {
          edge.node.firstName
            .toLowerCase()
            .split(" ")
            .forEach(part => {
              if (part.startsWith(query)) qflag = 1
            })
        }
        if (edge.node.lastName) {
          edge.node.lastName
            .toLowerCase()
            .split(" ")
            .forEach(part => {
              if (part.startsWith(query)) qflag = 1
            })
        }
      }
      if(role !== "all")
      {
         rflag = 0
         if(role === "active")
         {
           if(["Member", "Mentor", "Alumni Mentor", "Faculty Mentor"].indexOf(edge.node.role) !== -1)
             rflag = 1
         }
         else if(edge.node.role === this.state.filterRole)
           rflag = 1
      }
      if(qflag&&rflag&&!edge.node.hide) return 1
    })
    return (
      <Layout>
        <SEO title="Members" />
        <TitleBar title="Members" id="members" />
        <a
          style={{position: 'fixed', right: '1rem', bottom: '1rem', backgroundColor: '#ffc107', borderRadius: '100vh', fontSize: "1.2rem", zIndex: 5000 }}
           onClick={() => { this.goTop()}}
           className="fas fa-angle-up p-3"
        />
        <div className="row m-0 p-1">
          <div className="col-md-8 col-lg-9 p-2 order-2 order-md-1">
            <div className="m-2">
            { this.state.filterRole === "all" ? "Showing Everyone" : (
                <>Showing {filteredMembers.length} {
                this.state.filterRole === "active" ? "Active Members" : null
              } of {this.props.data.allMembersYaml.edges.length} Members.
              </>
            )}
            </div>
            <div className="row m-0 p-1 mb-4">
              {filteredMembers.map(edge => (
                <div
                  key={edge.node.id}
                  className="col-6 col-md-6 col-lg-4 col-xl-3 p-2"
                >
                  <MemberCard
                    username={edge.node.username}
                    firstName={edge.node.firstName}
                    lastName={edge.node.lastName}
                    tag={edge.node.role}
                    avatar={
                      edge.node.avatar
                        ? edge.node.avatar.childImageSharp.resize.src
                        : null
                    }
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-4 col-lg-3 order-md-2 order-1 px-2 py-4">
            <div className="card p-4 position-sticky" style={{ top: "1rem" }} id="filter-card">
              <h5 className="my-3">Search & Filter</h5>
              <div className="mx-2">
                <div>Search by Name</div>
                <input
                  id="search-box"
                  type="text"
                  className="form w-100 p-2 mt-2"
                  placeholder="Search Here"
                  onChange={this.handleSearch.bind(this)}
                />
                <hr />
              </div>
              <div className="mb-4 mx-2">
                <div>Filter By Role</div>
                <select className="bg-white p-2 w-100 mt-2" onChange={this.memberFilter.bind(this)} value={this.state.filterRole}>
                  <option value="active">{this.state.filterRole === "active" ? 'Change Role' : ' Active' }</option>
                  <option value="all">Everyone</option>
                  <option value="Member">Members</option>
                  <option value="Mentor">Mentors</option>
                  <option value="Alumni">Alumni</option>
                  <option value="Alumni Mentor">Alumni Mentors</option>
                  <option value="Faculty Mentor">Faculty Mentors</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMembersYaml(sort: { fields: firstName, order: ASC }) {
      edges {
        node {
          id
          firstName
          lastName
          tagline
          username
          role
          hide
          avatar {
            childImageSharp {
              resize(width: 300) {
                src
              }
            }
          }
        }
      }
    }
  }
`
