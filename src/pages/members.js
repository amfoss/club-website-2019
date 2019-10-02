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
      filterYear: "everyone",
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
      filterYear: event.target.value,
    })
  }

  render() {
    let filteredMembers = this.props.data.cms.users.filter(user => {
      let qflag = 1
      let rflag = 1
      let query = this.state.searchTerm.toLowerCase()

      if(query !== "") qflag = 0
      // Search matches username
      if(user.username.toLowerCase().startsWith(query)) qflag = 1
      // Search matches firstname and lastname
      if (user.firstName) {
        user.firstName
          .toLowerCase()
          .split(" ")
          .forEach(part => {
            if (part.startsWith(query)) qflag = 1
          })
      }
      if (user.lastName) {
        user.lastName
          .toLowerCase()
          .split(" ")
          .forEach(part => {
            if (part.startsWith(query)) qflag = 1
          })
      }
      if(this.state.filterYear !== "everyone"){
        rflag = 0
        if(this.state.filterYear === user.collegeProfile.admissionYear.toString()) rflag = 1
      }
      if(qflag && rflag) return 1
    })
    console.log(filteredMembers);
    console.log(this.state.filterYear)
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
            <div className="row m-0 p-1 mb-4">
              {filteredMembers.map(user => (
                user.collegeProfile.admissionYear < 2019 ?
                     (
                      <div
                        key={user.username}
                        className="col-6 col-md-6 col-lg-4 col-xl-3 p-2"
                      >
                        <MemberCard
                          username={user.username}
                          firstName={user.firstName}
                          lastName={user.lastName}
                          tag="Member"
                          avatar={user.profile.gravatar}
                          githubUsername={user.profile.githubUsername}
                        />
                      </div>
                    ):null
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
                <div>Filter By Year</div>
                <select className="bg-white p-2 w-100 mt-2" onChange={this.memberFilter.bind(this)} value={this.state.filterYear}>
                  <option value="everyone">{this.state.filterYear === "Everyone" ? 'Change Year' : ' Everyone' }</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
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
      cms {
          users(sort: "username")
          {
              firstName
              lastName
              username
              profile
              {
                  githubUsername
                  gravatar
                  tagline
              }
              collegeProfile{
                  admissionYear
                  branch
              }
          }
      }
  }
`
