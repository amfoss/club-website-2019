import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const SectionPoints = (points) => {
  return (
    <div className="row m-0 points my-4 ">
      {points.map((point) => (
        <div key={point.id} className="col-md-3 offset-2 p-2">
          <div className="card px-4 py-4 w-100 h-100 d-flex align-items-center">
            <div>
              <div className="mx-2 mb-4"></div>
              <h3 className="mb-0">
                {point.Text[0]}
                <span>{point.Text[1]}</span>
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const SectionStats = (perks) => {
  return (
    <div className="row m-0 points my-4 ">
      {perks.map((point) => (
        <div key={point.id} className="col-md-3 p-2">
          <div className="stats-card card px-2 h-60">
            <div>
              <div className="mx-2 mb-4">
                <img
                  src={point.Icon}
                  alt={point.Text[0] + point.Text[1]}
                  style={{ height: '6rem' }}
                />
              </div>
              <h5 className="mb-0">
                {point.Text[0]}
                <span>{point.Text[1]}</span>
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const CardSlider = ({ slider, title }) => {
  return (
    <Carousel
      autoPlay
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      infiniteLoop
      swipeable
      className="w-100"
    >
      {slider.length
        ? slider.map((slide, i) => (
            <img key={i} src={slide.Image} alt={'Photos of ' + title} />
          ))
        : null}
    </Carousel>
  );
};
const SectionCard = ({
  index,
  title,
  content,
  portfolio,
  image,
  points,
  perks,
  quote,
  slider,
}) => (
  <div className="home-sections" id={`home-section-${index + 1}`}>
    <div className="row m-0 p-4">
      <div className={classnames('col-12')}>
        {slider ? (
          <CardSlider slider={slider} title={title} />
        ) : image ? (
          <img
            src={image}
            alt={title}
            className="rounded-circle w-50 h-150 mx-auto align-items-center"
          />
        ) : null}
      </div>
      <div className={classnames(`mx-auto`)}>
        <a href={portfolio}>
          <h2>{title}</h2>
        </a>
        <div
          className={index % 2 === 0 ? 1 : 2}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {quote ? (
          <React.Fragment>
            <hr />
            <div className="quote">{quote}</div>
          </React.Fragment>
        ) : null}
      </div>
    </div>
    {points && points.length ? SectionPoints(points) : null}
    {perks && perks.length ? SectionStats(perks) : null}
  </div>
);

SectionCard.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  portfolio: PropTypes.string,
  image: PropTypes.string,
  points: PropTypes.any,
  perks: PropTypes.any,
  quote: PropTypes.string,
  slider: PropTypes.any,
};

SectionCard.defaultProps = {
  section: null,
  index: 1,
  title: '',
  content: '',
  portfolio: null,
  image: null,
  points: null,
  quote: null,
  slider: null,
};

export default SectionCard;
