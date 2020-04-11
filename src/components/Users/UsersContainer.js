import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {folowUser, unfolowUser, setUsers, chosePageAC, toggleFetching} from '../../store/Users/actions';
import * as axios from 'axios';
import loader from '../../img/ZZ5H.gif';
import Users from './Users';


const UsersContainer = () => {
  const users = useSelector((state) => state.users.users);
  const pageSize = useSelector((state) => state.users.pageSize);
  const currentPage = useSelector((state) => state.users.currentPage);
  const totalUsersCount = useSelector((state) => state.users.totalUsersCount);
  const isFetching = useSelector((state) => state.users.isFetching);
  
  const dispatch = useDispatch();

  useEffect( ()=> {
    dispatch(toggleFetching(true));
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
    .then((response) => {
      dispatch(toggleFetching(false));
      addUsers(response.data.items);
    })
  }, [])

 
  const addUsers = (users) => {
    dispatch(setUsers(users))
  }

  const follow = (id) => {
    dispatch(folowUser(id))
  }

  const unfollow = (id) => {
    dispatch(unfolowUser(id))
  }

  const chosePage = (p) => {
    dispatch(chosePageAC(p)); 
    dispatch(toggleFetching(true));  
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${pageSize}`)
    .then((response) => {
      dispatch(toggleFetching(false));
      addUsers(response.data.items);
    }) 
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
          addUsers = {addUsers} 
          follow = {follow} 
          unfollow = {unfollow} 
          pageSize = {pageSize}
          currentPage = {currentPage}
          totalUsersCount = {totalUsersCount}
          chosePage = {chosePage}
          paginator = {paginator}
        />
      }
    </div>
  )
}

export default UsersContainer;