import React from 'react';
import SectionCard from '../theme/sectionCard';
import json from '../../content/homeSections.json';
export default () => {
  return json.map((edge, i) => (
    <SectionCard
      key={edge.id}
      index={i}
      title={edge.title}
      image={edge.image}
      content={edge.content}
      points={edge.Points}
      stats={edge.Stats}
    />
  ));
};
