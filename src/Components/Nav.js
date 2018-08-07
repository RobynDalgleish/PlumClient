import React from 'react';
import {
  Link
} from 'react-router-dom';

const Nav = () => {

  return(
    <div>
      <ul>
        <li>
          <Link to='/'>
            Home
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
        <li>
          <Link to='/inbox/3'>
            Message
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;