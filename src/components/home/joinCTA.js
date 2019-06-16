import React from 'react'

export default () =>  {
  return(
    <div className="home-card card alert-box py-4">
      <div className="row mx-0 my-2">
        <div className="col-sm-8 col-lg-9 col-xl-10">
          <div className="d-flex align-items-center mb-2">
              <h6 className="bg-white text-dark p-2 rounded heading-font card">
              INVITING STUDENTS OF 2023 BATCH
              </h6>
          </div>
          <p>
            Are you a person who thinks out of the box? Are you looking forward to take your technical skills to the next level?
            Looking for a like-passioned community that cares for you?  The Opportunity is here, India's Leading Computer Science
            Club is inviting the best from Amritapuri to join the family, taking up the challenge. #BeTheNext
          </p>
        </div>
        <div className="col-sm-4 col-lg-3 col-xl-2 px-0 justify-content-center d-flex align-items-center">
            <a className="btn btn-lg button heading-font" role="button" href="https://join.amfoss.in/">Get Started</a>
        </div>
      </div>
    </div>
    )
}