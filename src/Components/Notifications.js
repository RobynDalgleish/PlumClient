import React from 'react';
import moment from 'moment';
import { sortByDate } from '../utils';

const Notifications = ({ notifications, onRemoval }) => {

  if (!notifications.length && !notifications.length) {
    return null;
  }

  return(
    sortByDate(notifications, 'date').map((item, i) => {
      return(
        <div className='card notificationsCard' id={i} key={i}>
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
                  <button onClick={ () => onRemoval(item.userName) }><img className='x' alt='' src='/assets/images/x_icon.svg' /></button>
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