import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import avatar from "../../images/defaults/avatar.png"

const BlogCard = ({ blog }) => (
  <Link to={"/@" + blog.author + "/" + blog.slug} className="blog-card">
    <img
      src={blog.cover ? blog.cover.childImageSharp.resize.src : avatar}
      alt={blog.slug + `'s image`}
    />
    <h3>{blog.title}</h3>
  </Link>
)

BlogCard.propTypes = {
  blog: PropTypes.any,
}

BlogCard.defaultProps = {
  blog: null,
}

export default BlogCard
