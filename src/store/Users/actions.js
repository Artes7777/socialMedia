export const SET_USERS = "SET_USERS";
export const FOLOW_USER = "FOLOW_USER";
export const UNFOLOW_USER = "UNFOLOW_USER";
export const CHOSE_PAGE = "CHOSE_PAGE";
export const TOGGLE_FETCHING = "TOGGLE_FETCHING";

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users
})

export const folowUser = (id) => ({
  type: FOLOW_USER,
  payload: id
})

export const unfolowUser = (id) => ({
  type: UNFOLOW_USER,
  payload: id
})

export const chosePageAC = (page) => ({
  type: CHOSE_PAGE,
  payload: page
})


export const toggleFetching = (isFetching) => ({
  type: TOGGLE_FETCHING,
  payload: isFetching
})