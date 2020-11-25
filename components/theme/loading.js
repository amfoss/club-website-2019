import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className="loading">
      <ReactLoading type={'bars'} color={'#ffc107'} height={'10%'} width={'10%'} />
    </div>
  );
};

export default Loading;
