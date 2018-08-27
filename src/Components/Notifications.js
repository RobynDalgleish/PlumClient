import React from 'react';
import moment from 'moment';

// function remove() {
//     let x = document.getElementById('card'); 
//     x.style.display = 'none';
//   }

const Notifications = ({ notifications }) => {

  if (!notifications.length && !notifications.length) {
    return null;
  }

  return(
    notifications.map((item, i) => {
      return(
        <div className='card notificationsCard' id='card' key={i}>
          <div className='notificationsRequest'>
            <div>
              <img alt='' src={item.photo} />
            </div>

            <div className='notificationsRequestContainerContainer'>
              <div className='notificationsRequestContainer'>
                <div>
                  <p className='notificationsRequestText'><a>{ item.userName }</a> completed the <a>{ item.challengeName }</a> challenge</p>
                </div>
                <div>
                  <button ><img className='x' alt='' src='/assets/images/x_icon.svg' /></button>
                </div>
              </div>
              <div className='details'>
                <p className='notificationsDate'>{ moment(item.date).startOf("day").fromNow() }</p>
                <button>Details</button>
              </div>
            </div>

          </div>
        </div>
      );
    })
  )
};

export default Notifications;