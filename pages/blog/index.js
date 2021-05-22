import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import TitleBar from '../../components/theme/titleBar';
import BlogCard from '../../components/blog/blogCard';
import dataFetch from '../../utils/dataFetch';
import CollectionCard from '../../components/blog/collectionCard';
import Loading from '../../components/theme/loading';
import CookieConsent from '../../components/cookieConsent';

const blogsQuery = `{
  blogs{
    title
    slug
    author{
      firstName
    }
    date
    cover
    tags{
      name
    }
    featured 
    description
    collection{
      name
    }
  }
}`;

const collectionsQuery = `{
  collections{
    name
    date
    cover
  }
}`;

const Blog = () => {
  const [data, setData] = useState([]);
  const [collections, setCollections] = useState([]);
  const [collection, setCollection] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const fetchData = async () => await dataFetch({ query: blogsQuery });
  const fetchCollectionsData = async () =>
    await dataFetch({ query: collectionsQuery });

  useEffect(() => {
    if (!isLoading) {
      fetchCollectionsData().then((r) => {
        setCollections(r.data.collections);
        setCollection(r.data.collections[0].name);
      });
      fetchData()
        .then((r) => setData(r.data.blogs))
        .finally(() => setLoading(true));
    }
  }, []);

  const filter = data.filter((blog) => {
    let queryFlag = 1;
    let filterFlag = 1;

    if (query !== '') {
      queryFlag = 0;
      if (
        blog.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        blog.description.toLowerCase().indexOf(query.toLowerCase()) !== -1
      )
        queryFlag = 1;
    }
    if (filterType !== 'all') {
      filterFlag = 0;
      if (blog.category.name === filterType) filterFlag = 1;
    }
    if (queryFlag && filterFlag) return 1;
  });

  const scrollTop = () => {
    window.scrollTo({
      top: 100,
      behavior: 'smooth',
    });
  };

  const Articles = [];
  const Featured = [];
  const Collections = [];

  filter.map((blog) => {
    blog.collection
      ? Collections.push(blog)
      : blog.featured
      ? Featured.push(
          <div key={blog.title} className="col-sm-12 col-md-6 p-3">
            <BlogCard article={blog} featured={blog.featured} />
          </div>
        )
      : Articles.push(
          <div key={blog.title} className="col-sm-12 col-md-6 p-3">
            <BlogCard article={blog} featured={blog.featured} />
          </div>
        );
  });

  return isLoading ? (
    <Layout>
      <SEO
        title="Blog"
        description="Visit the official amFOSS blog to catch everything latest in tech and FOSS"
      />
      <TitleBar title="Blog" />
      <div className="row m-0 p-1">
        <div className="col-md-8 col-lg-9 p-2 order-2 order-md-1">
          <h3 className="mt-4 mx-4">amFOSS Monthly Collections</h3>
          <div className="mx-4" style={{ fontSize: '20px' }}>
            amFOSS Monthly is a collection of introductory posts around tech topics
            that surround us in everyday life.
          </div>
          {collection !== '' && (
            <React.Fragment>
              <h4 className="mx-4 mt-4">Collection - {collection}</h4>
              <div className="row m-0 mt-3">
                {Collections.reverse().map((c) => {
                  if (c.collection.name === collection)
                    return (
                      <div key={c.name} className="col-sm-12 col-md-6 p-3">
                        <BlogCard article={c} featured={c.featured} />
                      </div>
                    );
                })}
              </div>
            </React.Fragment>
          )}
          <h4 className="mx-4 mt-4">Other collections</h4>
          <div className="mx-4" style={{ fontSize: '20px' }}>
            Select to view other collections.
          </div>
          <div className="row m-0 mt-3">
            {collections.map((c) => {
              if (c.name !== collection) {
                return (
                  <div
                    onClick={() => {
                      setCollection(c.name);
                      scrollTop();
                    }}
                    key={c.name}
                    className="col-sm-12 col-md-6 p-3"
                  >
                    <CollectionCard collection={c} />
                  </div>
                );
              }
            })}
          </div>
          <h3 className="mt-4 mx-4">Feed</h3>
          <div className="mx-4" style={{ fontSize: '20px' }}>
            View blog posts authored by members
          </div>
          <div className="row m-0">
            {isLoading ? (
              <React.Fragment>
                {Featured}
                {Articles}
              </React.Fragment>
            ) : (
              <ReactLoading type="spinningBubbles" color="#000" />
            )}
          </div>
        </div>
        <div className="col-md-4 col-lg-3 order-md-2 order-1 px-2 py-4">
          <div
            className="card-no-hover p-4 position-sticky"
            style={{ top: '1rem' }}
            id="filter-card"
          >
            <h5 className="my-3">Search</h5>
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
          </div>
        </div>
      </div>
      <CookieConsent />
    </Layout>
  ) : (
    <Loading />
  );
};

export default Blog;
