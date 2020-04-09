export const SET_USERS = "SET_USERS";
export const FOLOW_USER = "FOLOW_USER";
export const UNFOLOW_USER = "UNFOLOW_USER";

export const setUser = (users) => ({
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
