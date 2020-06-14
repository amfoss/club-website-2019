import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Disqus from 'gatsby-plugin-disqus';

import avatar from '../images/defaults/avatar.png';
import TitleBar from '../components/theme/titleBar';

export default function Template({ data: { markdownRemark } }) {
  return (
    <Layout>
      <SEO
        title={markdownRemark.frontmatter.title}
        slug={markdownRemark.frontmatter.slug}
        description={markdownRemark.frontmatter.description}
        author={markdownRemark.frontmatter.author}
        keywords={
          markdownRemark.frontmatter.tags
            ? markdownRemark.frontmatter.tags.join(', ')
            : null
        }
        type="article"
      />
      <TitleBar title={markdownRemark.frontmatter.title} type="h3" />
      <div className="row mx-2 my-4">
        <div className="col-md-9 order-2 order-md-1">
          <img
            className="w-100 post-cover mb-2"
            src={markdownRemark.frontmatter.cover.publicURL}
            alt={markdownRemark.frontmatter.slug + `'s image`}
          />
        </div>
        <div className="col-md-3 order-1 mb-4 order-md-2">
          <div className="card-no-hover p-2">
            <div>
              {markdownRemark.frontmatter.categories.map((cat, id) => (
                <div key={id} className={'tag mt-2 ' + cat}>
                  {cat}
                </div>
              ))}
            </div>
            <div>
              <i className="fa fa-calendar-alt ml-4" />{' '}
              {markdownRemark.frontmatter.date}
            </div>
            <div className="mx-4 mb-3">
              <div>
                <h6 className="mt-2">Tags</h6>
                {markdownRemark.frontmatter.tags.map((cat, id) => (
                  <li key={id}>{cat}</li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4">
        <div
          className="card-no-hover p-4 content-text-size"
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        />
      </div>
      <div className="p-2">
        <Disqus
          identifier={markdownRemark.frontmatter.id}
          title={markdownRemark.frontmatter.title}
        />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        author
        slug
        title
        date
        categories
        tags
        description
        cover {
          publicURL
        }
      }
      html
    }
  }
`;
