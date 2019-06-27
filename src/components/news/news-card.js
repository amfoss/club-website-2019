import React from "react"
import { Link } from "gatsby"

import avatar from "../../images/defaults/avatar.png"

export default ({ article }) => (
  <Link to={"/news/" + article.slug} className="post-card">
    <div className="row m-0">
      <div className="col-md-4 p-0">
      <img
        src={article.cover ? article.cover.childImageSharp.resize.src : avatar}
        alt={article.slug + `'s image`}
      />
      </div>
      <div className="col-md-8 d-flex p-0 align-items-center">
        <div>
          { article.categories ? article.categories.map( (c,id) =>
              <div key={id} className={"tag mt-4 "+c}>{c}</div>
            ) : null
          }
          <h6 className="w-75 px-3 text-uppercase">{article.title}</h6>
          <p className="px-3">{article.description}</p>
          <div className="post-card-footer">
            <span><i className="fa fa-calendar-alt" /> {article.date}</span>
            <span><i className="fa fa-user" /> @{article.author} </span>
          </div>
        </div>
      </div>
    </div>
  </Link>
)