import React from "react"
import classnames from "classnames"
import PropTypes from "prop-types"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const SectionPoints = points => {
  return (
    <React.Fragment>
      <hr />
      <div className="row m-0 points my-4">
        {points.map(point => (
          <div key={point.id} className="col-md-4">
            <img
              src={point.Icon.childImageSharp.fluid.src}
              alt={point.Text[0] + point.Text[1]}
            />
            <h6>
              {point.Text[0]}
              <span>{point.Text[1]}</span>
            </h6>
          </div>
        ))}
      </div>
    </React.Fragment>
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
const SectionCard = ({ index, title, content, image, points, quote, slider }) => (
  <div className="home-card">
    <div className="row m-0">
      <div
        className={classnames(
          `col-xl-4`,
          `order-xl-${index % 2 === 0 ? 1 : 2}`,
          `order-lg-1`,
          `d-flex`,
          `align-items-center`
        )}
      >
        { slider ? <CardSlider slider={slider} title={title} />
          : image ?  <img src={image} alt={title}/> : null
        }
      </div>
      <div
        className={classnames(
          `col-xl-8`,
          `mt-4`,
          `order-md-${index % 2 === 0 ? 2 : 1}`
        )}
      >
        <h3>{title}</h3>
        <div
          className={index % 2 === 0 ? 1 : 2}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
    { quote ? <React.Fragment><hr /><div className="quote">{quote}</div></React.Fragment> : null}
    {points && points.length ? SectionPoints(points) : null}
  </div>
)

SectionCard.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  points: PropTypes.any,
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
