import React from 'react';
import { Link } from 'gatsby';
import dateFormat from 'dateformat';

export default ({ article, featured }) => (
  <Link to={'/blog/' + article.slug} className="post-card h-100">
    <img
      src={`https://api.amfoss.in/${article.cover}`}
      alt={article.slug + `'s image`}
    />
    <div>
      {false && <i className="fas fa-thumbtack" />}
      <h5 className="w-90 px-3 pt-3 mb-3 mt-1 mx-2">{article.title}</h5>
    </div>
    <div className="pb-5">
      <p className="post-card-footer">
        <span>
          {dateFormat(new Date(article.date), 'dS mmmm, yyyy') +
            ',  Author: ' +
            article.author.firstName}
        </span>
      </p>
    </div>
  </Link>
);
