import React from 'react';
import moment from 'moment';
import { sortByDate } from '../utils';


const ChallengeExplore = ({ rewards }) => {

  if (!rewards.length && !rewards.length) {
    return null;
  }

  return(
    sortByDate(rewards, 'date')
      .map((item, i) => {
        return(
          <div className='card rewardCard' key={i}>
            <div className='cardPadding'>
              <p className='nameOfReward'>{ item.name }</p>
              <a>Details</a>
            </div>
            <div className='cardPadding'>
              <p className='rewardDate'>{ moment(item.date).format("MMMM DD") }</p>
              <p className='rewardDescription'>{ item.descriptionOfChallenge }</p>
            </div>
            <div className='cardPadding alignRight'>
              <a>Begin</a>
            </div>
          </div>
        );
      })
  )
};

export default ChallengeExplore;