import React from 'react';
import s from './Users.module.css';
import avatar from '../../img/avatar.png';

const Users = (props) => {

  return (
    <div className = {s.content}>
      <div>
        {props.paginator.map((p) => {
          return (
            <span key ={p} onClick ={() => props.chosePage(p)} 
            className = {props.currentPage === p ? s.selected : undefined}>{p}
            </span> 
          )
        })}
      </div>
      <div>
        {
          props.users.map((user) => {
            return (
              <div key = {user.id}>
                <div><img alt ="" src= {user.photos.small === null ? avatar : user.photos.small} /></div>
                <div>{user.name}</div>
                <div>{user.followed ? 
                  <button onClick = {()=> props.unfollow(user.id)}>Unnfollow</button> : 
                  <button onClick = {()=> props.follow(user.id)}>Follow</button>}
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