import React from 'react';
import ListCard from '../theme/listCard';
import json from '../../content/thankYou.json';
export default () => {
  return (
    <section id="thank-you" className="m-4">
      <h2 className="text-center m-2">Thank you for your help and support.</h2>
      <div className="row m-0">
        {json.map((edge) => (
          <div
            id="thank-you"
            className="col-sm-12 col-md-4 col-xl-4 p-2"
            key={edge.id}
          >
            <ListCard
              key={edge.id}
              title={edge.Name}
              tagline={edge.Details}
              icon={edge.Icon}
              link={edge.Link}
              isHTML={true}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
