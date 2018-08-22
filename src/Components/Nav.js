import React from 'react';
import { Link } from 'react-router-dom';
import Photo from './Photo';

const Nav = (props) => {

  return(
    <nav className='navWrapper'>
      <ul>
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
          <Link to='/activity'>
            Activity
          </Link>
        </li>
        <li>
          <Link to='/profiles/3'>
            <Photo name={ props.profile.userName } photo={ props.profile.photo }/>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;