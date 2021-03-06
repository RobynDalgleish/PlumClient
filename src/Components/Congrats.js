import React from 'react';
import { Link } from 'react-router-dom';
import { ConfettiWrapper } from './confetti-wrapper';

const Congrats = (props) => {
  return(
    <ConfettiWrapper confettiNumber={300}> 
      <div className='congratsModal'>
      <div className='congratsModalCard'>
        <img className='wooho' alt='' src='/assets/images/wooho.svg' />
        <div>
          <p>{ props.profile.currentChallenges[0].pointsValue }pts + { props.profile.currentChallenges[0].rewardName }</p> 
        </div>
        <p>have been added to your profile!</p>
        <Link className='button' to={`/profiles/${props.profile.id}`}><button>Back</button></Link>
      </div>
    </div>
    </ConfettiWrapper>
  );
};

export default Congrats; 