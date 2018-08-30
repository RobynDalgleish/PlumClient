import React, { Component } from 'react';
import Challenge from '../Components/Challenge';
import ChallengeExplore from '../Components/ChallengeExplore';

class Challenges extends Component {

  render() {
    return(
      <div className='challengesWrapper'>
        {/* <Challenge challenges={this.props.profile.currentChallenges} name={'Current Challenges'} id={this.props.profile.id}/> */}
        <ChallengeExplore rewards={this.props.profile.currentChallenges}/>
      </div>
    )
  }

}

export default Challenges;