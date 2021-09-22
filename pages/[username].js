import React, { useEffect, useState } from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Avatar from '../public/defaults/avatar.png';
import dataFetch from '../utils/dataFetch';
import Loading from '../components/theme/loading';
import SocialIcon from '../components/theme/socialIcon';
import langIcon from '../public/icons/language.png';
import profileIcon from '../public/icons/profile.png';
import blogIcon from '../public/icons/blog.png';
import dateFormat from 'dateformat';
import Link from 'next/link';
import NotFoundPage from './404';

import { useRouter } from 'next/router';

const query = `
  query ($username: String!) {
  user(username: $username) {
    firstName
    lastName
    username
    email
    isMembershipActive
    isVerified
    profile {
      displayInWebsite
      profilePic
      githubUsername
      gitlabUsername
      twitterUsername
      telegramUsername
      tagline
      about
      role
      birthDay
      location
      languages {
        name
      }
      links {
        portal {
          name
        }
        link
      }
    }
    blogs {
      title
      slug
      date
      cover
    }
  }
}
`;

const ProfileTemplate = () => {
  const router = useRouter();
  const { username } = router.query;
  const [data, setData] = useState('');
  const [tab, setTab] = useState('about');
  const [isLoading, setLoading] = useState(false);
  const fetchData = async (variables) => await dataFetch({ query, variables });

  useEffect(() => {
    if (username != null) {
      const variables = { username: username.substring(1) };
      fetchData(variables).then((r) => {
        setData(r.data.user);
        setLoading(true);
      });
    }
  }, [username]);

  const renderTab = () => {
    if (tab === 'about') {
      return (
        <section className="container">
          <div className="row m-0">
            <div className="col-sm-12 col-md-8 p-2">
              <div className="card-no-hover p-4 h-100">
                <h3>About</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.profile.about,
                  }}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-4 p-2">
              <div className="card-no-hover p-2 h-70">
                <div>
                  <img src={langIcon} alt="languages" width={`13%`} />
                  <span>
                    <b>Languages</b>
                  </span>
                </div>
                <div className="row m-0">
                  {data.profile.languages.length > 0 ? (
                    data.profile.languages.map((language) => (
                      <div className="badge badge-secondary p-2 m-1">
                        {language.name}
                      </div>
                    ))
                  ) : (
                    <div className="badge badge-secondary p-2 m-1">english</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section id="blog">
          <div className="row m-0">
            {data.blogs.map((blog) => (
              <div key={blog.title} className="col-sm-12 col-md-6 p-3">
                <div className="post-card text-center h-100">
                  <img
                    src={`https://api.amfoss.in/${blog.cover}`}
                    alt={blog.slug + `'s image`}
                  />
                  <Link href={'https://amfoss.in/blog/' + blog.slug}>
                    <a>
                      <h5 className="w-90 px-3 pt-3 mb-3 mt-1 mx-2">{blog.title}</h5>
                    </a>
                  </Link>
                  <p className="post-card-footer">
                    {dateFormat(new Date(blog.date), 'dS mmmm, yyyy') +
                      ', Author: ' +
                      data.firstName}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    }
  };

  return isLoading ? (
    data.isMembershipActive && data.isVerified && data.profile.displayInWebsite ? (
      <Layout>
        <section className="profile">
          <SEO title={data.firstName + ' ' + data.lastName} />
          <section id="cover">
            <div className="container d-md-flex justify-content-center p-3 m-4">
              <>
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src={
                      data.profile.profilePic
                        ? `https://api.amfoss.in/${data.profile.profilePic}`
                        : data.profile.githubUsername
                        ? `https://avatars.githubusercontent.com/${data.profile.githubUsername}`
                        : Avatar
                    }
                    alt={data.firstName + ' ' + data.lastName + `'s photo`}
                    id="profile-pic"
                    className="rounded-circle"
                  />
                </div>
                <div className="ml-4">
                  <div className="name text-left">
                    <div
                      className={
                        'd-inline-block text-left role-tag my-4 ' + data.profile.role
                      }
                    >
                      {data.profile.role}
                    </div>
                    <h1>
                      {data.firstName} {data.lastName}
                    </h1>
                    <h5>{data.profile.tagline}</h5>
                  </div>
                  <div className="social-links">
                    <SocialIcon name="gmail" link={`mailto:` + data.email} />
                    <SocialIcon
                      name="github"
                      link={`https://github.com/` + data.profile.githubUsername}
                    />
                    <SocialIcon
                      name="gitlab"
                      link={`https://gitlab.com/` + data.profile.gitlabUsername}
                    />
                    {data.profile.twitterUsername != null ? (
                      <SocialIcon
                        name="twitter"
                        link={`https://twitter.com/` + data.profile.twitterUsername}
                      />
                    ) : (
                      <div />
                    )}
                    {data.profile.telegramUsername != null ? (
                      <SocialIcon
                        name="telegram"
                        link={`https://t.me/` + data.profile.telegramUsername}
                      />
                    ) : (
                      <div />
                    )}
                    {data.profile.links.length > 0 &&
                      data.profile.links.map((link) => (
                        <SocialIcon name={link.portal.name} link={link.link} />
                      ))}
                  </div>
                </div>
              </>
            </div>
          </section>
          <div id="section-switcher">
            <div
              id="profile-tab-button"
              style={{ cursor: 'pointer' }}
              onClick={() => setTab('about')}
            >
              <img src={profileIcon} alt="profile" />
              <span>About</span>
            </div>
            {data.blogs.length > 0 && (
              <div
                id="blog-tab-button"
                style={{ cursor: 'pointer' }}
                onClick={() => setTab('blog')}
              >
                <img src={blogIcon} alt="blog" />
                <span>Blog</span>
              </div>
            )}
          </div>
          <div className="p-4">{renderTab()}</div>
        </section>
      </Layout>
    ) : (
      <NotFoundPage />
    )
  ) : (
    <Loading />
  );
};

export default ProfileTemplate;
