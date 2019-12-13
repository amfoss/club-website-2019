import React from "react"
import hacktoberfest19logo from '../../hacktoberfest/images/hacktoberfest19.png'
import hacktoberfest19Art1 from '../../hacktoberfest/images/hacktoberfest_art_1.png'
import hacktoberfest19Art2 from '../../hacktoberfest/images/hacktoberfest_art_2.png'
import amFOSSLogo from '../../../../../src/images/amfoss_logo.png'
import amritaLogo from '../../../../../src/images/amrita_logo.png'

import Particles from 'react-particles-js';

const Header = () => {
  return (
  <>
    <div id="header-area">
      <Particles
        canvasClassName="particleBg"
        params={{
          "particles": {
            "number": {
              "value": 300,
              "density": {
                "enable": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "speed": 10,
                "size_min": 0.3
              }
            },
            "line_linked": {
              "enable": false
            },
            "move": {
              "random": true,
              "speed": 3,
              "direction": "down",
              "out_mode": "out"
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "bubble"
              },
              "onclick": {
                "enable": true,
                "mode": "repulse"
              }
            },
            "modes": {
              "bubble": {
                "distance": 50,
                "duration": 2,
                "size": 0,
                "opacity": 0
              },
              "repulse": {
                "distance": 40,
                "duration": 4
              }
            }
          }
        }}
       />
      <div id="top-bar" className="row m-0 p-4">
        <div className="col-6">
          <a href="https://amfoss.in">
            <img alt="amFOSS Logo" className="amFOSSLogo" src={amFOSSLogo}/>
          </a>
        </div>
        <div className="col-6 text-right">
          <a href="https://www.amrita.edu/">
            <img alt="Amrita Logo" className="amritaLogo" src={amritaLogo}/>
          </a>
        </div>
      </div>
      <img src={hacktoberfest19Art1} id="header-art-1"/>
      <img src={hacktoberfest19Art2} id="header-art-2"/>
      <div className="header-title d-flex align-items-center justify-content-center">
          <div className="row m-0 w-100">
            <div className="col-xl-8 col-lg-6 text-center p-0">
              <img className="hacktoberLogo" src={hacktoberfest19logo} />
            </div>
            <div className="col">
                <div className="d-flex align-items-center text-lg-left text-center justify-content-center h-100">
                  <div>
                    <h1>Amritapuri</h1>
                    <h3>October 9 & 10, 4PM - 9PM</h3>
                    <button className="button">
                      <a href="#registration-form" style={{color: 'black', textDecoration: 'none'}}>REGISTER NOW</a>
                    </button>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  </>
)
}

export default Header;