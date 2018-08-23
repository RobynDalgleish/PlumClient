import React from 'react';

const ProgressBar = ({ min = 0, max = 100, current = 50 }) => {
  let width = (current - min) / (max - min) * 100

  return(
    <div className='progressBar'>
      <div className='progressBarLevel' style={{ width: width + '%' }} />
    </div>
  );
};

export default ProgressBar;