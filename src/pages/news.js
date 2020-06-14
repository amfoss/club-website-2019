import React, { useState } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TitleBar from '../components/theme/titleBar';
import NewsCard from '../components/news/newsCard';
import { node } from 'prop-types';

const News = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const filter = edges.filter((edge) => {
    let queryFlag = 1;
    let filterFlag = 1;

    if (query !== '') {
      queryFlag = 0;
      if (
        edge.node.frontmatter.title.toLowerCase().indexOf(query.toLowerCase()) !==
          -1 ||
        edge.node.html.toLowerCase().indexOf(query.toLowerCase()) !== -1
      )
        queryFlag = 1;
    }
    if (filterType !== 'all') {
      filterFlag = 0;
      if (edge.node.frontmatter.categories.includes(filterType)) filterFlag = 1;
    }
    if (queryFlag && filterFlag) return 1;
  });

  const Articles = [];
  const Pinned = [];
  filter.map((edge) => {
    edge.node.frontmatter.pinned
      ? Pinned.push(
          <div key={edge.node.id} className="col-sm-12 col-md-6 p-3">
            <NewsCard
              article={edge.node.frontmatter}
              pinned={edge.node.frontmatter.pinned}
            />
          </div>
        )
      : Articles.push(
          <div key={edge.node.id} className="col-sm-12 col-md-6 p-3">
            <NewsCard
              article={edge.node.frontmatter}
              pinned={edge.node.frontmatter.pinned}
            />
          </div>
        );
  });

  return (
    <Layout>
      <SEO title="News" />
      <TitleBar title="News" />
      <div className="row m-0 p-1">
        <div className="col-md-8 col-lg-9 p-2 order-2 order-md-1">
          <div className="row m-0">
            {Pinned}
            {Articles}
          </div>
        </div>
        <div className="col-md-4 col-lg-3 order-md-2 order-1 px-2 py-4">
          <div
            className="card-no-hover p-4 position-sticky"
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
                onChange={(e) => setQuery(e.target.value)}
              />
              <hr />
            </div>
            <div className="mb-4 mx-2">
              <div>Filter By Type</div>
              <select
                className="bg-white p-2 w-100 mt-2"
                onChange={(e) => setFilterType(e.target.value)}
                value={filterType}
              >
                <option value="all">
                  {filterType === 'all' ? 'Change Type' : ' All'}
                </option>
                <option value="Club Achievement">Club Achievement</option>
                <option value="Member Achievement">Member Achievement</option>
                <option value="Alumni Achievement">Alumni Achievement</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default News;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            author
            tags
            slug
            categories
            pinned
            date(formatString: "DD MMMM, YYYY")
            description
            cover {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
          html
        }
      }
    }
  }
`;
