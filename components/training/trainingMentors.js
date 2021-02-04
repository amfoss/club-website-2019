import React from 'react';
import SectionCard from '../theme/trainingMentor';
import json from '../../content/trainingMentor.json';
export default () => {
  return json.map((edge, i) => (
    <SectionCard
      key={edge.id}
      index={i}
      title={edge.title}
      portfolio={edge.portfolio}
      image={edge.image}
      content={edge.content}
      points={edge.Points}
      perks={edge.perks}
    />
  ));
};
