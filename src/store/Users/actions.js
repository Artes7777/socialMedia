import {API} from '../../api/api';

export const SET_USERS = "SET_USERS";
export const FOLOW_USER = "FOLOW_USER";
export const UNFOLOW_USER = "UNFOLOW_USER";
export const CHOSE_PAGE = "CHOSE_PAGE";
export const TOGGLE_FETCHING = "TOGGLE_FETCHING";
export const SET_BUTTON_STATUS = "SET_BUTTON_STATUS";
export const CHANGE_PORTION_NEXT = "CHANGE_PORTION_NEXT";
export const CHANGE_PORTION_PREVIOUS = "CHANGE_PORTION_PREVIOUS";

export const setUsers = (users, usersCount) => ({
  type: SET_USERS,
  users,
  usersCount
})

export const folowUser = (id) => ({
  type: FOLOW_USER,
  payload: id
})

export const unfolowUser = (id) => ({
  type: UNFOLOW_USER,
  payload: id
})

export const choseUserPage = (page) => ({
  type: CHOSE_PAGE,
  payload: page
})

export const toggleFetching = (isFetching) => ({
  type: TOGGLE_FETCHING,
  payload: isFetching
})

export const setButtonStatus = (status, id) => ({
  type: SET_BUTTON_STATUS,
  status: status,
  id : id
})

export const changePaginatorPortionNext = () => ({
  type: CHANGE_PORTION_NEXT,
})

export const changePaginatorPortionPrevious = () => ({
  type: CHANGE_PORTION_PREVIOUS,
})


export const addUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleFetching(true));
  API.addUsers(currentPage, pageSize)
  .then((response) => {
    dispatch(toggleFetching(false));
    dispatch(setUsers(response.data.items, response.data.totalCount));
  })
}

export const followUser = (id) => (dispatch) => {
  dispatch(setButtonStatus(true, id));
  API.follow(id)
  .then((response) => {
    if(response.data.resultCode === 0) {
      dispatch(folowUser(id))
    }
    dispatch(setButtonStatus(false, id));
  }) 
}

export const unfollowUser = (id) => (dispatch) => {
  dispatch(setButtonStatus(true, id));
  API.unfollow(id)
  .then((response) => {
    if(response.data.resultCode === 0) {
      dispatch(unfolowUser(id))
    }
    dispatch(setButtonStatus(false, id));
  })
}

