import React from "react"
import Github from '../images/github.png'
import MLH from "../../mlh-hack-day/images/mlh-logo-white.png"

const Footer = () => {
  return(
    <section id= "footer">
      <div className="py-4 text-center text-light">Thank You</div>
      <div id="footer-logos" className="row m-0">
        <div className="container d-flex justify-content-center">
          <a href="https://mlh.io/">
            <img className="p-2" src={MLH} alt="MLH" />
          </a>
          <a href="https://github.com/">
            <img className="px-2" src={Github} alt="Github" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Footer