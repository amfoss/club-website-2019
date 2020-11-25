import React, { useEffect, useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TitleBar from '../components/theme/titleBar';
import dataFetch from '../utils/dataFetch';
import Loading from '../components/theme/loading';
import AchievementList from '../components/achievements/achievementList';

const Achievements = () => {
  const [GSoC, setGSoC] = useState([]);
  const [internship, setInternship] = useState([]);
  const [talks, setTalks] = useState([]);
  const [summerSchool, setSummerSchool] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const query = `{
  gsoc: achievements(category: "gsoc") {
    title
    user {
      username
      firstName
      lastName
      profile {
        profilePic
      }
    }
    year
  }
  internship: achievements(category: "internship") {
    title
    user {
      username
      firstName
      lastName
      profile {
        profilePic
      }
    }
    year
  }
  talks: achievements(category: "talks") {
    title
    user {
      username
      firstName
      lastName
      profile {
        profilePic
      }
    }
    year
  }
  summerschool: achievements(category: "summer-school") {
    title
    user {
      username
      firstName
      lastName
      profile {
        profilePic
      }
    }
    year
  }
}

`;

  const fetchData = async () => await dataFetch({ query });

  useEffect(() => {
    !isLoading &&
      fetchData().then((r) => {
        setGSoC(r.data.gsoc);
        setInternship(r.data.internship);
        setSummerSchool(r.data.summerschool);
        setTalks(r.data.talks);
        setLoading(true);
      });
  });

  return isLoading ? (
    <Layout>
      <SEO title="Achievements" />
      <TitleBar title="Achievements" />
      <div className="row m-0 px-2 py-4">
        <div className="col-md-6 col-lg-4 px-2 py-0">
          <div className="p-2">
            <AchievementList title="Google Summer of Code" achievements={GSoC} />
          </div>
        </div>
        <div className="col-md-6 col-lg-4 px-2 py-0">
          <div className="p-2">
            <AchievementList title="Summer School" achievements={summerSchool} />
          </div>
        </div>
        <div className="col-md-6 col-lg-4 px-2 py-0">
          <div className="p-2">
            <AchievementList title="Internships" achievements={internship} />
          </div>
          <div className="p-2">
            <AchievementList title="Talks" achievements={talks} />
          </div>
        </div>
      </div>
    </Layout>
  ) : (
    <Loading />
  );
};

export default Achievements;
