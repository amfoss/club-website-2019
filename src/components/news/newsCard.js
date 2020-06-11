import React from "react"
import { Link } from "gatsby"

import avatar from "../../images/defaults/avatar.png"

export default ({ article }) => (
  <Link to={"/news/" + article.slug} className="post-card">
    <div className="row m-0">
      <div className="col-md-5 p-0">
        <img
          src={
            article.cover ? article.cover.childImageSharp.resize.src : avatar
          }
          alt={article.slug + `'s image`}
        />
      </div>
      <div className="col-md-7 d-flex p-0 align-items-center">
        <div>
          {article.categories
            ? article.categories.map((c, id) => (
                <div key={id} className={"tag my-4" + c}>
                  {c}
                </div>
              ))
            : null}
          <h5 className="w-90 px-3 mb-5">{article.title}</h5>
          <div className="post-card-footer">
            <span>
              <i className="fa fa-calendar-alt" /> {article.date}
            </span>
            <span>
              <i className="fa fa-user" /> @{article.author}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  </Link>
)
