import React, { Component } from 'react';
import axios from 'axios';
import HomeStudio from '../Components/HomeStudio';
// import Friend from '../Components/Friend';
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
    // axios.get(`http://server.internproject.hugetointernal.hugeops.com/api/profiles/${this.props.match.params.id}`)
    axios.get(`http://localhost:8080/api/profiles/${this.props.match.params.id}`)
      .then(({ data }) => {
        this.setState({
          profile: data
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  getStatus = () => {
    return (this.state.profile.points / 1000) * 100;
  };

  getPointsUntilNextLevel = (levelsList, currentPoints) => {
    const numberOfPoints = levelsList.find(item => item.xpLimit > currentPoints).xpLimit;
    return (numberOfPoints - currentPoints)
  };

  getNextLevel = (levelsList, currentLevel) => {
    const currentLevelIndex = levelsList.findIndex(item => item.level === currentLevel);
    const nextLevel = levelsList[currentLevelIndex + 1]
    return nextLevel.level
  };
  
  // functions to check if requested data exists in a particular profile before returning the component:
  renderBadges = (badges, type) => {
    if (!badges || !badges.length) {
      return null;
    };
    return <Badge data={badges} name={type} />
  };
  
  renderChallenges = (challenges, type) => {
    if (!challenges || !challenges.length) {
      return null;
    };
    return <Challenge challenges={challenges} name={type} />
  };
  
  renderClasses = (classes, type) => {
    if (!classes || !classes.length) {
      return null;
    };
    return <FitnessClass data={classes} name={type} />
  };
  
  // renderFriends = (friends, type) => {
    //   if (!friends || !friends.length) {
      //     return null;
      //   }
      //   return <Friend data={friends} name={type}/>
      // }
      
  render() {
    if (!this.state.profile) {
      return <div>Loading...</div>
    }
  
    let currentLevelIndex = 0;
    const currentLevel = this.state.profile.levelsList.find((levelItem, i) => {
      currentLevelIndex = i
      return levelItem.level === this.state.profile.level;
    });

    const statusProgress = {
      min: currentLevel.level === 'Bronze' ? 0 : this.state.profile.levelsList[currentLevelIndex - 1].xpLimit,
      current: this.state.profile.points,
      max: currentLevel.xpLimit,
    };

    return(
      <div>
        {/* <Photo name={ this.state.profile.userName } photo={ this.state.profile.photo }/> */}
        <h2>Hey, { this.state.profile.firstName }</h2>
        <HomeStudio data={ this.state.profile.homeStudio} name={ 'Home Studio' } />
        <p>{this.state.profile.points} PTS</p>
        {
          (this.state.profile.level === "Platinum") ? <p>{ this.state.profile.level }</p>
          :
          <div>
            <ProgressBar { ...statusProgress } />
            <p>{ this.state.profile.level }</p>
            <p>
              { this.getPointsUntilNextLevel(this.state.profile.levelsList, this.state.profile.points) } PTS until ⟶ { this.getNextLevel(this.state.profile.levelsList, this.state.profile.level) }
            </p>
          </div>
        }
        <section>
          { this.renderBadges(this.state.profile.badges, 'Badges')}
        </section>
        <section>
          { this.renderChallenges(this.state.profile.currentChallenges, 'Current Challenges') }
        </section>
        <section>
          { this.renderClasses(this.state.profile.upcomingClasses, 'Upcoming Classes') }
        </section>
        {/* <section>
          { this.renderFriends(this.state.profile.friends, 'Friends') }
        </section> */}
      </div>
    );
  }

}

export default Profile;