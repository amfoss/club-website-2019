import React, { useState, useEffect } from "react"
import './styles/style.sass'

import Header from './components/header'
import Map from './components/map'
import SEO from "../../../components/seo"
import Countdown from "./components/countdown"
import Registration from "./components/registration"
import Footer from "./components/footer"
import RSVPForm from "./components/rsvpForm"
import LearnMore from "./components/learnmore"

const Hacktoberfest = () => {
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

  console.log(hash);

  return (
    <section id= "hacktoberfest">
      <SEO title="Hacktoberfest 2019 - Meetup & BootCamp | Amritapuri | October 9th & 10th" />
      { hash === undefined ? (
        <>
          <Header/>
          <Countdown deadline='October 9, 2019'/>
          <LearnMore />
          <Map/>
          <Registration />
          <Footer/>
        </>) : <RSVPForm hash={hash} />}
    </section>
  )
}

export default Hacktoberfest;
