import React from "react"
import Digitalocean from '../images/digitalocean.svg'
import Dev from '../images/dev.svg'
import Github from '../images/github.png'

const Footer = () => {
  return(
    <>
      <h1 className="py-4 my-4 text-light text-center">#OctoberIsComing</h1>
      <div className="text-center text-light">Thank You</div>
      <div id="footer-logos" className="row m-0">
        <div className="container my-2 d-flex justify-content-center">
          <a href="https://www.digitalocean.com">
            <img className="px-2" src={Digitalocean} alt="Digital Ocean" />
          </a>
          <a href="https://github.com/">
            <img className="px-2" src={Github} alt="Github" />
          </a>
          <a href="https://dev.to/">
            <img className="px-2" src={Dev} alt="Dev"/>
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer