import React from 'react';
import { Link } from 'react-router-dom';

const HomeStudio = ({ data }) => {
    
  if (!data.name.length) {
    return null;
  }

  return(
    <div>
        <div className='homeStudio cardPadding'>
          <h3>{data.name}!</h3>
          <Link to={'/profiles/' + data.id + '/challenges/'}>
            <img className='chevron' alt='' src='/assets/images/chevron.svg' />
          </Link>
        </div> 
    </div>
  );

};

export default HomeStudio;