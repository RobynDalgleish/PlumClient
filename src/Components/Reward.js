import React from 'react';
import moment from 'moment';
import { sortByDate } from '../utils';


const Reward = ({ rewards }) => {

  if (!rewards.length && !rewards.length) {
    return null;
  }

  return(
    sortByDate(rewards, 'date')
      .map((item, i) => {
        return(
          <div className='card rewardCard' key={i}>
            <div className='cardPadding'>
              <p className='nameOfReward'>{ item.nameOfReward }</p>
              <a>Details</a>
            </div>
            <div className='cardPadding'>
              <p className='rewardDate'>{ moment(item.date).format("MMMM DD") }</p>
              <p className='rewardDescription'>{ item.descriptionOfReward }</p>
            </div>
            <div className='cardPadding unlockedRedeem'>
              <div>
                <img className='unlocked' alt='' src='/assets/images/unlocked.svg' />
                <p>Unlocked</p>
              </div>
              <a>Redeem</a>
            </div>
          </div>
        );
      })
  )
};

export default Reward;