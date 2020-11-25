import React from 'react';
import SectionCard from '../theme/sectionCard';
import json from '../../content/clubLife.json';
export default () => {
  return json.map((node, i) => (
    <SectionCard
      key={node.id}
      index={i}
      section={node}
      title={node.Title}
      content={node.Content}
      slider={node.Slider}
    />
  ));
};
