import React from 'react';
import '../styles/badge.css'

const Badge = ({ data = [], type = '' }) => {
  
  if (!data.length && !type.length) {
    return null;
  }

  return(
    <div>
      <h3>{type}</h3>
      <div className='badgeContainer'>
        {
          data.map((item, i) => {
            return ( 
              <div key={i}>
                <img className='badge' alt='' src={item.photo} />
                <p>{item.userName}</p>
                {/* <p>{item.id}</p> */}
              </div> 
            );
          })
        }
      </div>
    </div>
  );
};

export default Badge;