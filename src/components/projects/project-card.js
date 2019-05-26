import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import avatar from "../../images/defaults/avatar.png"

const ProjectCard = ({ project }) => (
  <Link to={"/projects/" + project.slug} className="project-card">
    <img
      src={project.cover ? project.cover.childImageSharp.resize.src : avatar}
      alt={project.slug + `'s image`}
    />
    <h5>{project.title}</h5>
  </Link>
)

ProjectCard.propTypes = {
  project: PropTypes.any,
}

ProjectCard.defaultProps = {
  project: null,
}

export default ProjectCard
