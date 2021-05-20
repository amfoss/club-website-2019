import React from 'react';

const CollectionCard = ({ collection }) => (
  <div className="post-card h-100" style={{ cursor: 'pointer' }}>
    <img
      src={`https://api.amfoss.in/${collection.cover}`}
      alt={`${collection.name}'s image`}
    />
    <div>
      <h5 className="w-90 px-3 pt-3 mb-3 mt-1 mx-2">{collection.name}</h5>
    </div>
  </div>
);

export default CollectionCard;
