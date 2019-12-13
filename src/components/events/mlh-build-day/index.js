import React, { useEffect, useState } from "react"
import SEO from "../../seo"
import './styles/style.sass';
import Header from "./components/header"
import Footer from "./components/footer"
import Registration from "./components/registration"
import Schedule from "./components/schedule"
import Countdown from "../mlh-build-day/components/countdown"
import RSVPForm from "../mlh-build-day/components/rsvpForm"

const MLHBuild = () => {
  const [hash, setHash] = useState('');
  const [queryLoaded, setQueryLoaded] = useState(false);

  useEffect(() => {
    if(!queryLoaded)
    {
      const query = window.location.search.substring(1);
      const queryHash = query.split("=")
      setHash(queryHash[1])
      setQueryLoaded(true)
    }
  })

  return (
    <div id="mlhbuild-landing">
      <SEO title="Local Hack Day: Build 2019 - December 15th | Major League Hacking | Amritapuri" />
      {hash === undefined ? (
        <>
          <Header/>
          <Registration/>
          <Countdown deadline='December 15, 2019'/>
          <Schedule/>
          <Footer/>
        </>
      ): <RSVPForm hash={hash} />}
    </div>
  )
}

export default MLHBuild