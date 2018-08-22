import React from 'react';
import { Link } from 'react-router-dom';

const HomeStudio = ({ data = {}, name = '' }) => {
    
  if (!data.length && !name.length) {
    return null;
  }

  return(
    <div>
        <div className='homeStudio cardPadding'>
          <h3>{data.name}</h3>
          <Link to='/challenges'> 
            <img className='chevron' alt='' src='/assets/pngs/chevron.png' />
          </Link>
        </div> 
    </div>
  );

};

export default HomeStudio;