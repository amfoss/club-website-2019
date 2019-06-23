import React from "react"
import classnames from "classnames"
import PropTypes from "prop-types"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const SectionPoints = points => {
  return (
      <div className="row m-0 points my-4">
        {points.map(point => (
          <div key={point.id} className="col-md-4 p-2">
            <div className="card px-2 py-4 h-100 d-flex align-items-center">
              <div>
                <div className="mx-2 mb-4">
                  <img
                    src={point.Icon.publicURL}
                    alt={point.Text[0] + point.Text[1]}
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
  )
}

const SectionStats = stats => {
  return (
    <div className="row m-0 points my-4">
      {
        stats.map(point => (
          <div className="col-6 col-md-4 col-lg-3 p-2">
            <div className="stats-card card px-2 h-100">
              <h6>{point.Num}</h6>
              <div className="lead">{point.Text}</div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

const CardSlider = ({slider, title}) => {
  return (
    <Carousel autoPlay showArrows={false} showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop swipeable className="w-100">
      {
        slider.length ? slider.map((slide,i) =>
          (<img key={i} src={slide.Image.childImageSharp.fluid.src} alt={"Photos of " + title} />)) : null
      }
    </Carousel>
  )
}
const SectionCard = ({ index, title, content, image, points, stats, quote, slider }) => (
  <div className="home-sections">
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
        { slider ? <CardSlider slider={slider} title={title} />
          : image ?  <img src={image} alt={title} className="cover" /> : null
        }
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
      </div>
    </div>
    { quote ? <React.Fragment><hr /><div className="quote">{quote}</div></React.Fragment> : null}
    {points && points.length ? SectionPoints(points) : null}
    {stats && stats.length ? SectionStats(stats) : null}
  </div>
)

SectionCard.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  points: PropTypes.any,
  stats: PropTypes.any,
  quote: PropTypes.string,
  slider: PropTypes.any
}

SectionCard.defaultProps = {
  section: null,
  index: 1,
  title: "",
  content: "",
  image: null,
  points: null,
  quote: null,
  slider: null
}

export default SectionCard
