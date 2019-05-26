import PropTypes from "prop-types"
import React from "react"
import classnames from "classnames"

const SectionPoints = points => (
  <React.Fragment>
    <hr />
    <div className="row m-0 points my-4">
      {points.map(point => (
        <div key={point.id} className="col-md-4">
          <img
            src={point.Icon.childImageSharp.fluid.src}
            alt={point.Text[0] + point.Text[1]}
          />
          <h5>
            {point.Text[0]}
            <span>{point.Text[1]}</span>
          </h5>
        </div>
      ))}
    </div>
  </React.Fragment>
)

const SectionCard = ({ index, title, content, image, points }) => (
  <div className="home-card">
    <div className="row m-0">
      <div
        className={classnames(
          `col-xl-6`,
          `order-xl-${index % 2 === 0 ? 1 : 2}`,
          `order-lg-1`,
          `d-flex`,
          `align-items-center`
        )}
      >
        {image ? <img src={image} alt={title} /> : null}
      </div>
      <div
        className={classnames(
          `col-xl-6`,
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
    {points && points.length ? SectionPoints(points) : null}
  </div>
)

SectionCard.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  points: PropTypes.any,
}

SectionCard.defaultProps = {
  section: null,
  index: 1,
  title: "",
  content: "",
  image: null,
  points: null,
}

export default SectionCard
