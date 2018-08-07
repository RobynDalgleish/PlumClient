import React from 'react';
import moment from 'moment';

const Challenge = ({ data = [], name = '' }) => {

  if (!data.length && !name.length) {
    return null;
  }
  
  return(
    <div>
      <h3>{name}</h3>
      {
        data.map((item, i) => {
          return ( 
            <div key={i}>
              <p>{item.achievementName}</p>
              {/* if ____ then progress bar, else date etc */}
              <p>progress bar</p>
              {/* <p>{moment(item.achievmentDate).format('MMMM Do YYYY')}</p> */}
              {/* <p>{item.achievementId}</p> */}
            </div> 
          );
        })
      }
    </div>
  );

};

export default Challenge;