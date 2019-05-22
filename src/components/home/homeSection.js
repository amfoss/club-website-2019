import PropTypes from "prop-types"
import React from "react"
import classnames from "classnames"

const HomePoints = (points) => (
  <React.Fragment>
    <hr/>
    <div className="row m-0 points my-4">
      {points.map(point =>
        <div key={point.id} className="col-md-4">
          <img src={point.Icon.childImageSharp.fluid.src} alt={point.Text[0]+point.Text[1]}/>
          <h5>{point.Text[0]}<span>{point.Text[1]}</span></h5>
        </div>
      )
      }
    </div>
  </React.Fragment>
)

const HomeSection = ({ section, index }) => (
  <div className="home-card">
    <div className="row m-0">
      <div className={classnames(`
            col-xl-6`,
            `order-xl-${index%2===0 ? 1: 2}`,
            `order-lg-1`,
            `d-flex`,
            `align-items-center`
      )} >
        <img src={section.childFileYaml.childImageSharp.fluid.src} alt={section.Title} />
      </div>
      <div className={classnames(`col-xl-6`, `order-md-${index%2===0 ? 2: 1}`)} >
        <h2>{section.Title}</h2>
        <div className={index%2===0 ? 1 : 2} dangerouslySetInnerHTML={{ __html: section.Content}} />
      </div>
    </div>
    { section.childrenHomeSectionsPointsYaml.length ? HomePoints(section.childrenHomeSectionsPointsYaml) : null }
  </div>
)

HomeSection.propTypes = {
  section: PropTypes.any,
  index: PropTypes.number
}

HomeSection.defaultProps = {
  section: null,
  index: 1
}

export default HomeSection
