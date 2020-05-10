import React from 'react';
import m from './Menu.module.css';
import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Menu = () => {

  const newMessageCount = useSelector((state) => state.dialogs.newMessageCount)

  return (
    <div className = {m.menu}>
      <div>
        <NavLink to = '/profile'>Profile</NavLink>
      </div>
      <div>
        <NavLink to = "/dialogs">Messages</NavLink>
        {newMessageCount ? <span className = {m.newMessage}>{newMessageCount}</span> : null}
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