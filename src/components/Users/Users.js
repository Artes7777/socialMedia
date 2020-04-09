import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
 
  return (
    <div className = {s.content}>
    {
      props.users.map((user) => {
        return (
          <div key = {user.id}>
            <div><img src= {user.photo.small} /></div>
            <div>{user.name}</div>
            <div>{user.followed ? 
              <button onClick = {props.unfollow}>Unnfollowed</button> : 
              <button onClick = {props.follow}>Unnfollowed</button>}
            </div>
          </div>
        )
      })
    }   
    </div>
  )
}

export default Users;