import React from 'react';

const HomeStudio = ({ data = {}, name = '' }) => {
    
  if (!data.length && !name.length) {
    return null;
  }

  return(
    <div>
        <div>
          <p>{data.name}</p>
        </div> 
    </div>
  );

};

export default HomeStudio;