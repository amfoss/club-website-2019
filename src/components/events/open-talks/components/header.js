import React, { useEffect } from "react"
import amFOSSLogo from "../../../../../src/images/amfoss_logo.png"
import amritaLogo from "../../../../../src/images/amrita_logo.png"
import HeaderImage from "../images/header.png"

const Header = () => {
  return (
    <>
      <div id="header-area">
        <div id="top-bar" className="row m-0 p-3">
          <div className="col-6">
            <a href="https://amfoss.in">
              <img alt="amFOSS Logo" className="amFOSSLogo" src={amFOSSLogo} />
            </a>
          </div>
          <div className="col-6 text-right">
            <a href="https://www.amrita.edu/">
              <img alt="Amrita Logo" className="amritaLogo" src={amritaLogo} />
            </a>
          </div>
        </div>
        <div className="header-title">
          <div className="row m-0 w-100 p-4 px-5">
            <div className="col-sm-2" />
            <div className="col-sm-8">
              <img src={HeaderImage} style={{width: "100%"}} />
            </div>
            <div className="col-sm-12 py-5">
              <div className="d-flex align-items-center text-lg-left text-center justify-content-center h-100">
                <div>
                  <h3 className="d-flex align-items-center text-center justify-content-center h-100">
                    February 15th 2020
                  </h3>
                  <div className="text-center">
                    <button
                      className="button"
                      style={{ backgroundColor: "white" }}
                    >
                      <a
                        href="#registration-form"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        REGISTER NOW
                      </a>
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

export default Header
