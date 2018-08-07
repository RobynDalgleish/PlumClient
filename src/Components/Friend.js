import React from 'react';

const Friend = ({ data = [], name = '' }) => {
  
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
              <img alt='' src={item.photo} />
              <p>{item.userName}</p>
              {/* <p>{item.id}</p> */}
            </div> 
          );
        })
      }
    </div>
  );
};

export default Friend;