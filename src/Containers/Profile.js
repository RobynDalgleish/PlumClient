import React, { Component } from 'react';
import HomeStudio from '../Components/HomeStudio';
import FitnessClass from '../Components/FitnessClass';
import Challenge from '../Components/Challenge';
import Badge from '../Components/Badge';
import Status from '../Components/Status';

class Profile extends Component {
  
  // functions to check if requested data exists in a particular profile before returning the component:
  renderBadges = (badges, type, id) => {
    if (!badges || !badges.length) {
      return null;
    };
    return <Badge data={badges} name={type} id={id}/>
  };
  
  renderChallenges = (challenges, type, id) => {
    if (!challenges || !challenges.length) {
      return null;
    };
    return <Challenge challenges={challenges} name={type} id={id}/>
  };
  
  renderClasses = (classes, type) => {
    if (!classes || !classes.length) {
      return null;
    };
    return <FitnessClass data={classes} name={type} />
  };
      
  render() {
    console.log(this.props.profile)

    return(
      <div className='profile'>
        <div className='profileWrapper'>
         
          <header>
            <h1 className='userName'>Hey { this.props.profile.firstName },</h1>
          </header>
          
          <section className='mainInfo'>
            <div className='card'>
              <HomeStudio data={ this.props.profile.homeStudio } />
              <Status level={this.props.profile.level} levelsList={this.props.profile.levelsList} points={this.props.profile.points} />
              <div>
                { this.renderBadges(this.props.profile.badges, 'Badges', this.props.profile.id)}
              </div>
            </div>
          </section>
          
          <section>
            <div>
              { this.renderChallenges(this.props.profile.currentChallenges, 'Current Challenges', this.props.profile.id) }
            </div>
          </section>
         
          <section>
            { this.renderClasses(this.props.profile.upcomingClasses, 'Upcoming Classes') }
          </section>
          
          {/* <section>
            { this.renderFriends(this.props.profile.friends, 'Friends') }
          </section> */}

        </div>

      </div>
    );
  }

}

export default Profile;