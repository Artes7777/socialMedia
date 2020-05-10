import React from 'react';
import h from './Header.module.css';
import { NavLink } from 'react-router-dom';
import * as _ from 'lodash';

const Header = ({myData, logout}) => {

  return (
    <div className = {h.header}>
      <div> 
        Хеддер
      </div>
      <div className = {h.login}>
        {myData.isAuth ? 
          <div>{myData.login}<button onClick = {logout}>Выйти</button></div> : 
          <NavLink to = "/login">Login</NavLink>}
      </div>
    </div>
  )
}

const equal = (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
}

export default React.memo(Header, equal) 