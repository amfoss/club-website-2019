import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TitleBar from '../components/theme/titleBar';

import Link from 'next/link';
import CookieConsent from '../components/cookieConsent';

const Branding = () => (
  <Layout>
    <SEO title="Branding" />
    <TitleBar title="Branding" />
    <div class="container">
      <div class="row  m-0 my-4">
        <div class="col-sm-8 col-md-4  offset-md-2 col-xl-4  bg-white vertical-align">
          <div class=" col-12 ">
            The official amFOSS logo is used to brand and identify amFOSS projects
            and content.
          </div>
        </div>
        <div class="col-sm-8 col-md-6 col-xl-4 bg-white">
          <table class="table_view">
            <tr>
              <td colspan="2">
                <div id="img-main">
                  <Link href="/branding/SLOGAN-BLACK.png">
                    <img class="img" src={'SLOGAN-BLACK.svg'} alt="logo" />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="badge">
                  <div class="badge-yellow p-2 m-1">
                    <p>#FFC107</p>
                    <p>PMS 7548 C</p>
                  </div>
                </div>
              </td>
              <td>
                <div class="badge">
                  <div class="badge-black p-2 m-1">
                    <p>#000000</p>
                    <p>Black</p>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div class="row m-0 my-4">
        <div class="col-sm-6 col-md-3 col-xl-3 offset-sm-3 ">
          <div class="card">
            <div class="card-body">
              <div id="img-top">
                <img class="img" src={'SLOGAN-BLACK.png'} alt="logo" />
                <p class="card-img-link">
                  <Link href="/branding/SLOGAN-BLACK.png">
                    <a>PNG</a>
                  </Link>{' '}
                  |{' '}
                  <Link href="/branding/SLOGAN-BLACK.svg">
                    <a>SVG</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-xl-3 ">
          <div className="card-black ">
            <div className="card-body">
              <div id="img-black-top">
                <img className="img" src={'SLOGAN-WHITE.png'} alt="logo" />
                <p className="card-img-link">
                  <Link href="/branding/SLOGAN-WHITE.png">
                    <a>PNG |</a>
                  </Link>{' '}
                  <Link href="/branding/SLOGAN-WHITE.svg">
                    <a>SVG </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-8 col-md-6 offset-sm-3">
        <p>
          These variations can only be used when under size constraints and when the
          primary logo is not prominent.
        </p>
      </div>
      <div className="row m-0 my-4">
        <div className="col-sm-6 col-md-3 col-xl-3 offset-sm-3">
          <div className="card ">
            <div className="card-body">
              <div id="img-white-horizontal">
                <img
                  className="img"
                  src={'HORIZONTAL-TEXT-BULB-BLACK.svg'}
                  alt="logo"
                />
                <p className="card-img-link">
                  <Link href="/branding/HORIZONTAL-TEXT-BULB-BLACK.png">
                    <a>PNG</a>
                  </Link>{' '}
                  |{' '}
                  <Link href="/branding/HORIZONTAL-TEXT-BULB-BLACK.svg">
                    <a>SVG</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-xl-3">
          <div className="card-black">
            <div className="card-body">
              <div id="img-black-horizontal">
                <img
                  className="img"
                  src={'HORIZONTAL-TEXT-BULB-WHITE.svg'}
                  alt="logo"
                />
                <p className="card-img-link">
                  <Link href="/branding/HORIZONTAL-TEXT-BULB-WHITE.png">
                    <a>PNG |</a>
                  </Link>{' '}
                  <Link href="/branding/HORIZONTAL-TEXT-BULB-WHITE.svg">
                    <a>SVG</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-0 my-4">
        <div className="col-sm-6 col-md-3 col-xl-3 offset-sm-3">
          <div className="card ">
            <div className="card-body">
              <div id="img-top">
                <img className="img" src={'BULB-BLACK.png'} alt="logo" />
                <p className="card-img-link">
                  <Link href="/branding/BULB-BLACK.png">
                    <a>PNG |</a>
                  </Link>{' '}
                  <Link href="/branding/BULB-BLACK.svg">
                    <a>SVG</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 col-xl-3">
          <div className="card-black">
            <div className="card-body">
              <div id="img-black-top">
                <img className="img" src={'BULB-WHITE.png'} alt="logo" />
                <p className="card-img-link">
                  <Link href="/branding/BULB-WHITE.png">
                    <a>PNG |</a>
                  </Link>{' '}
                  <Link href="/branding/BULB-WHITE.svg">
                    <a>SVG </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CookieConsent />
  </Layout>
);

export default Branding;
