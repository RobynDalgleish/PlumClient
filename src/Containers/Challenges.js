import React, { Component } from 'react';
import ChallengeExplore from '../Components/ChallengeExplore';

class Challenges extends Component {

  render() {
    return(
      <div className='rewards'>
        <div className='challengesWrapper'>
          <header>
            <h1 className='userName'>Challenges</h1>
          </header>
          <section className='mainInfo'>

          </section>
          {/* <Challenge challenges={this.props.profile.currentChallenges} name={'Current Challenges'} id={this.props.profile.id}/> */}
          <ChallengeExplore rewards={this.props.profile.currentChallenges}/>
        </div>
      </div>
    )
  }

}

export default Challenges;