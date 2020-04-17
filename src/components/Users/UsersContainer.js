import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {followUser, unfollowUser, addUsers, choseUserPage} from '../../store/Users/actions';
import loader from '../../img/ZZ5H.gif';
import Users from './Users';

const UsersContainer = () => {
  const users = useSelector((state) => state.users.users);
  const pageSize = useSelector((state) => state.users.pageSize);
  const currentPage = useSelector((state) => state.users.currentPage);
  const totalUsersCount = useSelector((state) => state.users.totalUsersCount);
  const isFetching = useSelector((state) => state.users.isFetching);
  const buttonStatus = useSelector((state) => state.users.buttonStatus);
  
  const dispatch = useDispatch();
  useEffect( ()=> {
    dispatch(addUsers(currentPage, pageSize));
  }, [])

 
  const follow = (id) => {
    dispatch(followUser(id))
  }

  const unfollow = (id) => {
    dispatch(unfollowUser(id))
  }

  const chosePage = (p) => {
    dispatch(choseUserPage(p));
    dispatch(addUsers(p, pageSize)) 
  }

  const pages = totalUsersCount/pageSize;

  const paginator = [];
    for (let i=1; i <= pages; i++ ) {
      paginator.push(i)
  }

  return (
    <div>
      {isFetching ? <img alt="" src ={loader}/> :  
        <Users 
          users = {users} 
          follow = {follow} 
          unfollow = {unfollow} 
          currentPage = {currentPage}
          totalUsersCount = {totalUsersCount}
          chosePage = {chosePage}
          paginator = {paginator}
          buttonStatus = {buttonStatus}
        />
      }
    </div>
  )
}

export default UsersContainer;