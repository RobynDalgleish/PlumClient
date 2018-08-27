import React from 'react';

const Photo = ( {name, photo} ) => {

  if (!photo.length && !photo.length) {
    return null;
  }

  return(
    <div className='navImageContainer'>
      <img alt={'photo of ' + name} src={ photo }/>
    </div>
  );
};

export default Photo;