import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MemberCard from "../components/members/member-card.js"
import TitleBar from "../components/titleBar"


export default class Members extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
    }
  }

  handleSearch(event){
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    let filteredMembers = this.props.data.allMembersYaml.edges.filter(
      (edge) =>{
        return edge.node.username.indexOf(this.state.searchTerm.toLowerCase()) !== -1;
      }
    )
    return (
      <Layout>
        <SEO title="Members"/>
        <TitleBar title="Members"/>
        <div className='bg-white row m-0' id='filter-bar'>
          <div className='col-md-4 col-10 align-items-center justify-content-center' id='search-container'>
            <input id="search-box" type="text" className="form-control"
                   placeholder="Search Here"  onChange={this.handleSearch.bind(this)} />
          </div>
        </div>
        <div className="row m-0 p-4">
          {filteredMembers.map(edge => (
            <div key={edge.node.id} className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <MemberCard member={edge.node} />
            </div>
          ))}
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
