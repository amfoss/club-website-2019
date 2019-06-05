import React from 'react'

export default function AlertBox() {
  return(
    <div className="home-card card alert-box">
      <div className="row">
        <div className="col-sm-8 col-lg-9 col-xl-10">
          <div className="row">
            <div className="col-sm-12">
              <div className="mb-2">
                <span className="text-bold">Join FOSS@Amrita</span><span> <button className="btn" style={{backgroundColor: 'white'}}>
                INVITING STUDENTS OF 2022 BATCH
                </button></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 m-0">
              <p style={{fontFamily: 'sans-serif'}}>Want to take your technical skills to the next level? Want to grow in a community that cares for you? The Opportunity is here, India's Leading Computer Science Club is inviting you to take up the challenge. #BeTheNxt</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-lg-3 col-xl-2 px-0 pl-sm-4 pl-0 d-flex align-items-center">
          <button className="btn btn-lg"><a className="button" href="https://github.com/amfoss/praveshan">Get Started</a></button>
        </div>
      </div>
    </div>
    )
}