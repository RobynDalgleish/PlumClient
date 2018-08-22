import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Challenges from './Challenges';
import Rewards from './Rewards';
import Activity from './Activity';
import Profile from './Profile';

class App extends Component {

  render() {
    return(
      <Router>
        <div>
          <Route exact path="/challenges" component={Challenges}/>
          <Route exact path="/rewards" component={Rewards}/>
          <Route exact path="/activity" component={Activity}/>
          <Route path="/profiles/:id" component={Profile}/>
        </div>
      </Router>
    );
  }
};

export default App;
