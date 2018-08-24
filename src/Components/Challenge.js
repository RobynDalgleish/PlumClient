import React from 'react';
import ProgressBar from './ProgressBar';
import { Link } from 'react-router-dom';

const Challenge = ({ challenges = [], name = '' , id }) => {

  if (!challenges.length && !name.length) {
    return null;
  }
  
  return(
    <div>
      <h2>{name}</h2>
      <div>
        {
          challenges.map((item, i) => {
            return ( 
              <div key={i}>
                { 
                  item.userPoints === item.pointsValue ?
                  <div className='card cardPadding congratsCard'>
                    <div>
                      <h2>Congrats!</h2>
                      <p className='congratsCardChallenge'>You completed {item.name}! Redeem your challenge for a reward!</p>
                      <p className='congratsCardRewards'>{ item.userPoints }pts & { item.rewardName }</p>
                      <Link className='button' to={`/profiles/${id}/congrats`}><button>Redeem</button></Link>
                    </div>
                  </div>
                  :
                  <div className='card'>
                    <div className='cardPadding challengeNameAndDetails'>
                      <h3>{ item.name }</h3>
                      <Link to='/challenges'>Details</Link>
                    </div>
                    <div className='cardPadding challengePercentAndPts'>
                      <p>{ Math.floor(item.userPoints / item.pointsValue * 100) }%</p>
                      <p>{ item.pointsValue }pts</p>
                    </div>
                    <div className='cardPadding challengeProgressBar'>
                      <ProgressBar min={0} max={ item.pointsValue } current={ item.userPoints } />
                    </div>
                  </div>
                }
              </div> 
            );
          })
        }
      </div>
    </div>
  );

};

export default Challenge;