import React from 'react';
import m from './Menu.module.css';
import {NavLink} from 'react-router-dom';

const Menu = () => {
  return (
    <div className = {m.menu}>
      <div>
        <NavLink to = "/">Profile</NavLink>
      </div>
      <div>
        <NavLink to = "/dialogs">Messages</NavLink>
      </div>
      <div>
        <NavLink to = "/users">Users</NavLink>
      </div>
      <div>
       <NavLink to = "">News</NavLink>
      </div>
      <div>
      <NavLink to = "">Music</NavLink>
      </div>
    </div>
  )
}

export default Menu;