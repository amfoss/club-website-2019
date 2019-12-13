import React from "react"

const Map = () => {

  return(
    <section id="venue-details">
      <div className="row m-0 w-100">
        <div className="col-lg-8 order-2 p-4">
          <iframe
            id="location-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2555.517282504074!2d76.49219936127913!3d9.093913377090402!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdc224ac2f7bde6dd!2sFOSS%40Amrita!5e0!3m2!1sen!2sin!4v1569567196585!5m2!1sen!2sin"
            frameBorder="0"
            allowFullScreen={false}
          >
          </iframe>
        </div>
        <div className="col p-4">
          <h2>Venue</h2>
          <h3>Amrita School of Engineering,</h3>
          <div className="fs-4">Amritapuri Campus,</div>
          <div className="fs-5">
            Vallickavu, Karunagapally,
          </div>
          <div className="fs-6">
            Kerala, India - 690525
          </div>
        </div>
      </div>
    </section>
  )

}

export default Map;