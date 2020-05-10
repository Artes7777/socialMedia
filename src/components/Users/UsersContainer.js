import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {followUser, unfollowUser, addUsers} from '../../store/Users/actions';
import loader from '../../img/ZZ5H.gif';
import Users from './Users';
import {getAllUsers} from '../../store/selectores';

const UsersContainer = () => {
  
  const users = useSelector(getAllUsers);
  const pageSize = useSelector((state) => state.users.pageSize);
  const currentPage = useSelector((state) => state.users.currentPage);
  const isFetching = useSelector((state) => state.users.isFetching);
  const buttonStatus = useSelector((state) => state.users.buttonStatus);
  const dispatch = useDispatch();
  
  useEffect( () => {
    dispatch(addUsers(currentPage, pageSize));
  }, [dispatch, currentPage, pageSize])

 
  const follow = (id) => {
    dispatch(followUser(id))
  }

  const unfollow = (id) => {
    dispatch(unfollowUser(id))
  }

  return (
    <div>
      {isFetching ? <img alt = "" src = {loader} /> :  
        <Users 
          users = {users} 
          follow = {follow} 
          unfollow = {unfollow} 
          buttonStatus = {buttonStatus}
        />
      }
    </div>
  )
}

export default UsersContainer;