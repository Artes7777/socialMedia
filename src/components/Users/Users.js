import React from 'react';
import s from './Users.module.css';
import avatar from '../../img/avatar.png';
import { NavLink } from 'react-router-dom';
import Paginator from '../../CommonComponents/Paginator';

const Users = (props) => {
   return (
    <div className = {s.content}>
      <Paginator />
      <div>
        {
          props.users.map((user) => {
            return (
              <div key = {user.id}>
              <NavLink  to = {`/profile/${user.id}`}>
                <div><img alt ="" src= {user.photos.small === null ? avatar : user.photos.small} /></div>
                <div>{user.name}</div>
                <div>{user.id}</div>
              </NavLink>
              <div>{user.followed ? 
                <button disabled = {props.buttonStatus.some(id => id === user.id)} onClick = {()=> props.unfollow(user.id)}>Unnfollow</button> : 
                <button disabled = {props.buttonStatus.some(id => id === user.id)} onClick = {()=> props.follow(user.id)}>Follow</button>}
              </div>
              </div>
            )
          })
        } 
      </div>  
    </div>
  )
}

export default Users;