import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

const ProjectCard = ({ project }) =>
  project.featured && (
    <Link to={'/projects/' + project.slug} className="card no-decoration h-100">
      <img
        className="cover"
        src={`https://api.amfoss.in/${project.cover}`}
        alt={project.slug + `'s image`}
      />
      <div className="text-dark px-4 py-4">
        <h6 className="mb-2">{project.name}</h6>
        <div>{project.tagline}</div>
      </div>
    </Link>
  );

ProjectCard.propTypes = {
  project: PropTypes.any,
};

ProjectCard.defaultProps = {
  project: null,
};

export default ProjectCard;
