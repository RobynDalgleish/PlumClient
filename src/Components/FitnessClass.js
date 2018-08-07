import React from 'react';
import moment from 'moment';

const FitnessClass = ({ data = [], name = '' }) => {

    if (!data.length && !name.length) {
      return null;
    }

    return(
      <div>
        <h3>{name}</h3>
        {
          data.map((item, i) => {
            return ( 
              <div key={i}>
                <p>{moment(item.date).format('MMMM Do YYYY')}</p>
                <p>{item.nameOfClass} with {item.instructor}</p>
              </div> 
            );
          })
        }
      </div>
    );

};

export default FitnessClass;