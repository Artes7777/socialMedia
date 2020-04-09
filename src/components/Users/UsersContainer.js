import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Users from './Users';


const UsersContainer = (props) => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const follow = (id) => {
    dispatch(props.folowUser(id))
  }

  const unfollow = (id) => {
    dispatch(props.unfolowUser(id))
  }

  return (
    <Users users = {users} follow = {follow} unfollow = {unfollow} />
  )
}

export default UsersContainer;