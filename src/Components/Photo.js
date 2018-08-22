import React from 'react';

const Photo = ( {name, photo} ) => {
  return(
    <div className='navImageContainer'>
      <img  alt={name} src={photo}/>
    </div>
  );
};

export default Photo;