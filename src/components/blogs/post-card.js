import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import avatar from "../../images/defaults/avatar.png"

export default ({ blog }) => (
  <Link to={"/@" + blog.author + "/" + blog.slug} className="post-card">
    <div className="row m-0">
      <div className="col-4 p-0">
      <img
        src={blog.cover ? blog.cover.childImageSharp.resize.src : avatar}
        alt={blog.slug + `'s image`}
      />
      </div>
      <div className="col-8 d-flex p-0 align-items-center">
        <div>
          { blog.categories ? blog.categories.map( (c,id) =>
              <div key={id} className={"tag mt-4 "+c}>{c}</div>
            ) : null
          }
          <h6 className="w-75 px-3">{blog.title}</h6>
          <p className="px-3 pb-4">{blog.description}</p>
          <div className="post-card-footer">
            <span><i className="fa fa-calendar-alt" /> {blog.date}</span>
            <span><i className="fa fa-user" /> @{blog.author} </span>
          </div>
        </div>
      </div>
    </div>
  </Link>
)