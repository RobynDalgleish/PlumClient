import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Nav from '../Components/Nav';
import Challenges from './Challenges';
import Rewards from './Rewards';
import Notifications from './Notifications';
import Profile from './Profile';
import Inbox from './Inbox';

class App extends Component {

  render() {
    return(
      <Router>
        <div>
          <Nav/>
          <Route exact path="/challenges" component={Challenges}/>
          <Route exact path="/rewards" component={Rewards}/>
          <Route exact path="/notifications" component={Notifications}/>
          <Route path="/profiles/:id" component={Profile}/>
          <Route exact path="/inbox" component={Inbox}/>
        </div>
      </Router>
    );
  }
};

export default App;
