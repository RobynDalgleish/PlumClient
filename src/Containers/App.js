import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Root from './Root';

class App extends Component {

  render() {

    return(

      <Router>
        <Route path='/profiles/:id' component={ Root } />
      </Router>
    );
  }
};

export default App;
