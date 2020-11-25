import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import crowdIcon from '../../public/icons/crowd.png';
import bulbIcon from '../../public/icons/bulb.png';
import MemberList from '../../components/projects/membersList';
import SocialIcon from '../../components/theme/socialIcon';
import dataFetch from '../../utils/dataFetch';
import Loading from '../../components/theme/loading';

import { useRouter } from 'next/router';

const query = ` query($slug: String!) {
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
}`;
const Project = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState('');
  const [tab, setTab] = useState('descriptionTab');
  const [isLoading, setLoading] = useState(false);
  const fetchData = async (variables) => await dataFetch({ query, variables });

  useEffect(() => {
    if (router.query.slug != null) {
      const variables = { slug: slug };
      fetchData(variables).then((r) => {
        setData(r.data.project);
        setLoading(true);
      });
    }
  }, [router.query.slug]);

  const renderTab = () => {
    if (tab === 'membersTab') {
      return (
        <section className="my-4">
          <MemberList members={data.members} />
        </section>
      );
    } else {
      return (
        <section className="my-4 container">
          <div
            className="card p-4"
            dangerouslySetInnerHTML={{
              __html: data.detail,
            }}
          />
        </section>
      );
    }
  };
  return isLoading ? (
    <Layout>
      <SEO title={data.name} description={data.tagline} slug={data.slug} />
      <div className="project">
        <section id="cover">
          <div className="container">
            <div className="row m-0 bg-white section-card">
              <div className="col-md-4">
                <img
                  src={`https://api.amfoss.in/${data.cover}`}
                  alt={data.slug + `'s image`}
                />
              </div>
              <div className="col-md-8">
                <h1>{data.name}</h1>
                <p>{data.tagline}</p>
                {data.links ? (
                  <div className="social-links">
                    {data.links.map((link) => (
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
            onClick={() => setTab('detail')}
            style={{ cursor: 'pointer' }}
          >
            <img src={bulbIcon} alt="description" />
            <span>Description</span>
          </div>
          <div
            id="members-tab-button"
            onClick={() => setTab('membersTab')}
            style={{ cursor: 'pointer' }}
          >
            <img src={crowdIcon} alt="members" />
            <span>Members</span>
          </div>
        </div>
        <div className="p-4">{renderTab()}</div>
      </div>
    </Layout>
  ) : (
    <Loading />
  );
};

export default Project;
