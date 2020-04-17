import React from 'react';
import h from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className = {h.header}>
      <div> 
        Хеддер
      </div>
      <div className = {h.login}>
        {props.myData.isAuth ? props.myData.login : <NavLink to = "">Login</NavLink>}
      </div>
    </div>
  )
}

export default Header;