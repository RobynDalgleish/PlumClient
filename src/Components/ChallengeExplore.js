import React from 'react';
import moment from 'moment';
import { sortByDate } from '../utils';


const ChallengeExplore = ({ rewards }) => {
  <div>
  <header>
  <h1 className='userName'>Rewards</h1>
  </header>
<section className='mainInfo'>
  <div className='card'>
    <HomeStudio data={this.props.profile.homeStudio} />
    <Status level={this.props.profile.level} levelsList={this.props.profile.levelsList} points={this.props.profile.points} />
  </div>
</section>

  </div>

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