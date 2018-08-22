import React, { Component } from 'react';
import axios from 'axios';
import HomeStudio from '../Components/HomeStudio';
import FitnessClass from '../Components/FitnessClass';
import Challenge from '../Components/Challenge';
import Badge from '../Components/Badge';
import Nav from '../Components/Nav';
import Status from '../Components/Status';

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
      
  render() {
    
    if (!this.state.profile) {
      return <div>Loading...</div>
    }

    return(
      <div className='profile'>
        <Nav profile={this.state.profile}/>
       
        <div className='profileWrapper'>
         
          <header>
            <h1 className='userName'>Hey { this.state.profile.firstName },</h1>
          </header>
          
          <section className='mainInfo'>
            <div className='card'>
              <HomeStudio data={ this.state.profile.homeStudio} name={ 'Home Studio' } />
              <Status level={this.state.profile.level} levelsList={this.state.profile.levelsList} points={this.state.profile.points} />
              <div>
                { this.renderBadges(this.state.profile.badges, 'Badges')}
              </div>
            </div>
          </section>
          
          <section>
            <div>
              { this.renderChallenges(this.state.profile.currentChallenges, 'Current Challenges') }
            </div>
          </section>
         
          <section>
            { this.renderClasses(this.state.profile.upcomingClasses, 'Upcoming Classes') }
          </section>
          
          {/* <section>
            { this.renderFriends(this.state.profile.friends, 'Friends') }
          </section> */}

        </div>

      </div>
    );
  }

}

export default Profile;