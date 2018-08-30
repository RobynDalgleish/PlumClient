import React, { Component } from 'react';
import ChallengeExplore from '../Components/ChallengeExplore';
import HomeStudio from '../Components/HomeStudio';
import Status from '../Components/Status';

class Challenges extends Component {

  render() {
    return(
      <div className='rewards'>
        <div className='challengesWrapper'>
          <header>
            <h1 className='userName'>Challenges</h1>
          </header>
          <section className='mainInfo'>
            <div className='card'>
              <HomeStudio data={this.props.profile.homeStudio} />
              <Status level={this.props.profile.level} levelsList={this.props.profile.levelsList} points={this.props.profile.points} />
            </div>
          </section>
          {/* <Challenge challenges={this.props.profile.currentChallenges} name={'Current Challenges'} id={this.props.profile.id}/> */}
          <ChallengeExplore rewards={this.props.profile.currentChallenges}/>
        </div>
      </div>
    )
  }

}

export default Challenges;