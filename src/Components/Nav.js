import React from 'react';
import {
  Link
} from 'react-router-dom';

const Nav = () => {

  return(
    <div>
      <ul className='navContainer'>
        {/* <li>
          <Link to='/'>
            Mindbody
          </Link>
        </li> */}
        <li>
          <Link to='/challenges'>
            Challenges
          </Link>
        </li>
        <li>
          <Link to='/rewards'>
            Rewards
          </Link>
        </li>
        <li>
          <Link to='/notifications'>
            Notifications
          </Link>
        </li>
        <li>
          <Link to='/profile/3'>
            Profile
          </Link>
        </li>
        <li>
          <Link to='/inbox'>
            Inbox
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;