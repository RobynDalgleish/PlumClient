import React from 'react';
import moment from 'moment';


const Invites = ({ invites }) => {
  return(
    invites.map((item, i) => {
      return(
        <div className='card activityCard cardPadding' key={i}>
          <div className='activityRequest'>
            <div>
              <img alt='' src={item.photo} />
            </div>

            <div className='activityRequestContainer'>
              <div>
                <p className='activityRequestText'><span>{ item.userName }</span> invited you to the <span>{ item.challengeName }</span> challenge</p>
                <p className='activityDate'>{ moment(item.date).startOf("day").fromNow() }</p>
              </div>
              <div>
                <img className='x' alt='' src='/assets/images/x_icon.svg' />
              </div>
            </div>
          </div>

          <div className='declineAccept'>
            <a>Decline</a>
            <a>Accept</a>
          </div>
        </div>
      );
    })
  )
};

export default Invites;