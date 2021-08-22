import React from 'react';
import companyJson from '../../content/alumniCompanyImage.json';
import universityJson from '../../content/alumniUniversityImage.json';

export default () => {
  return (
    <div className="text-center bg-white" style={{ padding: '4vh 0' }}>
      <h3 className="mb-4"> Our Alumni are at </h3>
      <div style={{ padding: '0 5vw' }}>
        {companyJson.map((edge) => (
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
      <hr style={{ textAlign: 'center', width: '80%' }} />
      <div style={{ padding: '0 5vw' }}>
        {universityJson.map((edge) => (
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
