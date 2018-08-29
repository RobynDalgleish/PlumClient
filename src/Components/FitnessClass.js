import React from 'react';
import moment from 'moment';
import { sortByDate } from '../utils';

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
        <h2>{name}</h2>
        <div>
          {
          sortByDate(data, 'date')
            .map((item, i) => {
              return ( 
                <div className='card fitnessClassWrapper' key={i}>
                  <div className='cardPadding'>
                    <p className='nameOfClass'>{item.nameOfClass}</p>
                    <p className='instructor'>{item.instructor}</p>
                  </div>
                  <div className='cardPadding'>
                    <p className='dateInContext'>{ dateInContext(item.date) }</p>
                    <p className='dateOfClass'>{ moment(item.date).format("MMMM DD @ hh:mma") }</p>
                  </div>
                </div> 
              );
            })
          }
        </div>
      </div>
    );

};

export default FitnessClass;