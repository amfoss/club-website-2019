import React, { useState, useEffect } from "react"
import SEO from "../../../components/seo"
import Header from "./components/header"
import Registration from "./components/registration"
import "./styles/style.sass"
import Countdown from "./components/countdown"
import RSVPForm from "./components/rsvpForm"
import Footer from "./components/footer"

const MLH = () => {
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

  return(
   <div id="mlh-landing">
     <SEO title="Local Hack Day: Learn 2019 - October 12 | Major League Hacking | Amritapuri" />
     {hash === undefined ? (
       <>
         <Header/>
         <Countdown deadline='October 12, 2019'/>
         <Registration/>
         <Footer/>
       </>
     ): <RSVPForm hash={hash} />}
   </div>
  )
}

export default MLH