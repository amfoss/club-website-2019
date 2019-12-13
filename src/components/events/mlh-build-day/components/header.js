import React from "react"
import amFOSSLogo from "../../../../../src/images/amfoss_logo.png"
import amritaLogo from "../../../../../src/images/amrita_logo.png"
import LocalHackDay from "../images/localhackday.svg"
import Particles from "react-particles-js"

const Header = () => {
  return (
    <>
      <div id="header-area">
        <Particles
          canvasClassName="particleBg"
          params={{
            "particles": {
              "number": {
                "value": 400,
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
        <div className="header-title d-flex align-items-center justify-content-center">
          <div className="row m-0 w-100">
            <div className="col-xl-12 col-lg-12 text-center p-0">
              <img className="mlh-Logo" src={LocalHackDay} />
            </div>
            <div className="col-sm-12">
              <div className="d-flex align-items-center text-lg-left text-center justify-content-center h-100">
                <div>
                  <h1>Amritapuri</h1>
                  <h3 className="d-flex align-items-center text-center justify-content-center h-100">December 15th 2019</h3>
                  <div className="text-center">
                    <button className="button" style={{backgroundColor: 'white'}}>
                      <a href="#registration-form" style={{color: 'black', textDecoration: 'none'}}>REGISTER NOW</a>
                    </button>
                  </div>
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