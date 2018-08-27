import React from 'react';
import moment from 'moment';


const Notifications = ({ notifications }) => {
  return(
    notifications.map((item, i) => {
      return(
        <div className='card notificationsCard cardPadding' key={i}>
          <div className='notificationsRequest'>
            <div>
              <img alt='' src={item.photo} />
            </div>

            <div className='notificationsRequestContainer'>
              <div>
                <p className='notificationsRequestText'><span>{ item.userName }</span> completed the <span>{ item.challengeName }</span> challenge</p>
                <p className='notificationsDate'>{ moment(item.date).startOf("day").fromNow() }</p>
              </div>
              <div>
                <img className='x' alt='' src='/assets/images/x_icon.svg' />
              </div>
            </div>
          </div>

          <div className='details'>
            <a>Details</a>
          </div>
        </div>
      );
    })
  )
};

export default Notifications;