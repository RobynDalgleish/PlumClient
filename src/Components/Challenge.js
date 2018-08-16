import React from 'react';
import ProgressBar from './ProgressBar';
import { Link } from 'react-router-dom';

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
              { 
                item.userPoints === item.pointsValue ?
                <div>
                  <h2>Congrats!</h2>
                  <p>You completed {item.name}! Redeem your challenge for a reward!</p>
                  <p>{ item.userPoints }pts &</p>
                  <p>{ item.rewardName }</p>
                  <Link to='/rewards'>Redeem</Link>
                </div>
                :
                <div>
                  <p>{ item.achievementName }</p>
                  <p>{ Math.floor(item.userPoints / item.pointsValue * 100) }%</p>
                  <p>{ item.pointsValue }pts</p>
                  <ProgressBar min={0} max={ item.pointsValue } current={ item.userPoints } />
                </div>
              }
            </div> 
          );
        })
      }
    </div>
  );

};

export default Challenge;