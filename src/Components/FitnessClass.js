import React from 'react';
import moment from 'moment';

const today = moment('2018-09-03');
// const tomorrow = moment().calendar(today, 'nextDay');

const dateInContext = (date) => {
  if( moment(date).isSame(today, 'day') ){
    return "Today";
  }
  // else if( moment(date).isSame(tomorrow, 'day') ){
  //   return "Tomorrow";
  // }
  else if( moment(date).isSame(today, 'week') ){
    return "This week";
  }
  else if( moment(date).isSame(today, 'month') ){
    return "This month";
  }
  else {
    return null;
  }
};

const FitnessClass = ({ data = [], name = '' }) => {

    if (!data.length && !name.length) {
      return null;
    };

    return(
      <div>
        <h3>{name}</h3>
        {
          data.map((item, i) => {
            return ( 
              <div key={i}>
                <p>{item.nameOfClass}</p>
                <p>{item.instructor}</p>
                <p>{ dateInContext(item.date) }</p>
                <p>{ moment(item.date).format("MMMM DD @ hh:mma") }</p>
              </div> 
            );
          })
        }
      </div>
    );

};

export default FitnessClass;