import React from 'react';

const RewardExplore = ({ rewards }) => {
  return(
    rewards.map((item, i) => {
      return(
        <div className='card rewardCard' key={i}>
          <div className='cardPadding'>
            <p className='nameOfReward'>{ item.nameOfReward }</p>
          </div>
          <div className='cardPadding'>
            <p className='rewardDescription'>{ item.descriptionOfReward }</p>
          </div>
          <div className='cardPadding unlockedRedeem'>
            <div>
              <img className='unlocked' alt='' src='/assets/images/lock.svg' />
              <p>Locked</p>
            </div>
            <a>Details</a>
          </div>
        </div>
      );
    })
  )
};

export default RewardExplore;