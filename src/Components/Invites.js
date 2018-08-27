import React from 'react';
import moment from 'moment';


const Invites = ({ invites }) => {
  return(
    invites.map((item, i) => {
      return(
        <div className='card invitesCard' key={i}>
          <div className='invitesRequest'>
            <div>
              <img alt='' src={item.photo} />
            </div>

            <div className='invitesRequestContainer'>
              <div>
                <p className='invitesRequestText'><span>{ item.userName }</span> invited you to the <span>{ item.challengeName }</span> challenge</p>
                <p className='invitesDate'>{ moment(item.date).startOf("day").fromNow() }</p>
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