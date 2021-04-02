import React from 'react';
import Layout from '../components/layout';
import android from '../public/illus/android.png';
import TraningSections from '../components/training/trainingSections';
import Timeline from '../components/training/timeline';
import TrainingHighlights from '../components/training/trainingHighlights';
import TrainingMentor from '../components/training/trainingMentors';
import Projects from '../components/training/ProjectCard';
import SEO from '../components/seo';
export default () => {
  const styling = {
    backgroundImage: `url('../../photos/training.jpg')`,
  };

  return (
    <Layout>
      <SEO
        title="Training"
        keywords="android course training skills"
        description="Android Course Powered by amFOSS and Amrita Center for Cyber Security System"
      />
      <div id="home-landing" style={styling}>
        <div className="overlay">
          <div id="landing-btn">
            <a
              href="#home-section-1"
              className="fa fa-chevron-down animated infinite bounceOutDown delay-2s slow"
            />
          </div>
          <div className="col-sm-6" id="landing-info">
            <div className="d-flex align-items-center text-lg-left text-center justify-content-center h-100">
              <div>
                <img src={android} width="150" height="210" />
                <h3>Android Development</h3>
                <a
                  href="https://www.payumoney.com/events/#/buyTickets/android-app-development-online-course"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  <button className="mt-2 btn btn-lg button heading-font bg-light">
                    REGISTER NOW
                  </button>
                </a>
                <h5 className="mt-4">40 hours • Limited Seats</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: '#ffe' }}>
        <TraningSections />
        <TrainingHighlights />
        <TrainingMentor />
        <h3 className="p-4 m-2" style={{ textAlign: 'center' }}>
          Course Syllabus
        </h3>
        <div style={{ background: '#FFE5B4' }}>
          <Timeline />
        </div>
        <h3 className="p-4 m-2" style={{ textAlign: 'center' }}>
          Hands-on Projects
        </h3>
        <Projects />
      </div>
    </Layout>
  );
};
