import React from 'react';
import json from '../../content/alumniImage.json';
export default () => {
  return (
    <div className="text-center bg-white" style={{ padding: '4vh 0' }}>
      <h3 className="mb-4"> Our Alumni Work at</h3>
      <div style={{ padding: '0 5vw' }}>
        {json.map((edge) => (
          <img
            src={edge.image}
            style={{
              height: '2vmax',
              maxHeight: '40px',
              minHeight: '28px',
              margin: '1vmax',
            }}
          />
        ))}
      </div>
    </div>
  );
};
