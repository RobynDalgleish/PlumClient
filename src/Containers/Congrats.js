import React from 'react';
import { Link } from 'react-router-dom';

const Congrats = (props) => {
  return(
    <div className='congratsModal'>
      <div className='congratsModalCard'>
        <img className='wooho' alt='' src='/assets/images/wooho.svg' />
        <div>
          <p>{ props.profile.currentChallenges[0].pointsValue }pts + { props.profile.currentChallenges[0].rewardName }</p> 
        </div>
        <p>have been added to your profile!</p>
        <Link className='button' to={`/profiles/${props.id}`}><button>Back</button></Link>
      </div>
    </div>
  );
};

export default Congrats; 