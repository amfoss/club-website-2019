import React from 'react';
import { Link } from 'gatsby';

export default ({ article, pinned }) => (
  <Link to={'/news/' + article.slug} className="post-card h-100">
    <img
      src={article.cover.childImageSharp.fluid.src}
      alt={article.slug + `'s image`}
    />
    <div>
      {article.categories
        ? article.categories.map((c, id) => (
            <div key={id} className={'tag my-4 ' + c}>
              {c}
            </div>
          ))
        : null}
      {pinned && <i className="fas fa-thumbtack" />}
      <h5 className="w-90 px-3 mb-3 mt-1 mx-2">{article.title}</h5>
    </div>
    <div className="pb-5">
      <p className="post-card-footer">
        <span>
          <i className="fa fa-calendar-alt" /> {article.date}
        </span>
      </p>
    </div>
  </Link>
);
