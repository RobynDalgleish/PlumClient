import React from 'react';

const RewardInProgress = ({ rewards }) => {
  return(
    rewards.map((item, i) => {
      return(
        <div className='card rewardInProgressCard' key={i}>
          <div className='lockContainer'>
            <img className='lockLarge' alt='' src='/assets/images/lock.svg' />
          </div>
          <div className='cardPadding'>
            <p className='nameOfReward'>{ item.nameOfReward }</p>
            <p className='pts'> { Math.floor(item.pointsValue - item.userPoints) } PTS more to unlock</p>
            <p>{ item.descriptionOfReward }</p>
            <a>Details</a>
          </div>
        </div>
      );
    })
  )
};

export default RewardInProgress;