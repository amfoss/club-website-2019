import React from 'react';
import DigitalOcean from '../../hacktoberfest/images/hacktoberdigital.svg'

const LearnMore = () => {
  return (
    <section id="learn-more">
      <div className="row m-0 w-100 d-flex align-items-center">
        <div className="col-4">
          <img src={DigitalOcean} alt="Image" />
        </div>
        <div className="col-8">
          <p className="text-light p-2">
            Hacktoberfest is an annual event hosted by DigitalOcean and DEV.to promoting and supporting Open Source collaboration. It's all about encouraging meaningful contributions to open source.<br />
            Join Hacktoberfest meetup hosted by amFOSS on 9th and 10th of October and don't miss this oppurtunity to get a <span>limited edition T-shirt!</span>
          </p>
          <button className="button">
            <a href="https://hacktoberfest.digitalocean.com/" style={{color: 'black', textDecoration: 'none'}}>LEARN MORE!</a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default LearnMore