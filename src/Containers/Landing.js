
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {

  render() {
    return(
      <div className='plumContainer'>
        <img className='plum' alt='photo of woman saying Hey!' src='../assets/images/plum.svg'/>
        <div>
          <h1>plum</h1>
        </div>
        <h2>A loyalty system for all your hard work.</h2>
        <div className='plumCta'>
          <a>Sign Up</a>
          <Link to={'/profiles/' + 55}>
            Begin ⟶
          </Link>
        </div>
      </div>
    )
  }

}

export default Landing;