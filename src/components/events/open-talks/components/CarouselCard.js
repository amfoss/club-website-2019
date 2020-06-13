import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../images/1.jpg';
import Image2 from '../images/2.jpg';
import Image3 from '../images/3.jpg';
import Image4 from '../images/4.jpg';

const CarouselCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
  };
  return (
    <div className="m-4">
      <div className="row">
        <div className="col-md-7">
          <Slider {...settings}>
            <div>
              <img src={Image1} style={{ height: '70vh', objectFit: 'cover' }} />
            </div>
            <div>
              <img src={Image2} style={{ height: '70vh', objectFit: 'cover' }} />
            </div>
            <div>
              <img src={Image3} style={{ height: '70vh', objectFit: 'cover' }} />
            </div>
            <div>
              <img src={Image4} style={{ height: '70vh', objectFit: 'cover' }} />
            </div>
          </Slider>
        </div>
        <div className="talks py-4 col-md-5">
          <h1>Talks</h1>
          <p>
            "amFOSS Open Talks" is a series of invited talks from people who have
            gone out of the way of living the ordinary life. It will host people from
            different walks of life who have set an example for all of us to not just
            live but to live & inspire!
          </p>
          <p>
            For the first-ever edition of the amFOSS Open Talks, we have Mr. Vijayan
            and Mrs. Mohana, popularly known as the ‘Tea Selling Couple’, who have
            been running the “Sree Balaji Coffee House”, a tea shop in Ernakulam,
            Kochi for the last 40 years and in this period, they have travelled to
            over 25 countries.
          </p>
          <p>Do you want to hear their story?</p>
        </div>
      </div>
    </div>
  );
};
export default CarouselCard;
