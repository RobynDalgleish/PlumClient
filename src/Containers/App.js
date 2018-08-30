import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Root from './Root';
import Landing from './Landing';

class App extends Component {

  render() {
    return(
      <Router>
        <div>
          <Route path='/profiles/:id' component={ Root } />
          <Route exact path='/' component={ Landing } />
        </div>
      </Router>
    );
  }
};

export default App;
