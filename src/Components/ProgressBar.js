import React from 'react';

const ProgressBar = ({ value = 0 }) => {
  let width = value;
  if (value > 99) {
    width = 99;
  }

  return(
    <div className='progressBar'>
      <div className='progressBarLevel' 
        style={{ width: width + '%' }}
      />
    </div>
  );
};

export default ProgressBar;