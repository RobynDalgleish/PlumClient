import React from 'react';
import moment from 'moment';


const Notifications = ({ notifications }) => {
  return(
    notifications.map((item, i) => {
      return(
        <div className='card notificationsCard' key={i}>
          <div className='notificationsRequest'>
            <div>
              <img alt='' src={item.photo} />
            </div>

            <div className='notificationsRequestContainerContainer'>
              <div className='notificationsRequestContainer'>
                <div>
                  <p className='notificationsRequestText'><span>{ item.userName }</span> completed the <span>{ item.challengeName }</span> challenge</p>
                </div>
                <div>
                  <a><img className='x' alt='' src='/assets/images/x_icon.svg' /></a>
                </div>
              </div>
              <div className='details'>
                <p className='notificationsDate'>{ moment(item.date).startOf("day").fromNow() }</p>
                <a>Details</a>
              </div>
            </div>

          </div>
        </div>
      );
    })
  )
};

export default Notifications;