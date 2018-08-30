
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 2s ${bounceAnimation};
`;


class Landing extends Component {

  render() {
    return(
      <div className='plumWhooContainer'>
        <BouncyDiv>
          <img className='plumWhoo' alt='photo of woman saying Hey!' src='../assets/images/plumWhoo.svg'/>
        </BouncyDiv>
        <div className='plumContainer'>
          <img className='plum' alt='plum' src='../assets/images/plum.svg'/>
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