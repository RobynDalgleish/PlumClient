import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import axios from 'axios';
import Challenges from './Challenges';
import Rewards from './Rewards';
import Activity from './Activity';
import Profile from './Profile';
import Congrats from '../Components/Congrats';
import Nav from '../Components/Nav'

class Root extends Component {

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

  render() {

    if (!this.state.profile) {
      return <div>Loading...</div>
    }

    return(
      <div>
        <Nav profile={ this.state.profile } />
        <Route exact path={`${this.props.match.url}/challenges`} render={(props) => <Challenges profile={ this.state.profile }/>}/>
        <Route exact path={`${this.props.match.url}/rewards`} render={(props) => <Rewards profile={ this.state.profile }/>}/>
        <Route exact path={`${this.props.match.url}/activity`} render={(props) => <Activity profile={ this.state.profile }/>}/>
        <Route exact path={`${this.props.match.url}/congrats`} render={(props) => <Congrats profile={ this.state.profile }/>}/>
        <Route exact path={this.props.match.url} render={(props) => <Profile profile={ this.state.profile }/>}/>
      </div>
    )
  }

}

export default Root;