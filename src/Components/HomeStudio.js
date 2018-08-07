import React from 'react';

const HomeStudio = ({ data = {}, name = '' }) => {
    
  if (!data.length && !name.length) {
    return null;
  }

  return(
    <div>
      <h3>{name}</h3>
        <div>
          <p>{data.name}</p>
          <p>{data.location.streetNumber} {data.location.streetName}</p>
          <p>Unit {data.location.unit}</p>
          <p>{data.location.city}</p>
          <p>{data.location.state}</p>
          <p>{data.location.country}</p>
          <p>{data.location.zipcode}</p>
        </div> 
    </div>
  );

};

export default HomeStudio;