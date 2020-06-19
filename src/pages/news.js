import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TitleBar from '../components/theme/titleBar';
import NewsCard from '../components/news/newsCard';
import dataFetch from '../utils/dataFetch';
import ReactLoading from 'react-loading';

const newsQuery = ` {
  news{
    title
    slug
    date
    cover
    category{
      name
    }
    pinned
    description
  }
}`;

const News = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const fetchData = async () => await dataFetch({ query: newsQuery });
  useEffect(() => {
    !isLoading &&
      fetchData().then((r) => {
        setData(r.data.news);
        setLoading(true);
      });
  }, [data]);

  const filter = data.filter((news) => {
    let queryFlag = 1;
    let filterFlag = 1;

    if (query !== '') {
      queryFlag = 0;
      if (
        news.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        news.description.toLowerCase().indexOf(query.toLowerCase()) !== -1
      )
        queryFlag = 1;
    }
    if (filterType !== 'all') {
      filterFlag = 0;
      if (news.category.name === filterType) filterFlag = 1;
    }
    if (queryFlag && filterFlag) return 1;
  });

  const Articles = [];
  const Pinned = [];
  filter.map((news) => {
    news.pinned
      ? Pinned.push(
          <div key={news.title} className="col-sm-12 col-md-6 p-3">
            <NewsCard article={news} pinned={news.pinned} />
          </div>
        )
      : Articles.push(
          <div key={news.title} className="col-sm-12 col-md-6 p-3">
            <NewsCard article={news} pinned={news.pinned} />
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
            {isLoading ? (
              <React.Fragment>
                {Pinned}
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
