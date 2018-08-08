import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
// import Root from './Root';
import Nav from '../Components/Nav';
import Challenges from './Challenges';
import Rewards from './Rewards';
import Notifications from './Notifications';
import Profile from './Profile';
import Inbox from './Inbox';
// import Message from './Message';

class App extends Component {

  render() {
    return(
      <Router>
        <div>
          <Nav/>
          {/* <Route exact path="/" component={Root}/> */}
          <Route exact path="/challenges" component={Challenges}/>
          <Route exact path="/rewards" component={Rewards}/>
          <Route exact path="/notifications" component={Notifications}/>
          <Route path="/profile/:id" component={Profile}/>
          <Route exact path="/inbox" component={Inbox}/>
          {/* <Route exact path="/inbox/:id" component={Message}/> */}
        </div>
      </Router>
    );
  }
};

export default App;
