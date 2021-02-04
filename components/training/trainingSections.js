import React from 'react';
import SectionCard from '../theme/trainingCards';
import json from '../../content/trainingSections.json';
export default () => {
  return json.map((edge, i) => (
    <SectionCard
      key={edge.id}
      index={i}
      title={edge.title}
      point1={edge.point1}
      point2={edge.point2}
      point3={edge.point3}
      linkden={edge.linkden}
      image={edge.image}
      content={edge.content}
      points={edge.Points}
      perks={edge.perks}
    />
  ));
};
