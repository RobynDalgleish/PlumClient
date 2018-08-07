import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Root from './Root';
import Profile from './Profile';
import Inbox from './Inbox';
import Message from './Message';
import Nav from '../Components/Nav';

class App extends Component {

  render() {
    return(
      <Router>
        <div>
          <Nav/>
          <Route exact path="/" component={Root}/>
          <Route path="/profile/:id" component={Profile}/>
          <Route exact path="/inbox" component={Inbox}/>
          <Route exact path="/inbox/:id" component={Message}/>
        </div>
      </Router>
    );
  }
};

export default App;
