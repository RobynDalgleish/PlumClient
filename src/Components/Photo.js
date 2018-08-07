import React from 'react';

const Photo = ( {name, photo} ) => {
  return(
    <div>
      <img alt={name} src={photo}/>
    </div>
  );
};

export default Photo;