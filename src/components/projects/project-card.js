import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const ProjectCard = ({ project }) => (
  <Link to={"/projects"+ '/' + project.slug } className="project-card">
    <h3>
      {project.title}
    </h3>
  </Link>
)

ProjectCard.propTypes = {
  project: PropTypes.any,
}

ProjectCard.defaultProps = {
  project: null,
}

export default ProjectCard
