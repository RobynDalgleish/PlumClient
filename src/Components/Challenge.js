import React from 'react';
import ProgressBar from './ProgressBar';
// import moment from 'moment';

const Challenge = ({ challenges = [], name = '' }) => {

  if (!challenges.length && !name.length) {
    return null;
  }
  
  return(
    <div>
      <h3>{name}</h3>
      {
        challenges.map((item, i) => {
          return ( 
            <div key={i}>
              <p>{item.achievementName}</p>
              <ProgressBar min={0} max={item.pointsValue} current={item.userPoints} />
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