import React from 'react';
import moment from 'moment';

function remove() {
    let x = document.getElementById('card'); 
    x.style.display = 'none';
  }

const Invites = ({ invites }) => {

  if (!invites.length && !invites.length) {
    return null;
  }

  return(
    invites.map((item, i) => {
      return(
        <div className='card invitesCard' id='card' key={i}>
          <div className='invitesRequest'>
            <div>
              <img alt='' src={item.photo} />
            </div>

            <div className='invitesRequestContainer'>
              <div>
                <p className='invitesRequestText'><a>{ item.userName }</a> invited you to the <a>{ item.challengeName }</a> challenge</p>
                <p className='invitesDate'>{ moment(item.date).startOf("day").fromNow() }</p>
              </div>
              <div>
                <button onClick={ remove() }><img className='x' alt='' src='/assets/images/x_icon.svg' /></button>
              </div>
            </div>
          </div>

          <div className='declineAccept'>
            <button className='decline'>Decline</button>
            <button>Accept</button>
          </div>
        </div>
      );
    })
  )
};

export default Invites;