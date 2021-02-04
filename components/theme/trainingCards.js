import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const SectionPoints = (points) => {
  return (
    <div className="row m-0 points my-4 ">
      {points.map((point) => (
        <div key={point.id} className="col-md-6 p-2">
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

const SectionCard = ({
  index,
  title,
  content,
  point1,
  point2,
  point3,
  image,
  points,
  stats,
  quote,
  slider,
}) => (
  <div className="home-sections" id={`home-section-${index + 1}`}>
    <div className="row m-0 p-4">
      <div
        className={classnames(
          `col-xl-6`,
          `order-xl-${index % 2 === 0 ? 1 : 2}`,
          `order-lg-1`,
          `d-flex`,
          `align-items-center`
        )}
      >
        {slider ? (
          <CardSlider slider={slider} title={title} />
        ) : image ? (
          <img src={image} alt={title} className="cover" />
        ) : null}
      </div>
      <div
        className={classnames(
          `col-xl-6`,
          `mt-4`,
          `order-md-${index % 2 === 0 ? 2 : 1}`
        )}
      >
        <h2>{title}</h2>
        <div
          className={index % 2 === 0 ? 1 : 2}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <ul className="text-lg">
          <li>
            <h7 className="font-lg">{point1}</h7>
          </li>
          <li>
            <h7 className="font-lg">{point2}</h7>
          </li>
          <li>
            <h7 className="font-lg">{point3}</h7>
          </li>
        </ul>
        {quote ? (
          <React.Fragment>
            <hr />
            <div className="quote">{quote}</div>
          </React.Fragment>
        ) : null}
      </div>
    </div>
    {points && points.length ? SectionPoints(points) : null}
    {stats && stats.length ? SectionStats(stats) : null}
  </div>
);

SectionCard.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  point1: PropTypes.string,
  point2: PropTypes.string,
  point3: PropTypes.string,
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
  subtitle: '',
  content: '',
  point1: null,
  point2: null,
  image: null,
  points: null,
  quote: null,
  slider: null,
};

export default SectionCard;
