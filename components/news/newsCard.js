import React from 'react';
import dateFormat from 'dateformat';

export default ({ article, pinned }) => (
  <div className="post-card h-100">
    <a href={article.slug}>
      <img
        src={`https://api.amfoss.in/${article.cover}`}
        alt={article.slug + `'s image`}
      />
      <div>
        <div className={'tag my-4 ' + article.category.name}>
          {article.category.name}
        </div>
        {pinned && <i className="fas fa-thumbtack" />}
        <h5 className="w-90 px-3 mb-3 mt-1 mx-2">{article.title}</h5>
      </div>
      <div className="pb-5">
        <p className="post-card-footer">
          <span>{dateFormat(new Date(article.date), 'dS mmmm, yyyy')}</span>
        </p>
      </div>
    </a>
  </div>
);
