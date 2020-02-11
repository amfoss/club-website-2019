import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image1 from "../images/1.jpg"
import Image2 from "../images/2.jpg"
import Image3 from "../images/3.jpg"
import Image4 from "../images/4.jpg"

const CarouselCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
  }
  return (
    <div className="m-4">
      <div className="row">
        <div className="col-md-7">
          <Slider {...settings}>
          <div>
              <img src={Image1} style={{ height: "70vh", objectFit:"cover" }} />
            </div>
            <div>
              <img src={Image2} style={{ height: "70vh", objectFit:"cover" }} />
            </div>
            <div>
              <img src={Image3} style={{ height: "70vh", objectFit:"cover" }} />
            </div>
            <div>
              <img src={Image4} style={{ height: "70vh", objectFit:"cover" }} />
            </div>
          </Slider>
        </div>
        <div className="talks py-4 col-md-5">
          <h1>Talks</h1>
          <p>
            Vijayan has been a tea-seller for over forty years, however, that
            hasn't stopped him and his wife from touring almost every scenic
            destination in India along with a whopping 16 other countries-
            Britain, France, Austria, Egypt, UAE, the list goes on.
          </p>
          <p>
            His tea-stall is his only source of income, something that has never
            been an obstacle in fulfilling his dream of travelling all over the
            world. "I got the obsession in traveling from my dad; he took me to
            different places since I was 6 year old. We went to Madurai, Palani
            and many other places. Those travel memories with my dad helped me
            unleash my dreams", says Vijayan.
          </p>
          <p>
            Some dreams are worth going all out for, and Vijayan's story sounds
            like one of those few.
          </p>
        </div>
      </div>
    </div>
  )
}
export default CarouselCard
