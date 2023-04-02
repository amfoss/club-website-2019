import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import MemberCard from '../../components/theme/memberCard';
import TitleBar from '../../components/theme/titleBar';
import dataFetch from '../../utils/dataFetch';
import ReactLoading from 'react-loading';
import CookieConsent from '../../components/cookieConsent';
import memebers from '../../utils/members.json';

const query = ` query {
      activeUsers(sort: "username") {
          firstName
          lastName
          username
          profile {
              role
              displayInWebsite
              profilePic
              githubUsername
              tagline
              batch
          }
      }
  }`;

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterYear: 'everyone',
      filterRole: 'everyone',
      data: [],
      loaded: false,
    };
  }

  // fetchData = async () => await dataFetch({ query });

  goTop = () => {
    window.scrollTo(0, 0);
  };

  handleSearch(event) {
    this.goTop();
    this.setState({
      searchTerm: event.target.value,
    });
  }
  memberFilter(event) {
    this.goTop();
    this.setState({
      filterYear: event.target.value,
    });
  }

  memberRoleFilter(event) {
    this.goTop();
    this.setState({
      filterRole: event.target.value,
    });
  }

  componentDidMount() {
    this.setState({
      data: memebers,
      loaded: true,
    });
  }

  render() {
    let filteredMembers = this.state.data.filter((user) => {
      let qflag = 1;
      let yflag = 1;
      let rflag = 1;
      let query = this.state.searchTerm.toLowerCase();

      if (query !== '') qflag = 0;
      // Search matches username
      if (user.username.toLowerCase().startsWith(query)) qflag = 1;
      // Search matches firstname and lastname
      if (user.firstName) {
        user.firstName
          .toLowerCase()
          .split(' ')
          .forEach((part) => {
            if (part.startsWith(query)) qflag = 1;
          });
      }
      if (user.lastName) {
        user.lastName
          .toLowerCase()
          .split(' ')
          .forEach((part) => {
            if (part.startsWith(query)) qflag = 1;
          });
      }
      if (this.state.filterYear !== 'everyone') {
        yflag = 0;
        if (this.state.filterYear === user.profile.batch) yflag = 1;
      }
      if (this.state.filterRole !== 'everyone') {
        rflag = 0;
        if (this.state.filterRole === user.profile.role) rflag = 1;
      }
      if (qflag && yflag && rflag) return 1;
    });

    return (
      <Layout>
        <SEO title="Members" description="Meet the official amFOSS team members" />
        <TitleBar title="Members" id="members" />
        <a
          style={{
            position: 'fixed',
            right: '1rem',
            bottom: '1rem',
            backgroundColor: '#ffc107',
            borderRadius: '100vh',
            fontSize: '1.2rem',
            zIndex: 5000,
          }}
          onClick={() => {
            this.goTop();
          }}
          className="fas fa-angle-up p-3"
        />
        <div className="mx-4 mt-4">
          <p>
            Showing {filteredMembers.length} out of {this.state.data.length} members
          </p>
        </div>
        <div className="row m-0">
          <div className="col-md-8 col-lg-9 order-2 order-md-1">
            <div className="row m-0 mb-4">
              {this.state.loaded ? (
                filteredMembers
                  .sort((a, b) => a.firstName.localeCompare(b.firstName))
                  .map((user) =>
                    user.profile.batch && user.profile.displayInWebsite ? (
                      <div
                        key={user.username}
                        className="col-6 col-md-6 col-lg-4 col-xl-3 p-2"
                      >
                        <MemberCard
                          username={user.username}
                          firstName={user.firstName}
                          lastName={user.lastName}
                          tag={user.profile.role}
                          profilePic={user.profile.profilePic}
                          githubUsername={user.profile.githubUsername}
                        />
                      </div>
                    ) : null
                  )
              ) : (
                <ReactLoading type="spinningBubbles" color="#000" />
              )}
            </div>
          </div>
          <div className="col-md-4 col-lg-3 order-md-2 order-1 px-2 py-3">
            <div
              className="card p-4 position-sticky"
              style={{ top: '1rem' }}
              id="filter-card"
            >
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
                <select
                  className="bg-white p-2 w-100 mt-2"
                  onChange={this.memberFilter.bind(this)}
                  value={this.state.filterYear}
                >
                  <option value="everyone">
                    {this.state.filterYear === 'Everyone'
                      ? 'Change Year'
                      : ' Everyone'}
                  </option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                </select>
              </div>
              <div className="mb-4 mx-2">
                <div>Filter By Role</div>
                <select
                  className="bg-white p-2 w-100 mt-2"
                  onChange={this.memberRoleFilter.bind(this)}
                  value={this.state.filterRole}
                >
                  <option value="everyone">
                    {this.state.filterRole === 'Everyone'
                      ? 'Change Role'
                      : ' Everyone'}
                  </option>
                  <option value="Member">Member</option>
                  <option value="Mentor">Mentor</option>
                  <option value="Alumni">Alumni</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <CookieConsent />
      </Layout>
    );
  }
}
