import React, { useEffect, useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import ProjectCard from '../components/projects/projectCard';
import TitleBar from '../components/theme/titleBar';
import dataFetch from '../utils/dataFetch';
import ReactLoading from 'react-loading';

const projectsQuery = ` query {
    projects{
      name
      slug
      featured
      tagline
      cover
    }
  }`;

const Project = () => {
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  const fetchData = async () => await dataFetch({ query: projectsQuery });
  useEffect(() => {
    fetchData().then((r) => {
      setData(r.data.projects);
      setLoading(true);
    });
  }, [data]);

  const filter = data.filter((project) => {
    if (project.name.toLowerCase().indexOf(query.toLowerCase()) !== -1) return 1;
  });
  const Projects = filter.map((project) => (
    <div key={project.name} className="col-xl-5 col-md-10 col-sm-6 pb-4">
      <ProjectCard project={project} />
    </div>
  ));

  return (
    <Layout>
      <SEO title="Projects" />
      <TitleBar title="Projects" />
      <div className="row m-0 p-1">
        <div className="col-md-8 col-lg-9 p-2 order-2 order-md-1">
          <div className="row mx-2 my-4">
            {isLoading ? (
              Projects
            ) : (
              <ReactLoading type="spinningBubbles" color="#000" />
            )}
          </div>
        </div>
        <div className="col-md-4 col-lg-3 order-md-2 order-1 px-2 py-4">
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
                onChange={(e) => setQuery(e.target.value)}
              />
              <hr />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Project;
