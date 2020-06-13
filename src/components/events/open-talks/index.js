import React, { useEffect, useState } from 'react';
import SEO from '../../../components/seo';
import './styles/style.sass';
import Header from './components/header';
import Registration from './components/registration';
import Countdown from './components/countdown';
import RSVPForm from './components/rsvpForm';
import CarouselCard from './components/CarouselCard';
import Map from './components/map';

const OpenTalks = () => {
  const [hash, setHash] = useState(undefined);
  const [queryLoaded, setQueryLoaded] = useState(false);

  useEffect(() => {
    if (!queryLoaded) {
      const query = window.location.search.substring(1);
      const queryHash = query.split('=');
      setHash(queryHash[1]);
      setQueryLoaded(true);
    }
  });

  return (
    <div id="opentalks-landing">
      <SEO title="Open Talks 2020 - February 15" />
      {hash === undefined ? (
        <>
          <Header />
          <CarouselCard />
          <Registration />
          <Countdown deadline="February 15, 2020 01:00 PM" />
          <Map />
        </>
      ) : (
        <RSVPForm hash={hash} />
      )}
    </div>
  );
};

export default OpenTalks;
