import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addUsers, choseUserPage, changePaginatorPortionNext, changePaginatorPortionPrevious} from '../store/Users/actions';
import s from './Paginator.module.css';

const Paginator = () => {

  const pageSize = useSelector((state) => state.users.pageSize);
  const currentPage = useSelector((state) => state.users.currentPage);
  const totalUsersCount = useSelector((state) => state.users.totalUsersCount);
  const currentPortion =  useSelector((state) => state.users.currentPortion);
  const dispatch = useDispatch();
  const leftMostPage = (currentPortion - 1) * 10 + 1;
  const rigthMostPage = currentPortion  * 10;
  const pages = Math.ceil(totalUsersCount / pageSize);
  const portionCount = Math.ceil(pages / 10);

  const chosePage = (p) => {
    dispatch(choseUserPage(p));
    dispatch(addUsers(p, pageSize)) 
  }

  const previousPage = () => {
    dispatch(changePaginatorPortionPrevious())
  }

  const nextPage = () => {
    dispatch(changePaginatorPortionNext())
  }

  const paginator = [];
    for (let i=1; i <= pages; i++ ) {
      paginator.push(i)
  }

  return(
    <div>
     {currentPortion > 1 ? <button onClick = {previousPage}>Назад</button> : null}
     {paginator.filter((p) => p >= leftMostPage && p <= rigthMostPage)
     .map((p) => {
          return (
              <span key ={p} onClick ={() => chosePage(p)} 
              className = {currentPage === p ? s.selected : undefined}>{p}
              </span> 
          )
        })}
      {portionCount > currentPortion ? <button onClick = {nextPage}>Вперед</button> : null}
    </div>
  )
} 

export default Paginator;