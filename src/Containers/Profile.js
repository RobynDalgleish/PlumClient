import React, { Component } from 'react';
import axios from 'axios';
import Photo from '../Components/Photo';
import HomeStudio from '../Components/HomeStudio';
import Friend from '../Components/Friend';
import FitnessClass from '../Components/FitnessClass';
import Challenge from '../Components/Challenge';
import ProgressBar from '../Components/ProgressBar';
import Badge from '../Components/Badge';

class Profile extends Component {

  state = {
    profile: null
  };

  componentWillMount() {
    // match is an object on the React Router object
    axios.get(`http://server.internproject.hugetointernal.hugeops.com/api/profiles${this.props.match.params.id}`)
      .then(({ data }) => {
      this.setState({
        profile: data
      })
    });
  };

  // functions to check if requested data exists in a particular profile before returning the component
  renderFriends = (friends, type) => {
    if (!friends || !friends.length) {
      return null;
    }
    return <Friend data={friends} name={type}/>
  }

  renderClasses = (classes, type) => {
    if (!classes || !classes.length) {
      return null;
    };
    return <FitnessClass data={classes} name={type} />
  };

  renderChallenges = (challenges, type) => {
    if (!challenges || !challenges.length) {
      return null;
    };
    return <Challenge data={challenges} name={type} />
  };

  renderBadges = (badges, type) => {
    if (!badges || !badges.length) {
      return null;
    };
    return <Badge data={badges} name={type} />
  };

  getStatus = () => {
    return (this.state.profile.points / 1000) * 100;
  }

  render() {

    if (!this.state.profile) {
      return <div>Loading...</div>
    }

    const statusValue = this.getStatus();

    return(
      <div>
        <p>Level: {this.state.profile.level}</p>
        <ProgressBar value={statusValue} />
        <Photo name={ this.state.profile.userName } photo={ this.state.profile.photo }/>
        <h2>{ this.state.profile.userName }</h2>
        <HomeStudio data={ this.state.profile.homeStudio} name={ 'Home Studio' } />
        <section>
          { this.renderBadges(this.state.profile.badges, 'Won Challenges')}
        </section>
        <section>
          { this.renderChallenges(this.state.profile.currentChallenges, 'Current Challenges') }
        </section>
        <section>
          {/* { this.renderClasses(this.state.profile.pastClasses, 'Past Classes') } */}
          { this.renderClasses(this.state.profile.upcomingClasses, 'Upcoming Classes') }
        </section>
        <section>
          { this.renderFriends(this.state.profile.friends, 'Friends') }
        </section>
      </div>
    );
  }

}

export default Profile;