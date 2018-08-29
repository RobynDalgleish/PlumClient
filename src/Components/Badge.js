import React from 'react';
import { Link } from 'react-router-dom';

const Badge = ({ data = [], name = '', id}) => {
  
  if (!data.length && !name.length) {
    return null;
  }

  return(
    <div className='badges cardPadding'>
      <h3>{ name }</h3>
      <div>
        {
          data.filter((badge, i) => i < 4).map((item, i) => {
            return ( 
              <div className='badge' key={i}>
                <img alt={item.badgeDescription} src={item.badgePhoto} />
                <p>{item.badgeName}</p>
              </div> 
            );
          })
        }
      </div>
      <Link className='viewAllBadges' to={'/profiles/' + id + '/rewards/'}>See All</Link>
    </div>
  );
};

export default Badge;